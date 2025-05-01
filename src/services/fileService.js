// /src/services/fileService.js
import fs from 'fs';
import path from 'path';
import logger from '../utils/logger.js'; // Import the custom logger

// Read content from a file
export const readFileContent = (filePath) => {
  return fs.promises.readFile(filePath, 'utf-8')
    .catch((error) => {
      logger.error(`Error reading file ${filePath}:`, error);
      throw new Error(`Failed to read file: ${filePath}`);
    });
};

// Write content to a file
export const writeFileContent = (filePath, content) => {
  return fs.promises.writeFile(filePath, content, 'utf-8')
    .catch((error) => {
      logger.error(`Error writing file ${filePath}:`, error);
      throw new Error(`Failed to write file: ${filePath}`);
    });
};

// Append content to a file
export const appendFileContent = (filePath, content) => {
  return fs.promises.appendFile(filePath, content, 'utf-8')
    .catch((error) => {
      logger.error(`Error appending file ${filePath}:`, error);
      throw new Error(`Failed to append file: ${filePath}`);
    });
};

// Check if file exists
export const fileExists = (filePath) => {
  return fs.promises.access(filePath, fs.constants.F_OK)
    .then(() => true)
    .catch(() => false);
};

// Ensure a directory exists, create it if it doesn't
export const ensureDirectoryExists = async (filePath) => {
  const dirPath = path.dirname(filePath);
  try {
    await fs.promises.mkdir(dirPath, { recursive: true });
    logger.log(`Directory ensured at: ${dirPath}`);
  } catch (error) {
    logger.error(`Error ensuring directory exists: ${dirPath}`, error);
    throw new Error(`Failed to ensure directory: ${dirPath}`);
  }
};

// Delete a file
export const deleteFile = (filePath) => {
  return fs.promises.unlink(filePath)
    .catch((error) => {
      logger.error(`Error deleting file ${filePath}:`, error);
      throw new Error(`Failed to delete file: ${filePath}`);
    });
};

// Get file stats (e.g., size, last modified, etc.)
export const getFileStats = (filePath) => {
  return fs.promises.stat(filePath)
    .catch((error) => {
      logger.error(`Error getting stats for file ${filePath}:`, error);
      throw new Error(`Failed to get stats for file: ${filePath}`);
    });
};

export const createFile = (filePath, fileName) => {
  
};