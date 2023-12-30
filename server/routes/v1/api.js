const express = require('express');
const router = express.Router();
const userController = require("../../modules/user/user.controller")
const bookController = require('../../modules/book/book.controller');
const { protect } = require('../../middleware/authUser');
router.post('/register', userController.registration);
router.post('/login', userController.login);

router.post('/createBook',protect, bookController.createBook);
router.put('bookUpdate/:id',protect, bookController.updateBook);
router.get('/bookDetails/:id', bookController.bookDetailsById)
router.get('/books', bookController.bookList)
router.get('/genreList', bookController.genreList);
router.get('/yearList', bookController.yearList);
router.get('/booksByGenreAndYear/:genre/:year', bookController.bookByGenreAndYear)
router.get(
  "/booksByGenre/:genre",
  bookController.bookListByGenre
);
router.get(
  "/booksByYear/:year",
  bookController.bookListByYear
);
module.exports = router;