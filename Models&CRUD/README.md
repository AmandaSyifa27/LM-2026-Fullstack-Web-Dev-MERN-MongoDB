# Express & MongoDB CRUD Lab

## Overview

This project is a simple RESTful API built with Express.js and Mongoose. It demonstrates how to perform basic CRUD (Create, Read, Update, Delete) operations by managing a "Books" collection in a local MongoDB database.

## Implementation Details

The application is structured into three main parts:

- **Model:** A Mongoose schema (`models/Book.js`) that defines the structure for our book data, ensuring that the title and author fields are strictly required.
- **Routes:** An Express router (`routes/books.js`) that handles all incoming HTTP requests (GET, POST, PUT, DELETE) and interacts with the database asynchronously.
- **Entry Point:** The main server file (`app.js`) which establishes the MongoDB connection, applies the body-parser middleware, and mounts our book routes.

## Challenges Encountered

One of the minor challenges was making sure the asynchronous database operations were properly wrapped in `try...catch` blocks to prevent the server from crashing if a bad request was sent. Additionally, ensuring that Mongoose returned the newly updated document (using `{ new: true }` in the PUT route) took a little bit of trial and error to get working perfectly during testing.

## How to Run the Application

1. **Install Dependencies**
   Make sure you have Node.js and MongoDB installed. Then, run the following command in the project directory to install the required packages:
   ```bash
   npm install express mongoose body-parser
   ```
