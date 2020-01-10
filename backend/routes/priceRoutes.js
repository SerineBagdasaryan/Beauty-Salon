const express= require('express');
const router = express.Router();
const controller= require('../controllers/PriceController');
router.get('/price', controller.price);
router.get('/prices', controller.prices);
router.get('/pricesData', controller.pricesData);
module.exports = router;