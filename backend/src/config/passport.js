import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import User from '../models/User.js';
import dotenv from 'dotenv';

dotenv.config();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        // Check if user exists with Google ID
        let user = await User.findByGoogleId(profile.id);

        if (user) {
          return done(null, user);
        }

        // Check if user exists with same email
        user = await User.findByEmail(profile.emails[0].value);

        if (user) {
          // If user exists with email but different auth provider, return error
          return done(null, false, {
            message: 'Email already registered with different method'
          });
        }

        // Extract name parts
        const name = profile.name.givenName || profile.displayName.split(' ')[0];
        const surname = profile.name.familyName || profile.displayName.split(' ').slice(1).join(' ') || '';

        // Create new user
        const userId = await User.create({
          email: profile.emails[0].value,
          name,
          surname,
          authProvider: 'google',
          googleId: profile.id
        });

        user = await User.findById(userId);
        done(null, user);
      } catch (error) {
        done(error, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

export default passport;
