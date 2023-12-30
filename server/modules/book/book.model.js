const mongoose = require("mongoose");

const BookSchema = mongoose.Schema(
  {
    UserEmail: { type: String, required: true },
    Image: { type: String, required: true },
    Title: { type: String, required: true },
    Author: { type: String, required: true },
    Genre: { type: String, required: true },
    PublicationDate: { type: Date, required: true },
    CreatedAt: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;
