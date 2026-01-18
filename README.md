# Backend_ASS3 – Restaurant Backend API

This project was developed for Assignment 3.  
It demonstrates migrating from JSON-based storage to a MongoDB database and building a RESTful CRUD API using Node.js, Express, and Mongoose.

---

## Project Overview

The backend represents a simple restaurant system that manages menu items.  
Each menu item contains information such as name, price, category, and description.

The API allows clients to create, read, update, and delete menu items stored in a local MongoDB database.

---

## Technologies and Dependencies

Runtime dependencies:
- Node.js
- Express.js
- MongoDB (local instance)
- Mongoose
- cors
- dotenv

Development dependency:
- nodemon

Tools used:
- Postman (API testing)
- MongoDB Compass (database visualization)

---

## Project Structure

restaurant-backend/
models/        Mongoose schemas  
routes/        API routes  
server.js      Server entry point  
package.json   Dependencies and scripts  
package-lock.json  
.gitignore  
README.md  

---

## Database Schema

MenuItem fields:
- name (String, required)
- price (Number, required)
- category (String, required)
- description (String, optional)
- createdAt (Date, auto-generated)
- updatedAt (Date, auto-generated)

Schema validation is handled using Mongoose.

---

## API Endpoints

POST   /menu        Create a new menu item  
GET    /menu        Get all menu items  
GET    /menu/:id    Get a menu item by ID  
PUT    /menu/:id    Update a menu item  
DELETE /menu/:id    Delete a menu item  

---

## Error Handling

The API uses proper HTTP status codes:
- 201 Created
- 400 Bad Request
- 404 Not Found

Errors are handled using try-catch blocks in asynchronous routes.

---

## Installation and Setup

### Prerequisites

Make sure the following are installed:
- Node.js (LTS)
- MongoDB Community Server
- Git

---

### 1. Clone the Repository

git clone https://github.com/Xurmayo/Backend_ASS3.git  
cd Backend_ASS3  

---

### 2. Install Dependencies

npm install

This installs:
- express
- mongoose
- cors
- dotenv
- nodemon

---

### 3. Environment Variables

Create a file named .env in the project root:

PORT=5000  
MONGO_URI=mongodb://127.0.0.1:27017/restaurantDB  

The .env file is ignored by Git.

---

### 4. Start MongoDB

Make sure MongoDB is running locally.

You can check with:
mongosh

---

### 5. Run the Server

npm run dev

Expected output:
MongoDB Connected  
Server running on port 5000  

---

## Testing

All endpoints were tested using Postman.

Example request:

POST http://localhost:5000/menu

Body:
{
  "name": "Pizza",
  "price": 3000,
  "category": "Main Dish",
  "description": "Cheese pizza"
}

Database changes can be verified using MongoDB Compass.

---

## Assignment Requirements Coverage

- MongoDB used instead of JSON
- Full CRUD API
- Schema validation
- Proper HTTP status codes
- Error handling
- Postman testing
- Clean code structure
- GitHub version control

---

## Author

Amangeldi Alisher  
Group: SE-2432
