const Review = require("../model/review");
const addReview = async (req, res) => {
  try {
    const { rating, comment } = req.body;
    const review = await Review.create({
      rating,
      comment,
      user: req.user.id,
      book: req.params.id,
    });
    res.status(201).json(review);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateReview = async (req, res) => {
    try {
      const review = await Review.findOneAndUpdate(
        { _id: req.params.id, user: req.user.id },
        req.body,
        { new: true }
      );
      if (!review) return res.status(404).json({ message: "Review not found or unauthorized" });
      res.json(review);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  const deleteReview = async (req, res) => {
    try {
      const review = await Review.findOneAndDelete({ _id: req.params.id, user: req.user.id });
      if (!review) return res.status(404).json({ message: "Review not found or unauthorized" });
      res.json({ message: "Review deleted" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  module.exports ={
    addReview,updateReview,deleteReview
  }