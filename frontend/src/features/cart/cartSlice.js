// first step: 
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import cartService from './cartService'

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
// step 3
export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		reset: (state) => initialState
	},
	extraReducers: (builder) => {
	}
})

export default cartSlice.reducer