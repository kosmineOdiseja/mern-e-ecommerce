import axios from 'axios'

// not sure if this is true API/URL
const API_URL = "/api/products/"
// console.log(product, '  this is the product ')

// Get Cart List
// api/products/:id

const getCartItems = (productId, qty) => async (getState) => {

	const response = await axios.get(API_URL + productId.id)

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
// this line bellow doesn't work!
// localStorage.setItem("cartItem", JSON.stringify(getCartItems)

const cartService = {
	getCartItems
}


export default cartService
