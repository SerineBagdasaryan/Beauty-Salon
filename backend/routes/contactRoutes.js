const express = require('express');
const router = express.Router();
const controller = require('../controllers/ContactController');
router.get('/contact', controller.contact);
module.exports = router;