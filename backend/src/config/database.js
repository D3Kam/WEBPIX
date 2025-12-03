import Database from 'better-sqlite3';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { mkdirSync } from 'fs';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create data directory if it doesn't exist
const dataDir = join(__dirname, '../../data');
try {
  mkdirSync(dataDir, { recursive: true });
} catch (err) {
  // Directory already exists
}

// Create database file path
const dbPath = process.env.DB_PATH || join(dataDir, 'webpix.db');

// Initialize SQLite database
let db;

try {
  db = new Database(dbPath);
  db.pragma('journal_mode = WAL'); // Better performance
  console.log('✅ Database initialized at:', dbPath);
} catch (error) {
  console.error('❌ Database initialization failed:', error.message);
  process.exit(1);
}

// Test connection
export function testConnection() {
  try {
    const result = db.prepare('SELECT 1 as test').get();
    console.log('✅ Database connected successfully');
    return true;
  } catch (error) {
    console.error('❌ Database connection failed:', error.message);
    return false;
  }
}

export default db;
