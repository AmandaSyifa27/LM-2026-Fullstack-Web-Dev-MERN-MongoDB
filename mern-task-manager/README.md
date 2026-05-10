# MERN Task Manager

## Overview

This project is a simple, end-to-end Task Management application built using the MERN stack (MongoDB, Express.js, React, and Node.js). It allows users to add, view, and delete daily tasks. The frontend is fully integrated with the backend RESTful API, ensuring that all tasks are dynamically updated and persisted in the local MongoDB database.

## How to Run the Application

### 1. Start the Backend Server

- Open a terminal and navigate to the `backend` directory.
- Ensure your local MongoDB instance is running.
- Run `npm install` to install dependencies (Express, Mongoose, CORS).
- Run `node server.js` to start the backend. It will connect to MongoDB and run on port 5000.

### 2. Start the Frontend Client

- Open a new terminal window and navigate to the `frontend` directory.
- Run `npm install` to install the React dependencies (including axios).
- Run `npm start` to launch the React application.
- The app will automatically open in your default browser at `http://localhost:3000`.

## Challenges Encountered

During the development process, one of the challenges was ensuring the frontend and backend were communicating smoothly without Cross-Origin Resource Sharing (CORS) errors. I resolved this by correctly implementing the `cors` middleware in the Express server. Additionally, designing the `useEffect` hook in React to automatically refetch the updated task list after a deletion or insertion required careful placement to ensure the UI always reflected the latest database state accurately.
