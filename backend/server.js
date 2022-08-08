import express from 'express'
import dotenv from 'dotenv'
import connectDb from './config/db.js'
import colors from 'colors'

import productRoutes from './routes/productRoutes.js'

dotenv.config()
connectDb()

const app = express()

app.get('/', (req, res) => {
	res.send('API is running...')
})

app.use('/api/products', productRoutes)

// middleware  error
app.use((req, res, next) => {
	const error = new Error(`Not Found - ${req.originalUrl}`)
	res.status(404)
	next(error)
})

app.use((err, req, res, next) => {

	// sometimes we get a 200 status code,  even if it's an error. 
	// so this line puts things in the right boxes.
	const statusCode = res.statusCode === 200 ? 500 : res.statusCode
	res.status(statusCode)
	res.json({
		message: err.message,
		stack: process.env.NODE_ENV === 'production' ? null : err.stack,

	})
})

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))