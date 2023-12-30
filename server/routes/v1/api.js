const express = require('express');
const router = express.Router();
const userController = require("../../modules/user/user.controller")
const bookController = require('../../modules/book/book.controller')
router.post('/register', userController.registration);
router.post('/login', userController.login);

router.post('/createBook', bookController.createBook);
router.put('bookUpdate/:id', bookController.updateBook);
router.get('/bookDetails/:id', bookController.bookDetailsById)
router.get('/books', bookController.bookList)
router.get('/genreList', bookController.genreList);
router.get('/yearList', bookController.yearList);
router.get('/booksByGenreAndYear/:genre/:year', bookController.bookByGenreAndYear)
module.exports = router;