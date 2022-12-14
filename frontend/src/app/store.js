import { configureStore } from '@reduxjs/toolkit';
// we need to import all reducers here! 
import productReducer from '../features/products/productSlice'
import productDetailsReducer from '../features/productDetails/productDetailsSlice'
import cartReducer from "../features/cart/cartSlice"



export const store = configureStore({
	reducer: {
		products: productReducer,
		productDetails: productDetailsReducer,
		cartItems: cartReducer,
	},
});
