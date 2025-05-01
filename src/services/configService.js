// /src/services/configService.js
import { getConfigValue, saveConfigValue, initializeConfigTable } from '../database/config.js';
import { defaultConfig } from '../config/defaultConfig.js';
import logger from '../utils/logger.js'; // Import the custom logger

// Initialize the config table when the app starts
export const initConfig = async () => {

};

// Load the config from the database, or create and save default config if not found
export const loadConfig = async () => {
};

// Save the config to the database
export const saveConfig = async (config) => {
 
};

// Example function to update a specific config property
export const updateConfig = async (newConfig) => {
 
};