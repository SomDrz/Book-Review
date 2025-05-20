Create Book Review system using Node.js , MongoDb , Express.js , all the apis are tested in postman

 1 Features  

- User Signup & Login with JWT
 
- Add and fetch books (with pagination and filters)
  
- Add, update, delete reviews (one per user per book

- Get book details with average rating and reviews
  
- Search books by title or author (partial, case-insensitive)
 
- Modular project structure with environment-based configuration


 2 Technology used :

- Node.js
  
- Express.js

- MongoDB (with Mongoose)
  
- JWT for authentication
  
- bcrypt for password hashing
  
- dotenv for config management


3 Setup Instructions

# Clone the repository


git clone https://github.com/SomDrz/Book-Review.git

cd server

# Install dependencies

npm install 

# Create .env file

MONGO_URI= "monodb uri"

JWT_SECRET="your key"


# run server
npm start or ndoe server.js

use this endpoints to test in postman

User Routes

POST /signup – Register a new user

http://localhost:5000/signup


POST /login – Login and get JWT token

http://localhost:5000/login

📚 Book Routes


POST /books – Add a new book (Authenticated),  give token in header

http://localhost:5000/books

GET /books – Get all books (with pagination & filters)

http://localhost:5000/books?page=1&limit=10&author=Fitzgerald&genre=Fiction

GET /books/:id – Get book details by ID

http://localhost:5000/books/BOOK_ID

GET /search?query=title_or_author – Search books by title or author

http://localhost:5000/search?query=gatsby

✍️ Review Routes


POST /books/:id/reviews – Submit a review (Authenticated)

http://localhost:5000/books/BOOK_ID/reviews

PUT /reviews/:id – Update your review (Authenticated)

http://localhost:5000/reviews/REVIEW_ID

DELETE /reviews/:id – Delete your review (Authenticated)

http://localhost:5000/reviews/REVIEW_ID


