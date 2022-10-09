// first step: 
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import cartService from './cartService'

/**
 * this repos looks promising: 
 * https://github.com/gulshancodes/redux-shopping-cart/blob/main/src/store/slices/cartSlice.js 
 */

// step 2: 
const initialState = {
	cartItems: [],
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: '',
}
// step 4: 
export const getCart = createAsyncThunk("cart/get", async (_, thunkAPI) => {
	try {
		return await cartService.getCart()
	} catch (error) {
		const message = (error.response && error.response.data && error.response.data.message) ||
			error.message || error.toString()
		return thunkAPI.rejectWithValue(message)
	}

})
// test part 
console.log(window)
console.log('first after window object')
let windowData = JSON.stringify(window.__PRELOADED_STATE__)

console.log(windowData, 'this is windowData')
// step 3
export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		// link https://www.youtube.com/watch?v=Rp5abw5PwYU&ab_channel=CodeWithVishal
		reset: (state) => initialState
		// and we need to write here. Because on reset we already can have an item/items.
	},
	extraReducers: (builder) => {
		builder
			.addCase(getCart.pending, (state) => {
				state.isLoading = true
			})
			.addCase(getCart.fulfilled, (state, action) => {
				console.log(state, 'this is state: ')
				state.isLoading = false
				state.isSuccess = true
				const item = action.payload
				const existItem = state.cartItems.find(x => x.product === item.product)
				console.log(existItem, 'this existItem ')
				if (existItem) {
					return {
						...state,
						cartItems: []
					}
				}
				// } else {
				// 	return {
				// 		...state,
				// 		cartItems: [...state.cartItems, item]
				// 		// state.cartItems = action.payload
				// 	}
				// }
				if (!existItem) {
					state.cartItems = action.payload
				}
				// state.cartItems = action.payload
				// i think here i need to check: do I have a Item if true update or add new item to the cart, 
				// if not add that cart 
			})
			.addCase(getCart.rejected, (state, action) => {
				state.isLoading = false
				state.isSuccess = false
				state.message = action.payload
			})
	}
})

export default cartSlice.reducer