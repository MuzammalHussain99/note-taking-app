# Note-Taking Application

This project is a simple note-taking application with a Laravel API backend and a React frontend. Users can create, view, edit, and delete notes.

## Features
- Add, edit, view, and delete notes.
- Responsive frontend built with React.
- RESTful API built with Laravel.

## Backend Setup (Laravel)

Clone the repository and navigate to the Laravel backend directory:

   git clone https://github.com/MuzammalHussain99/note-taking-app.git
   
   cd note-taking-app

**Install dependencies:**

composer install

**Set up environment variables:**

Duplicate .env.example and rename it to .env.

Update .env with your database credentials and other configurations.

**Generate an application key:**

php artisan key:generate

**Run database migrations and seed the database:**

php artisan migrate --seed

**Start the Laravel server:**

php artisan serve

Your Laravel API will now be running at http://localhost:8000.

**Frontend Setup (React)**

Navigate to the frontend directory:

cd ../frontend

**Install dependencies:**

npm install

**Set up environment variables:**

Create a .env file in the frontend directory.

**Add the API base URL in .env:**

REACT_APP_API_BASE_URL=http://localhost:8000/api
Start the React development server:


npm start

The frontend will be available at http://localhost:5173


Open http://localhost:5173 in your browser to access the note-taking app.

Use the form to add, edit, and delete notes.
Notes will be stored in the Laravel backend, accessible via API.

**Project Structure**

note-taking-app/: Contains the Laravel backend (API).
frontend/: Contains the React frontend.
