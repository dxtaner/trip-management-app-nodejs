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
    
        cd <project_directory>
        npm install
    
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

*   **Express**: Web framework for Node.js
*   **dotenv**: Loads environment variables from a `.env` file
*   **mongoose**: MongoDB object modeling tool
*   **morgan**: HTTP request logger middleware


Contributors
------------

*   [Your Name](mailto:tanerozer16@gmail.com)

License
-------

This project is licensed under the [MIT License](LICENSE).
