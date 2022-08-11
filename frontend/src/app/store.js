import { configureStore } from '@reduxjs/toolkit';
// we need to import all reducers here! 
import productReducer from '../features/products/productSlice'


export const store = configureStore({
	reducer: {

		products: productReducer,
	},
});