##RESTful Furniture Shop API
Furniture Shop Logo

Welcome to the RESTful Furniture Shop API, a project showcasing my Node.js and Express skills. This project simulates the backend of a furniture shop, providing a RESTful API for managing products, customers, and orders. It uses JWT for authentication, Bcrypt for password hashing, and MongoDB with Mongoose for the database.

Table of Contents
Features
Technologies
Project Structure
Installation
Usage
API Documentation
Authentication
Contributing
License
Features
CRUD Operations: Perform Create, Read, Update, and Delete operations for products, customers, and orders.
Authentication: Secure your API endpoints with JWT tokens.
Password Hashing: User passwords are hashed with Bcrypt for security.
Database: Utilize MongoDB as the database backend with Mongoose for easy data modeling.
CORS: Handle Cross-Origin Resource Sharing with the CORS npm package.
RESTful Design: Adheres to REST principles for a logical and predictable API structure.
Technologies Used
Node.js
Express.js
MongoDB with Mongoose
JWT (JSON Web Tokens)
Bcrypt (Password hashing)
CORS (Cross-Origin Resource Sharing)
Project Structure
The project directory structure is organized as follows:

client/ - Contains the frontend of the application written in HTML, CSS, and JavaScript.
server/ - The backend server using Node.js and Express.
models/ - Database schemas defined with Mongoose.
routes/ - API route definitions and controllers.
config/ - Configuration files for JWT and other settings.
middleware/ - Custom middleware functions.
public/ - Static files (if applicable).
package.json - Dependencies and scripts.
app.js - The entry point for the Express application.
Installation
Clone the Repository

bash
Copy code
git clone https://github.com/your-username/rest-api.git
cd rest-api
Install Dependencies

bash
Copy code
cd server
npm install
Set Up Configuration

Create a .env file in the server directory with the following environment variables:

env
Copy code
PORT=3000
DB_URL=mongodb://localhost/furniture-shop
SECRET_KEY=your-secret-key
Start the Application

bash
Copy code
npm start
Usage
The RESTful Furniture Shop API is now running on your local machine, ready for integration with your frontend or testing via tools like Postman.

API Documentation
For detailed information on API endpoints and how to use them, please refer to the API documentation.

Authentication
Authentication is performed using JSON Web Tokens (JWT). To authenticate, include a valid token in the Authorization header of your API requests.

Contributing
Contributions to this project are welcome. Please follow the guidelines in CONTRIBUTING.md if you wish to contribute.
