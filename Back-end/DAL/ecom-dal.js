const { MongoClient, ObjectId } = require("mongodb");

const url = "mongodb+srv://Johanna:Jj306879@rest.4gkziko.mongodb.net/?retryWrites=true&w=majority&appName=rest";
const dbName = 'Ecom';
const dataCol = 'data';
const comCol = 'Comment';
const proCol = 'Profile';

exports.DAL = {


    // Create
    createProfile: async function (profile) {
        const client = new MongoClient(url);
        try {
            await client.connect();
            const db = client.db(dbName);
            const result = await db.collection(proCol).insertOne(profile);
            return result;
        } catch (err) {
            console.log(err);
        } finally {
            await client.close();
        }
    },

    // Read
    getProfile: async function () {
        const client = new MongoClient(url);
        try {
            await client.connect();
            const db = client.db(dbName);
            const result = await db.collection(proCol).find().toArray();
            return result;
        } catch (err) {
            console.log(err);
        } finally {
            await client.close();
        }
    },

    // Update
    updateProfile: async function (id, updatedProfile) {
        const client = new MongoClient(url);
        try {
            await client.connect();
            const db = client.db(dbName);
            const result = await db.collection(proCol).updateOne(
                { _id: new ObjectId(id) },
                { $set: updatedProfile }
            );
            return result;
        } catch (err) {
            console.log(err);
        } finally {
            await client.close();
        }
    },

    // Delete
    deleteProfile: async function (id) {
        const client = new MongoClient(url);
        try {
            await client.connect();
            const db = client.db(dbName);
            const result = await db.collection(proCol).deleteOne({ _id: new ObjectId(id) });
            return result;
        } catch (err) {
            console.log(err);
        } finally {
            await client.close();
        }
    },


    register: async function (fn, ln, usern, email, pass, conPas) {
        const client = new MongoClient(url);
        try {
            await client.connect();
            const db = client.db(dbName);
            const profile = db.collection(proCol);

            const newUser = {
                FirstName: fn,
                lastName: ln,
                username: usern,
                email: email,
                password: pass,
                confirmPassword: conPas,
            };

            const result = await profile.insertOne(newUser);
            return result.insertedId;
        } catch (err) {
            console.log(err);
        } finally {
            await client.close();
        }
    }

    

    //create an addToCart



}