import db from '../config/database.js';

const createTables = () => {
  try {
    console.log('🔨 Creating database tables...');

    // Users table
    db.exec(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT UNIQUE NOT NULL,
        password_hash TEXT,
        name TEXT NOT NULL,
        surname TEXT NOT NULL,
        wallet_address TEXT,
        living_address TEXT,
        phone_number TEXT,
        auth_provider TEXT DEFAULT 'local' CHECK(auth_provider IN ('local', 'google')),
        google_id TEXT UNIQUE,
        is_verified INTEGER DEFAULT 0,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('✅ Users table created');

    // Create indexes for users
    db.exec(`
      CREATE INDEX IF NOT EXISTS idx_email ON users(email);
      CREATE INDEX IF NOT EXISTS idx_name_surname ON users(name, surname);
      CREATE UNIQUE INDEX IF NOT EXISTS unique_person ON users(name, surname, email);
    `);
    console.log('✅ Users indexes created');

    // Xpixels table
    db.exec(`
      CREATE TABLE IF NOT EXISTS xpixels (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER NOT NULL,
        coordinate_x INTEGER NOT NULL,
        coordinate_y INTEGER NOT NULL,
        token_share REAL NOT NULL DEFAULT 0.000000,
        purchase_date DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
      );
    `);
    console.log('✅ Xpixels table created');

    // Create indexes for xpixels
    db.exec(`
      CREATE INDEX IF NOT EXISTS idx_user_id ON xpixels(user_id);
      CREATE INDEX IF NOT EXISTS idx_coordinates ON xpixels(coordinate_x, coordinate_y);
    `);
    console.log('✅ Xpixels indexes created');

    // Statistics table (for global stats)
    db.exec(`
      CREATE TABLE IF NOT EXISTS statistics (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        total_xpixels_bought INTEGER DEFAULT 0,
        total_xpixels_available INTEGER DEFAULT 1000000,
        fill_percentage REAL DEFAULT 0.00,
        last_updated DATETIME DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('✅ Statistics table created');

    // Insert initial statistics row if not exists
    const statsCount = db.prepare('SELECT COUNT(*) as count FROM statistics').get();
    if (statsCount.count === 0) {
      db.prepare(`
        INSERT INTO statistics (total_xpixels_bought, total_xpixels_available, fill_percentage)
        VALUES (0, 1000000, 0.00)
      `).run();
      console.log('✅ Initial statistics inserted');
    }

    // Create trigger to update updated_at timestamp
    db.exec(`
      CREATE TRIGGER IF NOT EXISTS update_user_timestamp
      AFTER UPDATE ON users
      FOR EACH ROW
      BEGIN
        UPDATE users SET updated_at = CURRENT_TIMESTAMP WHERE id = NEW.id;
      END;
    `);
    console.log('✅ Triggers created');

    console.log('🎉 Database initialization complete!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error creating tables:', error.message);
    process.exit(1);
  }
};

// Run initialization
createTables();
