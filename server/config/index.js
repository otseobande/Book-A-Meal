import dotenv from 'dotenv';

dotenv.config();

const config = {
	env: process.env.NODE_ENV,
	db: {
		username: process.env.DB_USER,
    password: process.env.DB_PASS,
    name: process.env.DB_NAME,
    host: process.env.DB_HOST,
	},
	test: {
		db: {
			username: process.env.TEST_DB_USER,
	    password: process.env.TEST_DB_PASS,
	    name: process.env.TEST_DB_NAME,
	    host: process.env.TEST_DB_HOST,
		}
	},
	jwtSecret: process.env.JWT_SECRET,
	jwtExpiry: process.env.JWT_EXPIRY || 24,
	orderExpiry: process.env.ORDER_EXPIRY || 3,
	openTime: process.env.OPEN_TIME || 6,
	closeTime: process.env.CLOSE_TIME || 8
}
export default config;