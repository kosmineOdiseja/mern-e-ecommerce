import express from 'express'
import colors from 'colors'
import asyncHandler from 'express-async-handler'

const router = express.Router()
import Product from '../models/productModel.js'

// @desc  Fetch all Products 
// @route GET /api/products
// @access Public
router.get('/', asyncHandler(async (req, res) => {
	const products = await Product.find({})

	res.json(products)
}))

// @desc  Fetch single Products 
// @route GET /api/products/:id
// @access Public
router.get('/:id', asyncHandler(async (req, res) => {
	const product = await Product.findById(req.params.id)

	if (product) {
		res.json(product)
	} else {

		res.status(404)
		throw new Error('this product not found.')
		// throw new Error('this product not found')
	}
	res.status(200).json(product)
}))
export default router