import axios from 'axios'

const API_URL = "/api/products/"

// Get ProductDetails
// api/products/:id
const getProductDetails = async (productId) => {
	const response = await axios.get(API_URL + productId.id)
	return response.data
}

const productService = {
	getProductDetails,
}

export default productService