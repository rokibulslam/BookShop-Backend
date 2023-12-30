const mongoose = require("mongoose");

const ReviewSchema = mongoose.Schema(
  {
    UserEmail: { type: mongoose.Schema.Types.ObjectId },
    BookID:{type: mongoose.Schema.Types.ObjectId},
    Review:{type:String, required:true},
    CreatedAt: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);

const Review = mongoose.model("Review", ReviewSchema);

module.exports = Review;
