const express = require('express');
const router = express.Router();
const controller = require('../controllers/TeamController');
router.get('/team', controller.team);
module.exports = router;