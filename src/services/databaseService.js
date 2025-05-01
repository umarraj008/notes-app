// /src/services/databaseService.js
import { openDatabase } from '../database/database.js';
import logger from '../utils/logger.js'; // Import the custom logger

// Database initialization function
export const initDatabase = async () => {
  try {
    const db = await openDatabase();

    // Ensure that the config table exists
    await db.exec(`
      CREATE TABLE IF NOT EXISTS config (
        id TEXT PRIMARY KEY,
        value TEXT NOT NULL
      );
    `);
    logger.log('Config table ensured successfully');

    // Ensure that the notes table exists (you already have this)
    await db.exec(`
      CREATE TABLE IF NOT EXISTS notes (
        id TEXT PRIMARY KEY,
        title TEXT NOT NULL,
        text TEXT,
        filePath TEXT,
        created INTEGER NOT NULL,
        modified INTEGER NOT NULL
      );
    `);
    logger.log('Notes table ensured successfully');

    logger.log('Database initialized successfully');
  } catch (error) {
    logger.error('Error initializing database:', error);
    throw error;
  }
};