// /src/database/database.js
import sqlite3 from 'sqlite3';
import path from 'path';
import { getDirname } from '../utils/pathUtils.js';
import logger from '../utils/logger.js';  // Import the custom logger

// Get the current directory path using the utility function
const __dirname = getDirname(import.meta.url);

// The path where your database file will be stored
const dbPath = path.join(__dirname, '../data/notes.db');

// Open a database connection
export const openDatabase = () => {
  return new Promise((resolve, reject) => {
    const db = new sqlite3.Database(dbPath, (err) => {
      if (err) {
        logger.error('Error opening database:', err);
        reject(err);
      } else {
        logger.log(`Database opened successfully at ${dbPath}`);
        resolve(db);
      }
    });
  });
};