import db from '../config/database.js';
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

    // Check for duplicate based on email OR (name + surname)
    const existing = db.prepare(
      'SELECT id FROM users WHERE email = ? OR (name = ? AND surname = ?)'
    ).get(email, name, surname);

    if (existing) {
      throw new Error('User with this email or name combination already exists');
    }

    // Hash password if provided
    let passwordHash = null;
    if (password) {
      passwordHash = await bcrypt.hash(password, parseInt(process.env.BCRYPT_ROUNDS) || 10);
    }

    const result = db.prepare(
      `INSERT INTO users (email, password_hash, name, surname, wallet_address,
       living_address, phone_number, auth_provider, google_id, is_verified)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
    ).run(
      email,
      passwordHash,
      name,
      surname,
      walletAddress || null,
      livingAddress || null,
      phoneNumber || null,
      authProvider,
      googleId,
      authProvider === 'google' ? 1 : 0 // Auto-verify Google users (SQLite uses 1/0 for boolean)
    );

    return result.lastInsertRowid;
  }

  // Find user by email
  static async findByEmail(email) {
    const user = db.prepare(
      'SELECT * FROM users WHERE email = ?'
    ).get(email);
    return user || null;
  }

  // Find user by ID
  static async findById(id) {
    const user = db.prepare(
      'SELECT id, email, name, surname, wallet_address, living_address, phone_number, auth_provider, is_verified, created_at FROM users WHERE id = ?'
    ).get(id);
    return user || null;
  }

  // Find user by Google ID
  static async findByGoogleId(googleId) {
    const user = db.prepare(
      'SELECT * FROM users WHERE google_id = ?'
    ).get(googleId);
    return user || null;
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

    const result = db.prepare(
      `UPDATE users SET ${updateFields.join(', ')} WHERE id = ?`
    ).run(...updateValues);

    return result.changes > 0;
  }

  // Get user statistics
  static async getUserStats(userId) {
    const stats = db.prepare(
      `SELECT COUNT(*) as total_xpixels, SUM(token_share) as total_token_share
       FROM xpixels WHERE user_id = ?`
    ).get(userId);

    const pixels = db.prepare(
      `SELECT id, coordinate_x, coordinate_y, token_share, purchase_date
       FROM xpixels WHERE user_id = ? ORDER BY purchase_date DESC`
    ).all(userId);

    return {
      totalXpixels: stats.total_xpixels || 0,
      totalTokenShare: parseFloat(stats.total_token_share) || 0,
      xpixels: pixels
    };
  }
}

export default User;
