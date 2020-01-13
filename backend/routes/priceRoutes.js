const express= require('express');
const router = express.Router();
const controller= require('../controllers/PriceController');
router.get('/price', controller.price);
module.exports = router;