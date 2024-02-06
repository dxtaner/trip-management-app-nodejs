// database.js

const mongoose = require('mongoose');
const { combinedLogger, errorLogger } = require('../utils/logger');

// Construct database connection string
const { DATABASE, DATABASE_PASSWORD, DATABASE_NAME } = process.env;
const DB_URI = `mongodb+srv://${DATABASE}:${DATABASE_PASSWORD}@cluster0.guofsiq.mongodb.net/${DATABASE_NAME}`;

// Connect to the database
mongoose
  .connect(DB_URI, { useUnifiedTopology: true })
  .then(() => {
    combinedLogger.info('Successfully connected to the database!');
  })
  .catch((err) => {
    errorLogger.error(
      'An error occurred while connecting to the database:',
      err.message
    );
    process.exit(1);
  });

// Event listeners for connection status
mongoose.connection.on('connected', () => {
  combinedLogger.info('MongoDB connection established');
});

mongoose.connection.on('error', (err) => {
  errorLogger.error('MongoDB connection error:', err.message);
});

mongoose.connection.on('disconnected', () => {
  combinedLogger.warn('MongoDB connection disconnected');
});

// Close the Mongoose connection when Node.js process exits
process.on('SIGINT', async () => {
  await mongoose.connection.close();
  combinedLogger.info('MongoDB connection closed');
  process.exit(0);
});
