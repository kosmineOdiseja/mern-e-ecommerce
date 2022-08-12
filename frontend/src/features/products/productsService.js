import axios from "axios"

const API_URL = "/api/products/"

// Get user Tickets
const getProducts = async () => {
	// when we have token we need to to like this 

	const response = await axios.get(API_URL)
	return response.data
}
// Get Product 
// api/products/:id
const getProduct = async (productId) => {
	console.log(productId, 'this product id Axios')
	const response = await axios.get(API_URL + productId.id)
	return response.data
}


const productService = {
	getProducts,
	getProduct,
}

export default productService