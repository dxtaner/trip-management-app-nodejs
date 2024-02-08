// index.js

const dotenv = require('dotenv');
const app = require('./app.js');
const { combinedLogger } = require('./utils/logger');

// Load environment variables from config file
const conf = dotenv.config({ path: './config.env' });

// Database connection setup
require('./db_connection/database.js');

const port = process.env.PORT || 3033;

// Start the Express application listening on the specified port
const server = app.listen(port, () => {
  combinedLogger.info(
    `Server is running on http://localhost:${server.address().port}`
  );
});
