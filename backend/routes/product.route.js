const { Router } = require('express');
const  { getProducts, createProduct } = require('../controllers/product.controller');

const router = Router();

router.get('/', getProducts);
router.post('/', createProduct);


module.exports =  router;