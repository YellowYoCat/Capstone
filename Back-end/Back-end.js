console.log("does this work?")
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://Johanna:Jj3380@rest.4gkziko.mongodb.net/?retryWrites=true&w=majority&appName=rest";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
    try {
        await client.connect();
        console.log("Connected to MongoDB Atlas");
        const database = client.db('Ecom');
        const collection = database.collection('Data');
        
    } finally {
        await client.close();
    }
}

run().catch(console.dir);
