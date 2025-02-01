const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');
// Connection URL
const url = 'mongodb://myUserAdmin:abc123@localhost:27017';
dotenv.config();
// Database Name
const dbName = 'test';
async function connectDB() {
    const client = new MongoClient(url,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		serverSelectionTimeoutMS: 5000, // Adjust timeout as needed
	});
    try {
        await client.connect();
        console.log('Connected successfully to server manjeet');

        const db = client.db(dbName);
    } catch (err) {
        console.error(err);
    } finally {
        await client.close();
    }
}
module.exports = connectDB;
