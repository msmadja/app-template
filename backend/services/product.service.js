const Product = require('../models/product.model');
const settingsService = require('./settings.service');
const {transform} = require('./product-transformer/product-transformer');

const getProducts = async (request) => {
	return Product.find({})
};

const createProduct = async (request) => {
	const {product} = request;
	const options = await settingsService.get('product-transform-plugins');
	const productForCreation = transform(product, options);
	const createdProduct  = await  Product.create(productForCreation);
	return createdProduct;
};


module.exports = { getProducts, createProduct };