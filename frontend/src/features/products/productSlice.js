// 1 step: 
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import productsService from './productsService'

// import ticketService from "./ticketService"
// 2 step: 
const initialState = {
	products: [],
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: '',
}

// step 4: 
// Get products  
// after async we put _ because we don't put anything but still want to thunkAPI do his job 
export const getProducts = createAsyncThunk('products/getAll', async (_, thunkAPI) => {
	try {
		// this line is going to the authService.js file and do his his job
		// const data = productService.getProducts()
		// return await data
		return await productsService.getProducts()
	} catch (error) {
		const message = (error.response && error.response.data && error.response.data.message) ||
			error.message || error.toString()
		return thunkAPI.rejectWithValue(message)
	}
})



// step 3:  
export const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		reset: (state) => initialState
	},
	extraReducers: (builder) => {

		// console.log(builder, 'this is builder')

		builder.addCase(getProducts.pending, (state) => {
			state.isLoading = true
		})
			.addCase(getProducts.fulfilled, (state, action) => {
				state.isLoading = false
				state.isSuccess = true
				state.products = action.payload
			})
			.addCase(getProducts.rejected, (state, action) => {
				state.isLoading = false
				state.isError = true
				state.message = action.payload
			})

	}
})

// export const { reset } = productsSlice.actions
export default productsSlice.reducer