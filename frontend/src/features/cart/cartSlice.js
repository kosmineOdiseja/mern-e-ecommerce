// first step: 
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import cartService from './cartService'

// 2 step create initialState

const initialState = {
	cartItems: {},
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: '',
}

// step 4 
export const getCartItems = createAsyncThunk('cartItems/get', async (productId, thunkAPI) => {
	try {
		return await cartService.getCartItems(productId)
	} catch (error) {
		const message = (error.response && error.response.data && error.response.data.message) ||
			error.message || error.toString()
		return thunkAPI.rejectWithValue(message)
	}
})

// 3 step 
export const cartItemSlice = createSlice({
	name: "cartItems",
	initialState,
	reducers: {
		reset: (state) => initialState
	},
	extraReducers: (builder) => {
		builder
			.addCase(getCartItems.pending, (state) => {
				state.isLoading = true
			})
			.addCase(getCartItems.fulfilled, (state, action) => {
				state.isLoading = false
				state.isSuccess = true
				state.cartItems = action.payload
			})
			.addCase(getCartItems.rejected, (state, action) => {
				state.isLoading = false
				state.isSuccess = false
				state.message = action.payload
			})
	}
})

// export const { increment, decrement, incrementByAmount } = someNameSlice.actions

export default cartItemSlice.reducer