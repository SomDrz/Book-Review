const Book = require("../model/book");
const Review = require("../model/review");
const createBook = async (req, res) => {
  try {
    const book = await Book.create({ ...req.body, createdBy: req.user.id });
    res.status(201).json(book);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const getBooks = async (req, res) => {
  try {
    const { author, genre, page = 1, limit = 10 } = req.query;
    const filter = {};
    if (author) filter.author = new RegExp(author, 'i');
    if (genre) filter.genre = genre;
    const books = await Book.find(filter)
      .skip((page - 1) * limit)
      .limit(Number(limit));
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    const reviews = await Review.find({ book: book._id })
      .populate("user", "name")
      .limit(10);
    const avgRating = await Review.aggregate([
      { $match: { book: book._id } },
      { $group: { _id: "$book", avgRating: { $avg: "$rating" } } },
    ]);
    res.json({ ...book.toObject(), reviews, averageRating: avgRating[0]?.avgRating || 0 });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const searchBooks = async (req, res) => {
  try {
    const q = req.query.q;
    const books = await Book.find({
      $or: [
        { title: new RegExp(q, "i") },
        { author: new RegExp(q, "i") },
      ],
    });
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


module.exports ={
    createBook,getBooks,getBookById,searchBooks
}