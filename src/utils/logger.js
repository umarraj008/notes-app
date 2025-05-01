// /src/utils/logger.js

const getCallerInfo = (stackTrace = '') => {
  const stackLines = stackTrace.split('\n');
  const callerLine = stackLines[2] || ''; // The 3rd line contains the caller info

  // Match the filename and line number in the format of: "file.js:lineNumber"
  const match = callerLine.match(/(?:\/([^/]+)):(\d+):\d+/);
  
  if (match) {
    return `${match[1]}:${match[2]}`; // Return file name and line number
  }
  return 'unknown file:unknown line';
};

const log = (message, error = null) => {
  const callerInfo = getCallerInfo(new Error().stack);
  
  if (error) {
    console.error(`[ERROR] (${callerInfo}) ${message}:`, error); // Error
  } else {
    console.log(`[INFO] (${callerInfo}) ${message}`); // Normal log
  }
};

const warn = (message, error = null) => {
  const callerInfo = getCallerInfo(new Error().stack);
  
  if (error) {
    console.warn(`[WARN] (${callerInfo}) ${message}:`, error); // Warning
  } else {
    console.warn(`[WARN] (${callerInfo}) ${message}`); // Warning
  }
};

const error = (message, error = null) => {
  const callerInfo = getCallerInfo(new Error().stack);
  
  if (error) {
    console.error(`[ERROR] (${callerInfo}) ${message}:`, error); // Error
  } else {
    console.error(`[ERROR] (${callerInfo}) ${message}`); // Error
  }
};

export default {
  log,
  warn,
  error
};