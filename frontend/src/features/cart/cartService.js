import axios from 'axios'

// not sure if this is true API/URL
const API_URL = "/api/products/"

// Get Cart List
// api/products/:id

const getCartProducts = async (productId, qty) => {
	const response = await axios.get(API_URL + productId.id)
	console.log(response.data, 'this is response.data')
	return response.data
}


const cartService = {
	getCartProducts
}

console.log(JSON.stringify(localStorage.ticket), 'this is localStorage')
// localStorage.setItem("cartItem", JSON.stringify(getState().cart.cartItems))

export default cartService