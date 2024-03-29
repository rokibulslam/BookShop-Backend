const createService = require("../../commonService/create.service");
const updateService = require("../../commonService/updateService");
const Book = require("./book.model");
const bookDeleteService = require("./bookDelete.service");
const bookDetailsByIdService = require("./bookDetailsById.service");
const bookListByGenre = require("./bookListByGenre.service");

exports.createBook = async (req, res) => {
  try {
    console.log(req.body);
    const data = await createService(req, res, Book);
    res.status(200).json({
      status: "success",
      message: "Book created successfully",
      data: data,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Book creation failed",
      error: error.toString(),
    });
  }
};
exports.updateBook = async (req, res) => {
  try {
    const data = await updateService(req, res, Book);
    res.status(200).json({
      status: "success",
      message: "Book updated successfully",
      data: data,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Book update failed",
      error: error.toString(),
    });
  }
};
exports.bookDetailsById = async (req, res) => {
  try {
    const data = await bookDetailsByIdService(req, res, Book);
    res.status(200).json({
      status: "success",
      message: "Book details fetch successfully",
      data: data,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Book details fetch failed",
      error: error.toString(),
    });
  }
};
exports.bookList = async (req, res) => {
  try {
    const data = await Book.find({});
    res.status(200).json({
      status: "success",
      message: "Book List Fetch successfully",
      data: data,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Book list fetch failed",
      error: error.toString(),
    });
  }
};
exports.genreList = async (req, res) => {
  try {
    const data = await Book.distinct("Genre");
    res.status(200).json({
      status: "success",
      message: "Book Genre List Fetch successfully",
      data: data,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Book Genre list fetch failed",
      error: error.toString(),
    });
  }
};
exports.yearList = async (req, res) => {
  try {
    const distinctYears = await Book.distinct("PublicationDate", {
      PublicationDate: { $exists: true, $ne: null },
    });

    // Use a Set to get unique years
    const uniqueYearsSet = new Set(
      distinctYears.map((date) => new Date(date).getFullYear())
    );

    // Convert the Set back to an array
    const uniqueYears = Array.from(uniqueYearsSet);

    res.status(200).json({
      status: "success",
      message: "Book Year List Fetch successfully",
      data: uniqueYears,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Book Year list fetch failed",
      error: error.toString(),
    });
  }
};

exports.bookByGenreAndYear = async (req, res) => {
  const { genre, year } = req.params; // Assuming genre and year are passed as URL parameters

  try {
    // Construct the query based on genre and/or year
    const query = {};

    if (genre) {
      query.Genre = genre;
    }

    if (year) {
      query.PublicationDate = { $regex: new RegExp(`^${year}`) };
    }

    // Find books based on the constructed query
    const books = await Book.find(query);

    // Sending a success response with the fetched data
    res.status(200).json({
      status: "success",
      message: "Books Fetch successfully",
      data: books,
    });
  } catch (error) {
    // Handling errors and sending a failure response
    res.status(400).json({
      status: "fail",
      message: "Book fetch failed",
      error: error.toString(),
    });
  }
};
exports.bookListByGenre = async (req, res) => {
  try {
    const books = await bookListByGenre(req, res, Book);
    res.status(200).json({
      status: "success",
      message: "Book List by Genre Fetch successfully",
      data: books,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Book List by Genre fetch failed",
      error: error.toString(),
    });
  }
};
exports.bookListByYear = async (req, res) => {
  try {
    const year = parseInt(req.params.year);
    if (isNaN(year)) {
      return res.status(400).json({ error: "Invalid year parameter" });
    }
    const data = await Book.find({
      $expr: {
        $eq: [{ $year: "$PublicationDate" }, year],
      },
    });
    res.status(200).json({
      status: "success",
      message: "Book List By Year Fetch successfully",
      data: data,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Book List By Year fetch failed",
      error: error.toString(),
    });
  }
};
exports.bookDelete = async (req, res) => {
  try {
    const data = await bookDeleteService(req, res, Book)
    res.status(200).json({
      status: "success",
      message: "Book Genre List Fetch successfully",
      data: data,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Book Genre list fetch failed",
      error: error.toString(),
    });
  }
};