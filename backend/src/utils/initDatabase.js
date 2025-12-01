import pool from '../config/database.js';

const createTables = async () => {
  const connection = await pool.getConnection();

  try {
    console.log('🔨 Creating database tables...');

    // Users table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password_hash VARCHAR(255),
        name VARCHAR(100) NOT NULL,
        surname VARCHAR(100) NOT NULL,
        wallet_address VARCHAR(42),
        living_address TEXT,
        phone_number VARCHAR(20),
        auth_provider ENUM('local', 'google') DEFAULT 'local',
        google_id VARCHAR(255) UNIQUE,
        is_verified BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        INDEX idx_email (email),
        INDEX idx_name_surname (name, surname),
        UNIQUE KEY unique_person (name, surname, email)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    `);
    console.log('✅ Users table created');

    // Xpixels table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS xpixels (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT NOT NULL,
        coordinate_x INT NOT NULL,
        coordinate_y INT NOT NULL,
        token_share DECIMAL(10, 6) NOT NULL DEFAULT 0.000000,
        purchase_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
        INDEX idx_user_id (user_id),
        INDEX idx_coordinates (coordinate_x, coordinate_y)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    `);
    console.log('✅ Xpixels table created');

    // Statistics table (for global stats)
    await connection.query(`
      CREATE TABLE IF NOT EXISTS statistics (
        id INT AUTO_INCREMENT PRIMARY KEY,
        total_xpixels_bought INT DEFAULT 0,
        total_xpixels_available INT DEFAULT 1000000,
        fill_percentage DECIMAL(5, 2) DEFAULT 0.00,
        last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    `);
    console.log('✅ Statistics table created');

    // Insert initial statistics row if not exists
    await connection.query(`
      INSERT INTO statistics (total_xpixels_bought, total_xpixels_available, fill_percentage)
      SELECT 0, 1000000, 0.00
      WHERE NOT EXISTS (SELECT 1 FROM statistics LIMIT 1);
    `);
    console.log('✅ Initial statistics inserted');

    console.log('🎉 Database initialization complete!');
  } catch (error) {
    console.error('❌ Error creating tables:', error.message);
    throw error;
  } finally {
    connection.release();
  }
};

// Run initialization
createTables()
  .then(() => {
    console.log('✅ Database setup successful');
    process.exit(0);
  })
  .catch((error) => {
    console.error('❌ Database setup failed:', error);
    process.exit(1);
  });
