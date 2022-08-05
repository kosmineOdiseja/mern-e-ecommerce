import express from 'express'
import asyncHandler from 'express-async-handler'
const router = express.Router()
import Product from '../models/productModel'

// @desc  Fetch all Products 
// @route GET /api/products
// @access Public
app.get('/', asyncHandler(async (req, res) => {
	const products = await Product.find({})
	res.json(products)
}))

// @desc  Fetch single Products 
// @route GET /api/products/:id
// @access Public
app.get('/:id', asyncHandler((req, res) => {
	const product = await Product.findById(req.params.id)
	// products.find(p => p._id === req.params.id)
	if (product) {
		res.json(product)
	} else {
		res.status(404).json({ message: "product not found" })
	}

	res.json(product)
}))
export default router