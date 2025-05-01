// /src/database/config.js
import { openDatabase } from './database.js';
import logger from '../utils/logger.js'; // Import the custom logger

const CONFIG_TABLE = 'config';

// Initialize the config table in the database
export const initializeConfigTable = async () => {
  try {
    const db = await openDatabase();
    await db.exec(`
      CREATE TABLE IF NOT EXISTS ${CONFIG_TABLE} (
        id TEXT PRIMARY KEY,
        value TEXT NOT NULL
      );
    `);
    logger.log('Config table initialized successfully');
  } catch (error) {
    logger.error('Error initializing config table:', error);
    throw error;
  }
};

// Get config by key
export const getConfigValue = async (key) => {
  try {
    const db = await openDatabase();
    const result = await db.get(`SELECT value FROM ${CONFIG_TABLE} WHERE id = ?`, [key]);
    if (result) {
      logger.log(`Config value retrieved for key: ${key}`);
      return JSON.parse(result.value);
    } else {
      logger.warn(`Config not found for key: ${key}`);
      return null;
    }
  } catch (error) {
    logger.error(`Error getting config value for key: ${key}`, error);
    return { error: 'Error getting config value', details: error };
  }
};

// Save config by key
export const saveConfigValue = async (key, value) => {
  try {
    const db = await openDatabase();
    await db.run(`
      INSERT OR REPLACE INTO ${CONFIG_TABLE} (id, value)
      VALUES (?, ?)`, [key, JSON.stringify(value)]);
    logger.log(`Config saved for key: ${key}`, value); // Log the saved value for debugging
  } catch (error) {
    logger.error(`Error saving config value for key: ${key}`, error);
    throw error;
  }
};