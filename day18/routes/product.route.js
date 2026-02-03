const express = require('express');
const { getProducts, saveProducts } = require('../controllers/Products.controller');
const router = express.Router();


router.get('/Products', getProducts);
router.post('/Products', saveProducts);

module.exports = router;