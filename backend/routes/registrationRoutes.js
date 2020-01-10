const express = require('express');
const router = express.Router();
const controller = require('../controllers/RegistrationController');
router.get('/registerData', controller.registration);
module.exports = router;