// /src/utils/pathUtils.js
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Utility function to get __dirname from ES Modules
export const getDirname = (importMetaUrl) => {
  return dirname(fileURLToPath(importMetaUrl));
};