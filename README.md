/* To Start the MERN Project Locally */

/* Step 1: Set up MongoDB Atlas */
- Go to https://cloud.mongodb.com/
- Create a cluster and database
- Whitelist your IP and create a user
- Get your connection string and update your backend `.env` file:

```
MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<dbname>?retryWrites=true&w=majority
```

/* Step 2: Backend Setup */
```
cd backend
npm install
```
- Install required packages (if not already):
```
npm install express mongoose cors dotenv bcryptjs
```
- Start the backend server:
```
npm start
```
- Backend will run on http://localhost:5000

/* Step 3: Frontend Setup */
```
cd ../frontend
npm install
```
- Set your frontend `.env` file:
```
REACT_APP_API_URL=http://localhost:5000
```
- Start the React app:
```
npm start
```
- Frontend will run on http://localhost:3000

/* Step 4: Root Setup (Optional - Using Concurrently) */
If you want to run both frontend and backend together:
- Create a root `package.json`:
```
{
  "name": "mern-auth-contact-app",
  "version": "1.0.0",
  "scripts": {
    "start": "concurrently \"npm run server\" \"npm run client\"",
    "server": "cd backend && npm start",
    "client": "cd frontend && npm start"
  },
  "devDependencies": {
    "concurrently": "^8.0.1"
  }
}
```
- Install concurrently:
```
npm install --save-dev concurrently
```
- Start the full stack app:
```
npm start
```

/* You're all set! Signup, login, and contact forms should now work with MongoDB Atlas. */
