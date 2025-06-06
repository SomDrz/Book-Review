
// review model
const mongoose = require("mongoose");
const reviewSchema = new mongoose.Schema({
  rating: { type: Number, min: 1, max: 5 },
  comment: String,
  book: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });
reviewSchema.index({ book: 1, user: 1 }, { unique: true });
module.exports = mongoose.model("Review", reviewSchema);

