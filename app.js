// Importing required modules
const express = require('express');
const morgan = require('morgan');

// Importing route modules
const tourRouter = require('./routes/tourRoutes.js');
const userRouter = require('./routes/userRoutes.js');

// Creating an Express application
const app = express();

// 1) MIDDLEWARES

// Development logging using Morgan middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Parsing incoming JSON data middleware
app.use(express.json());

// Serving static files from the public directory
app.use(express.static(`${__dirname}/public`));

// Custom middleware logging a message to the console
app.use((req, res, next) => {
  console.log('Hello from the middleware 👋');
  next();
});

// Custom middleware adding a request timestamp
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// 3) ROUTES

// Mounting route handlers
app.use('/api/tours', tourRouter);
app.use('/api/users', userRouter);

// Exporting the configured Express application
module.exports = app;
