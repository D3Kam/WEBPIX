import express from 'express';
import { body } from 'express-validator';
import passport from '../config/passport.js';
import {
  signup,
  login,
  getCurrentUser,
  googleCallback
} from '../controllers/authController.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// Validation rules
const signupValidation = [
  body('email').isEmail().normalizeEmail().withMessage('Valid email required'),
  body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters'),
  body('name').trim().isLength({ min: 1 }).withMessage('Name is required'),
  body('surname').trim().isLength({ min: 1 }).withMessage('Surname is required'),
  body('walletAddress').optional().matches(/^0x[a-fA-F0-9]{40}$/).withMessage('Invalid ERC-20 wallet address'),
  body('phoneNumber').optional().isMobilePhone().withMessage('Invalid phone number')
];

const loginValidation = [
  body('email').isEmail().normalizeEmail().withMessage('Valid email required'),
  body('password').notEmpty().withMessage('Password is required')
];

// Local authentication routes
router.post('/signup', signupValidation, signup);
router.post('/login', loginValidation, login);

// Get current user
router.get('/me', authenticateToken, getCurrentUser);

// Google OAuth routes
router.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'], session: false })
);

router.get(
  '/google/callback',
  passport.authenticate('google', { session: false, failureRedirect: '/login' }),
  googleCallback
);

export default router;
