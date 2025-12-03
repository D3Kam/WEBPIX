import User from '../models/User.js';
import { generateToken } from '../middleware/auth.js';
import { validationResult } from 'express-validator';

// Sign up with email and password
export const signup = async (req, res) => {
  try {
    // Validate request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password, name, surname, walletAddress, livingAddress, phoneNumber } = req.body;

    // Create user
    const userId = await User.create({
      email,
      password,
      name,
      surname,
      walletAddress,
      livingAddress,
      phoneNumber,
      authProvider: 'local'
    });

    // Generate token
    const token = generateToken(userId);

    // Get user data (without password)
    const user = await User.findById(userId);

    res.status(201).json({
      message: 'User created successfully',
      token,
      user
    });
  } catch (error) {
    console.error('Signup error:', error);

    if (error.message.includes('already exists')) {
      return res.status(409).json({ error: error.message });
    }

    res.status(500).json({ error: 'Failed to create user' });
  }
};

// Login with email and password
export const login = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    // Find user
    const user = await User.findByEmail(email);

    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Check if user used Google OAuth
    if (user.auth_provider === 'google' && !user.password_hash) {
      return res.status(401).json({ error: 'Please sign in with Google' });
    }

    // Verify password
    const isValid = await User.verifyPassword(password, user.password_hash);

    if (!isValid) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Generate token
    const token = generateToken(user.id);

    // Remove password from response
    const { password_hash, ...userWithoutPassword } = user;

    res.json({
      message: 'Login successful',
      token,
      user: userWithoutPassword
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Login failed' });
  }
};

// Get current user
export const getCurrentUser = async (req, res) => {
  try {
    // User is already attached by auth middleware
    res.json({ user: req.user });
  } catch (error) {
    console.error('Get user error:', error);
    res.status(500).json({ error: 'Failed to get user' });
  }
};

// Google OAuth callback handler
export const googleCallback = async (req, res) => {
  try {
    // User is attached by passport
    const token = generateToken(req.user.id);

    // Redirect to frontend with token
    res.redirect(`${process.env.FRONTEND_URL}/auth/callback?token=${token}`);
  } catch (error) {
    console.error('Google callback error:', error);
    res.redirect(`${process.env.FRONTEND_URL}/login?error=auth_failed`);
  }
};
