import dotenv from 'dotenv';
import pkg from 'pg';
const { Pool } = pkg;

dotenv.config({
	path: '.env',
	quiet: true,
});
export const pool = new Pool({
	connectionString: process.env.DATABASE_URL,
	ssl: {
		rejectUnauthorized: false,
	},
});
pool.connect()
	.then((client) => {
		client.release();
	})
	.catch((error) => console.log('Error connecting to database'));

export default pool;
