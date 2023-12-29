const express = require('express');
const router = express.Router();
const userController = require("../../modules/user/user.controller")

router.post('/register', userController.registration);

module.exports = router;