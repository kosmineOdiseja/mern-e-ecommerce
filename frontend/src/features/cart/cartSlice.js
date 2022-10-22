// first step: 
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import cartService from './cartService'

export const cartSlice = createSlice({
	name: "cart",
	initialState: [],
	reducers: {
		CART_ADD_ITEM: (state) => {
			// const item = action.payload

			console.log(state, 'this is state to add items')

		},
		CART_REMOVE_ITEM: (state) => {
			console.log(state, 'this is state to add items')
		}
	},
})

export default cartSlice.reducer