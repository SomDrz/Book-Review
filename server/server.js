const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./router/authroute');
const bookRoutes = require('./router/bookroute');
const reviewRoutes = require('./router/reviewroute');
const app = express();

dotenv.config();

// make coonection to db
connectDB();
app.use(express.json());

// endpoints
app.use('/api', authRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/reviews', reviewRoutes);

//server running at 5000 port

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;
