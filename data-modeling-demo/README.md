# Data Modeling Demo

## Overview

This repository contains the backend implementation for the Data Modeling Demo lab. The project demonstrates how to structure data effectively in MongoDB using Mongoose, establishing a reference-based relationship between `User` and `Task` entities.

## Key Features

- **Modular Architecture**: The codebase is cleanly separated into configurations, models, and routes to ensure high maintainability.
- **Data Validation**: Strict schema rules are applied, such as required fields, default values, and unique constraints for user emails.
- **Reference-Based Relationships**: The `Task` schema holds a reference to the `User` schema via `ObjectId`.
- **Full CRUD Operations**: Endpoints are available to Create, Read, Update, and Delete both Users and Tasks.
- **Population**: The `GET /api/tasks` endpoint utilizes Mongoose's `.populate()` method to automatically fetch and embed the related user data within each task.

## Running the Application

1. Run `npm install` to install dependencies (`express`, `mongoose`, `dotenv`).
2. Ensure your local MongoDB is running and update the `.env` file if necessary.
3. Run `node server.js` to start the server.
4. Test the API endpoints via Postman or Thunder Client at `http://localhost:5000/api/users` and `http://localhost:5000/api/tasks`.
