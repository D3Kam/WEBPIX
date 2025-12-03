import express from 'express';
import { body } from 'express-validator';
import {
  getProfile,
  updateProfile,
  getUserStats,
  getGlobalStats
} from '../controllers/userController.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// All user routes require authentication
router.use(authenticateToken);

// Profile routes
router.get('/profile', getProfile);
router.put(
  '/profile',
  [
    body('walletAddress').optional().matches(/^0x[a-fA-F0-9]{40}$/).withMessage('Invalid ERC-20 wallet address'),
    body('phoneNumber').optional().isMobilePhone().withMessage('Invalid phone number')
  ],
  updateProfile
);

// Statistics routes
router.get('/stats', getUserStats);
router.get('/stats/global', getGlobalStats);

export default router;
