# project-name

Description
Overview

## Tech Stack
- React
- Node.js

## Requirements
- Users must authenticate via JWT to access protected routes (Hint: Use jsonwebtoken.verify in auth middleware)
- Support creating, reading, updating and deleting tasks via Express routes (Hint: Use express.Router() to organize endpoints)
- Frontend should store JWT and include it in API requests (Hint: Use React Context or localStorage to manage the token)
- Tasks should include a project field and be filterable by project (Hint: Add project property to task object and UI components)
- Display tasks sorted by priority level (Hint: Use Array.sort either in backend or frontend)

## Installation

### Backend
bash
cd backend
npm install

Copy `.env.example` to `.env` and set:
ini
JWT_SECRET=your_jwt_secret
PORT=5000


### Frontend
bash
cd frontend
npm install

Copy `.env.example` to `.env` and set:
ini
REACT_APP_API_URL=http://localhost:5000/api


## Usage
1. Start the backend server:
   bash
   cd backend
   npm start
   
2. Start the frontend server:
   bash
   cd frontend
   npm start
   
3. Navigate to `http://localhost:3000`, sign up or log in, and manage your tasks.

## Implementation Steps
1. Initialize the Node.js project and install dependencies: express, jsonwebtoken, bcrypt (or any hashing lib).
2. Configure Express server, set up `.env` for secrets, and connect to your database.
3. Create an `auth` middleware that uses `jsonwebtoken.verify` to protect private routes.
4. Define an Express `Router` for task endpoints and implement CRUD operations:
   - POST `/api/tasks`
   - GET `/api/tasks`
   - GET `/api/tasks/:id`
   - PUT `/api/tasks/:id`
   - DELETE `/api/tasks/:id`
5. Extend the task model to include `project` and `priority` fields, and apply sorting/filtering logic.
6. Scaffold the React app and install Axios (or fetch) for API calls.
7. Implement a React Context (or use `localStorage`) to store and provide the JWT for all requests.
8. Build UI components for:
   - Authentication (login/register)
   - Task list with project filter and priority sort
   - Task creation/edit forms
9. Test all API endpoints and frontend flows to ensure tasks can be created, read, updated, deleted, filtered, and sorted.

## API Endpoints
- POST `/api/auth/login` : Authenticate a user and return a JWT.
- POST `/api/auth/register` : Register a new user and return a JWT.
- GET `/api/tasks` : Retrieve all tasks; support `?project=<name>` to filter; sorted by `priority`.
- POST `/api/tasks` : Create a new task.
- GET `/api/tasks/:id` : Retrieve a specific task by ID.
- PUT `/api/tasks/:id` : Update a task by ID.
- DELETE `/api/tasks/:id` : Delete a task by ID.