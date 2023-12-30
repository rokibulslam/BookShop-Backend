const createService = require("../../commonService/create.service");
const updateService = require("../../commonService/updateService");
const Book = require("./book.model");
const bookDetailsByIdService = require("./bookDetailsById.service");


exports.createBook = async (req, res) => {
    try {
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
}
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
}
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
}
exports.bookList = async (req, res) => {
  try {
      const data = await Book.find({})
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
       const data = await Book.distinct('Genre');
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
}
exports.yearList = async (req, res) => {
  try {
    const distinctYears = await Book.distinct("PublicationDate", {
      PublicationDate: { $exists: true, $ne: null },
    });

    const data = distinctYears.map((date) => new Date(date).getFullYear());

    res.status(200).json({
      status: "success",
      message: "Book Year List Fetch successfully",
      data: data,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Book Year list fetch failed",
      error: error.toString(),
    });
  }
};
exports.bookByGenreAndYear = async (req, res)=>{
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
      status: 'success',
      message: 'Books Fetch successfully',
      data: books,
    });
  } catch (error) {
    // Handling errors and sending a failure response
    res.status(400).json({
      status: 'fail',
      message: 'Book fetch failed',
      error: error.toString(),
    });
  }
}