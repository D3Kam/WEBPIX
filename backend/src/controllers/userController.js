import User from '../models/User.js';
import pool from '../config/database.js';

// Get user profile
export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({ user });
  } catch (error) {
    console.error('Get profile error:', error);
    res.status(500).json({ error: 'Failed to get profile' });
  }
};

// Update user profile
export const updateProfile = async (req, res) => {
  try {
    const { walletAddress, livingAddress, phoneNumber } = req.body;

    const updated = await User.update(req.user.id, {
      wallet_address: walletAddress,
      living_address: livingAddress,
      phone_number: phoneNumber
    });

    if (!updated) {
      return res.status(400).json({ error: 'No changes made' });
    }

    const user = await User.findById(req.user.id);
    res.json({ message: 'Profile updated successfully', user });
  } catch (error) {
    console.error('Update profile error:', error);
    res.status(500).json({ error: 'Failed to update profile' });
  }
};

// Get user statistics and Xpixels
export const getUserStats = async (req, res) => {
  try {
    const stats = await User.getUserStats(req.user.id);
    res.json(stats);
  } catch (error) {
    console.error('Get stats error:', error);
    res.status(500).json({ error: 'Failed to get statistics' });
  }
};

// Get global statistics
export const getGlobalStats = async (req, res) => {
  try {
    const [stats] = await pool.query('SELECT * FROM statistics LIMIT 1');

    if (stats.length === 0) {
      return res.json({
        totalXpixelsBought: 0,
        totalXpixelsAvailable: 1000000,
        fillPercentage: 0
      });
    }

    res.json({
      totalXpixelsBought: stats[0].total_xpixels_bought,
      totalXpixelsAvailable: stats[0].total_xpixels_available,
      fillPercentage: parseFloat(stats[0].fill_percentage)
    });
  } catch (error) {
    console.error('Get global stats error:', error);
    res.status(500).json({ error: 'Failed to get global statistics' });
  }
};
