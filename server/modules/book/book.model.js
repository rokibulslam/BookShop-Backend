const mongoose = require("mongoose");

const BookSchema = mongoose.Schema(
  {
    UserEmail: { type: mongoose.Schema.Types.ObjectId },
    Title: { type: String, required: true },
    Author: { type: String, required: true },
    Genre: { type: String, required: true },
    PublicationDate: { type: Date, required: true },
    reviews: { type: Number, default: 0 },
    CreatedAt: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;
