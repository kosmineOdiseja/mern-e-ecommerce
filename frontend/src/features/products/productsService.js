import axios from "axios"

const API_URL = "/api/products/"

// Get user Tickets
const getProducts = async (token) => {
	// when we have token we need to to like this 

	const response = await axios.get(API_URL)
	return response.data
}

const productService = {
	getProducts,
}

export default productService