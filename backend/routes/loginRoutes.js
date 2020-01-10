const express = require('express');
const router = express.Router();
const controller = require('../controllers/LoginController');
router.get('/loginData', controller.login);
module.exports = router;