Tour Management
==============

Project Overview
----------------

This project is an Express.js application designed to serve as a backend for a tour booking service. It handles various functionalities such as user authentication, tour management, booking processing, and more.

Getting Started
---------------

1.  **Clone the repository:**
    
        git clone [repository_url](https://github.com/dxtaner/trip-management-app-nodejs)
    
2.  **Install dependencies:**
    
Installation
------------

1.  **Clone the Project:** Clone the project repository or download it as a zip file.
    
        git clone <repository_url>
    
2.  **Install Dependencies:** Navigate to the project root directory and install the dependencies using the following command.
    
        npm install
    
3.  **Run the Application:** To run the application in development mode:
    
        npm start
    
    To run the application in production mode:
    
        npm run start:prod
    

Development
-----------

*   **Watch JavaScript Files:** To watch JavaScript files for changes:
    
        npm run watch:js
    
*   **Build JavaScript Files:** To build JavaScript files:
    
        npm run build:js
    

Debugging
---------

*   **Run in Debug Mode:** To run the application in debug mode:
    
        npm run debug
    

Additional Notes
----------------

This project requires at least Node.js version 10.0.0. Please ensure you have an appropriate version of Node.js installed.
    
3.  **Set up environment variables:**
    
    Create a `.env` file in the root directory and provide the necessary environment variables. You can use the `config.env` file as a template.

    ![image](https://github.com/dxtaner/trip-management-app-nodejs/assets/44675799/220e2a50-ca59-4e7b-86b4-f4c2352480aa)

    
5.  **Database setup:**
    
    Ensure that you have set up your database configuration correctly. This project uses MongoDB, and the connection details can be configured in `db_connection/database.js`.
    
6.  **Run the application:**
    
        npm start
    

Available Scripts
-----------------

*   `npm start`: Starts the Express server.
*   `npm test`: Runs the test suite.

Project Structure
-----------------

![image](https://github.com/dxtaner/trip-management-app-nodejs/assets/44675799/216f46ca-ab55-4d18-8c52-d54ba5b3c388)


Dependencies
------------

*   **@babel/polyfill:** A library for emulating a full ES2015+ environment.
*   **@sendgrid/mail:** SendGrid's official library for sending emails.
*   **axios:** Promise-based HTTP client for the browser and Node.js.
*   **bcryptjs:** Library for hashing and salting user passwords.
*   **body-parser:** Node.js body parsing middleware.
*   **compression:** Middleware for compressing response bodies in Express.
*   **cookie-parser:** Parse Cookie header and populate req.cookies with an object keyed by the cookie names.
*   **cors:** Middleware for enabling CORS with various options in Express.
*   **crypto:** Node.js cryptographic module.
*   **dotenv:** Loads environment variables from a .env file into process.env.
*   **express:** Fast, unopinionated, minimalist web framework for Node.js.
*   **express-mongo-sanitize:** Middleware to sanitize user input coming from POST body, GET queries, and url params against MongoDB query injection.
*   **express-rate-limit:** Middleware for rate limiting HTTP requests in Express.
*   **helmet:** Middleware for setting various HTTP headers for Express app security.
*   **hpp:** Middleware for protecting against HTTP Parameter Pollution attacks in Express.
*   **html-to-text:** Converts HTML to plain text.
*   **install:** A package for running npm install with a more informative output.
*   **jsonwebtoken:** JSON Web Token implementation for Node.js.
*   **mapbox-gl:** Interactive, customizable maps.
*   **mongoose:** MongoDB object modeling tool designed to work in an asynchronous environment.
*   **morgan:** HTTP request logger middleware for Node.js.
*   **multer:** Node.js middleware for handling multipart/form-data.
*   **node-addon-api:** The Node.js C++ addon API.
*   **node-gyp:** Node.js native addon build tool.
*   **nodemailer:** Send e-mails from Node.js.
*   **npm:** Node.js package manager.
*   **path:** Node.js path module.
*   **pug:** Template engine for Node.js.
*   **sharp:** High-performance Node.js image processing library.
*   **slugify:** Library to slugify strings.
*   **stripe:** Official Stripe API client for Node.js.
*   **validator:** Library for string validation and sanitization.
*   **winston:** A logger for just about everything.
*   **xss-clean:** Middleware to sanitize user input against XSS attacks in Express.


Contributors
------------

*   [taner ozer](mailto:tanerozer16@gmail.com)

License
-------

This project is licensed under the [MIT License](LICENSE).
