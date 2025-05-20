const router = require("express").Router();

const auth = require("../middlewares/authmiddleware");
const { addReview, updateReview, deleteReview } = require("../controller/review");

router.post("/books/:id/reviews", auth, addReview);
router.put("/:id", auth, updateReview);
router.delete("/:id", auth, deleteReview);
module.exports = router;
