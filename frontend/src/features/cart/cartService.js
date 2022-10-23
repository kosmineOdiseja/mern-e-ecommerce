import axios from 'axios'

// not sure if this is true API/URL
const API_URL = "/api/products/"
// console.log(product, '  this is the product ')

// Get Cart List
// api/products/:id

const addToCart = async (productId, qty) => {
	console.log(productId, 'this is productId')
	console.log(qty, 'this is qty')
	const response = await axios.get(API_URL + productId.id)
	console.log(response.data, 'this is response.data')
	return response.data
}


/**
 *	I need fallow this tutorial, I need to do different redux here?  
 */

/**
 * cmmb command for multiline comment 
 */

/**
 * add to cart  
 * cart remove
 * when we add to cart we face this problems: 
 * 	check to if there is an items
 * 		if (true) => update existing items 
 *  	else create() cart
 * 
 */

const cartService = {
	addToCart
}

console.log(JSON.stringify(localStorage.ticket), 'this is localStorage')
// localStorage.setItem("cartItem", JSON.stringify(getState().cart.cartItems))

export default cartService
