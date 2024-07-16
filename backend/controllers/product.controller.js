var bodyParser = require('body-parser')
const productService = require('../services/product.service');

const getProducts = async (req, res) => {
	const products = await productService.getProducts({});
	res.status(200).send(products)
};

const createProduct = async (req, res) => {
	const {name, price} = req.body;
	const product = await productService.createProduct({product: {name, price}});
	res.status(200).send(product)
};

module.exports = {getProducts, createProduct};