import mongoose from "mongoose";
import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/products.js'
import User from './models/userModel.js'
import Product from './models/productModel.js'
import Order from './models/orderModel.js'
import connectDB from "./config/db.js"

dotenv.config()
connectDB()

const importData = async () => {
	try {
		await Order.deleteMany()
		await Product.deleteMany()
		await User.deleteMany()

		const createdUsers = await User.insertMany(users)

		const adminUser = createdUsers[0]._id

		const sampleProducts = products.map((product) => {
			return { ...product, user: adminUser }
		})

		await Product.insertMany(sampleProducts)

		console.log('Data Imported!'.green.inverse)
		process.exit()
	} catch (error) {
		console.error(`${error}`.red.inverse)
		process.exit(1)
	}
}

const destroyData = async () => {
	try {
		// we doing this because we want to clean the database.
		await Order.deleteMany()
		await Product.deleteMany()
		await User.deleteMany()

		console.log('Data destroyed successfully'.green.inverse)
		process.exit()
	} catch (error) {

		console.error(`Destroy Data Error: ${error}`.red.inverse)
		// process.exit(1) 1 mean's that we exit with failure [1s]
		process.exit(1)
	}

}

if (process.argv[2] === '-d') {
	destroyData()
} else {
	importData()
} 