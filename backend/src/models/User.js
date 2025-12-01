import pool from '../config/database.js';
import bcrypt from 'bcrypt';

class User {
  // Create new user
  static async create(userData) {
    const {
      email,
      password,
      name,
      surname,
      walletAddress,
      livingAddress,
      phoneNumber,
      authProvider = 'local',
      googleId = null
    } = userData;

    const connection = await pool.getConnection();

    try {
      // Check for duplicate based on email OR (name + surname)
      const [existing] = await connection.query(
        'SELECT id FROM users WHERE email = ? OR (name = ? AND surname = ?)',
        [email, name, surname]
      );

      if (existing.length > 0) {
        throw new Error('User with this email or name combination already exists');
      }

      // Hash password if provided
      let passwordHash = null;
      if (password) {
        passwordHash = await bcrypt.hash(password, parseInt(process.env.BCRYPT_ROUNDS) || 10);
      }

      const [result] = await connection.query(
        `INSERT INTO users (email, password_hash, name, surname, wallet_address,
         living_address, phone_number, auth_provider, google_id, is_verified)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          email,
          passwordHash,
          name,
          surname,
          walletAddress || null,
          livingAddress || null,
          phoneNumber || null,
          authProvider,
          googleId,
          authProvider === 'google' // Auto-verify Google users
        ]
      );

      return result.insertId;
    } finally {
      connection.release();
    }
  }

  // Find user by email
  static async findByEmail(email) {
    const [rows] = await pool.query(
      'SELECT * FROM users WHERE email = ?',
      [email]
    );
    return rows[0] || null;
  }

  // Find user by ID
  static async findById(id) {
    const [rows] = await pool.query(
      'SELECT id, email, name, surname, wallet_address, living_address, phone_number, auth_provider, is_verified, created_at FROM users WHERE id = ?',
      [id]
    );
    return rows[0] || null;
  }

  // Find user by Google ID
  static async findByGoogleId(googleId) {
    const [rows] = await pool.query(
      'SELECT * FROM users WHERE google_id = ?',
      [googleId]
    );
    return rows[0] || null;
  }

  // Verify password
  static async verifyPassword(plainPassword, hashedPassword) {
    return await bcrypt.compare(plainPassword, hashedPassword);
  }

  // Update user information
  static async update(userId, updates) {
    const allowedUpdates = ['wallet_address', 'living_address', 'phone_number'];
    const updateFields = [];
    const updateValues = [];

    Object.keys(updates).forEach(key => {
      if (allowedUpdates.includes(key) && updates[key] !== undefined) {
        updateFields.push(`${key} = ?`);
        updateValues.push(updates[key]);
      }
    });

    if (updateFields.length === 0) {
      return false;
    }

    updateValues.push(userId);

    const [result] = await pool.query(
      `UPDATE users SET ${updateFields.join(', ')} WHERE id = ?`,
      updateValues
    );

    return result.affectedRows > 0;
  }

  // Get user statistics
  static async getUserStats(userId) {
    const [xpixels] = await pool.query(
      `SELECT COUNT(*) as total_xpixels, SUM(token_share) as total_token_share
       FROM xpixels WHERE user_id = ?`,
      [userId]
    );

    const [pixels] = await pool.query(
      `SELECT id, coordinate_x, coordinate_y, token_share, purchase_date
       FROM xpixels WHERE user_id = ? ORDER BY purchase_date DESC`,
      [userId]
    );

    return {
      totalXpixels: xpixels[0].total_xpixels || 0,
      totalTokenShare: parseFloat(xpixels[0].total_token_share) || 0,
      xpixels: pixels
    };
  }
}

export default User;
