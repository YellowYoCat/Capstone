const { MongoClient, ObjectId } = require("mongodb");

const url = "mongodb+srv://Johanna:Jj306879@rest.4gkziko.mongodb.net/?retryWrites=true&w=majority&appName=rest";
const dbName = 'Ecom';
const dataCol = 'data';
const comCol = 'Comment';
const proCol = 'Profile';

exports.DAL = {

    getProfile: async function () {
        const client = new MongoClient(url);
        try {
            await client.connect();
            const db = client.db(dbName);
            const result = await db.collection(proCol).find().toArray();
            return result;
        } catch (err) {
            console.log(err);
        }
        finally {
            await client.close();
        }


    },


    

}