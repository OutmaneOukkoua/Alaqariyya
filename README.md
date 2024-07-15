# Alaqariyya

Welcome to the Alaqariyya real estate management platform, featuring a Node.js, Express, and MySQL backend with a React.js frontend.

## Features

- **Property Management**: Add, update, delete, and view properties.
- **Image Upload**: Upload multiple images for properties using Multer.
- **User Authentication**: Secure login system with JWT and password encryption using bcrypt.
- **Multi-language Support**: Properties and news can be fetched in multiple languages.
- **Contact Submissions**: Handle and store contact submissions from the website.
- **News Management**: Add, update, delete, and view news articles.

## Prerequisites

- Node.js and npm
- MySQL
- Git

## Installation

### Backend Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/OutmaneOukkoua/Alaqariyya.git
   cd Alaqariyya/back-end
   
2. Install dependencies:
npm install

3.Create a MySQL database:
CREATE DATABASE alaqariyya;

4.Update the database connection settings in the server.js file:
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'alaqariyya',
  charset: 'utf8mb4'
});

5.Run the server:
node server.js
The server will start on port 5000. You can change the port by setting the PORT environment variable.

### Frontend Setup

1.Navigate to the front-end directory:
cd front-end

2.Install frontend dependencies:
npm install

3.Run the React development server:
npm start
The React app will start on port 3000.

### API Endpoints

## Properties
* GET /properties: Get a list of properties with pagination and filtering options.
* GET /properties/
: Get details of a single property by ID.
* POST /properties: Add a new property.
* PUT /properties/
: Update an existing property.
* DELETE /properties/
: Delete a property by ID.
* News
* GET /news: Get a list of news articles.
* POST /news: Add a new news article.
* DELETE /news/
: Delete a news article by ID.

## Contact Submissions
* POST /contact-submissions: Submit a contact form.
* GET /contact-submissions: Get all contact submissions.
* DELETE /contact-submissions/
: Delete a contact submission by ID.

## User Authentication
* POST /login: Authenticate a user and get a JWT token.
File Uploads
Images for properties and news are uploaded to the uploads directory. Ensure this directory exists or will be created by the server.



Feel free to contribute by submitting issues or pull requests. If you have any questions, please contact me at outmane.oukkoua@gmail.com.
