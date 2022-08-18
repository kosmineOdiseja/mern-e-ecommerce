//  1 step: 
import { createSlice, createAsyncThunk, createSerializableStateInvariantMiddleware } from '@reduxjs/toolkit'
import productDetailsService from '../productDetails/productDetailsService'

// 2 step:

const initialState = {
	productDetails: {},
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: '',
	// reviews: '',
}
// step 4: 
export const getProductDetails = createAsyncThunk('productDetails/get', async (productId, thunkAPI) => {
	try {
		return await productDetailsService.getProductDetails(productId)
	} catch (error) {
		const message = (error.response && error.response.data && error.response.data.message) ||
			error.message || error.toString()
		return thunkAPI.rejectWithValue(message)
	}
})
// // get a product 
// export const getProduct = createAsyncThunk('product/get', async (productId, thunkAPI) => {
// 	console.log(productId, 'this is productId from slice')
// 	try {
// 		return await productsService.getProduct(productId)
// 	} catch (error) {
// 		const message = (error.response && error.response.data && error.response.data.message) ||
// 			error.message || error.toString()
// 		return thunkAPI.rejectWithValue(message)
// 	}
// })


// step 3: 
export const productDetailsSlice = createSlice({
	name: 'productDetails',
	initialState,
	reducers: {
		reset: (state) => initialState
	},
	extraReducers: (builder) => {
		builder
			.addCase(getProductDetails.pending, (state) => {
				state.isLoading = true
			})
			.addCase(getProductDetails.fulfilled, (state, action) => {
				state.isLoading = false
				state.isSuccess = true
				state.productDetails = action.payload
			})
			.addCase(getProductDetails.rejected, (state, action) => {
				state.isLoading = false
				state.isSuccess = false
				state.message = action.payload
			})
	}
})

export default productDetailsSlice.reducer