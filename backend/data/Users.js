import bcrypt from 'bcryptjs'


const users = [
	{
		name: "Admin User",
		email: 'admin@example.com',
		password: bcrypt.hashSync('123456', 10),
		isAdmin: true,
	},
	{
		name: "Jonas  Jaintis",
		email: 'admin@example.com',
		password: bcrypt.hashSync('123456', 10),
	},
	{
		name: "Jane janine+ ",
		email: 'admin@example.com',
		password: bcrypt.hashSync('123456', 10),
	},
]
export default users 