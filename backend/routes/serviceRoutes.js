const express = require('express');
const router = express.Router();
const controller = require('../controllers/ServiceController');
router.get('/serviceData', controller.serviceData);
router.get('/imageService',controller.imageService);
router.get('/service', controller.service);
router.get('/serviceEnd', controller.serviceEnd);
module.exports = router;