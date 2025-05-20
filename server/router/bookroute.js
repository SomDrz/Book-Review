const router = require("express").Router();

const auth = require("../middlewares/authmiddleware");
const {
  createBook,
  getBooks,
  getBookById,
  searchBooks,
} = require("../controller/book");


router.post("/", auth, createBook);
router.get("/", getBooks);
router.get("/search", searchBooks);
router.get("/:id", getBookById);


module.exports =router