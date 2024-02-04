const dotenv = require('dotenv');
const app = require('./app.js');

const conf = dotenv.config({ path: './config.env' });

// Log the status of loading environment variables to the console
console.log(conf);

const port = process.env.PORT || 3033;

// Start the Express application listening on the specified port
const server = app.listen(port, () => {
  console.log(`Server is running on http://localhost:${server.address().port}`);
});
