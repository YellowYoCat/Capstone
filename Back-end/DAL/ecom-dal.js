const { MongoClient, ObjectId } = require("mongodb");

const url = "mongodb+srv://Johanna:Jj306879@rest.4gkziko.mongodb.net/?retryWrites=true&w=majority&appName=rest";
const dbName = 'Ecom';
const dataCol = 'data';
const comCol = 'Comment';
const proCol = 'Profile';

exports.DAL = {


    // Create
    // createProfile: async function (profile) {
    //     const client = new MongoClient(url);
    //     try {
    //         await client.connect();
    //         const db = client.db(dbName);
    //         const result = await db.collection(proCol).insertOne(profile);
    //         return result;
    //     } catch (err) {
    //         console.log(err);
    //     } finally {
    //         await client.close();
    //     }
    // },
    //I don't know if I really need this 


    getAllProfiles: async function () {
        const client = new MongoClient(url);
        try {
            await client.connect();
            const db = client.db(dbName);

            const results = await db.collection(proCol).find().toArray();
            return results;
        } catch (err) {
            console.log(err);
            throw err;
        } finally {
            await client.close();
        }
    },


    // get
    getProfileById: async function (id) {
        const client = new MongoClient(url);
        try {
            await client.connect();
            const db = client.db(dbName);
            const pro = await db.collection(proCol)

            const query = {
                _id: ObjectId.createFromHexString(id),
            };

            const result = await pro.findOne(query);
            return result;
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


    register: async function (firstName, lastName, username, email, password, confirmPassword) {
        const client = new MongoClient(url);
        try {
            console.log("Received parameters:", {
                firstName,
                lastName,
                username,
                email,
                password,
                confirmPassword
            });
            await client.connect();
            const db = client.db(dbName);
            const profile = db.collection(proCol);

            const newUser = {
                firstName: firstName,
                lastName: lastName,
                username: username,
                email: email,
                password: password,
                confirmPassword: confirmPassword,
            };

            console.log("New User Object:", newUser);

            const result = await profile.insertOne(newUser);

            console.log("Insert Result:", result);

            return result.insertedId;
        } catch (err) {
            console.log(err);
        } finally {
            await client.close();
        }
    },

    getUserByUsername: async function (username) {
        const client = new MongoClient(url);
        try {
            await client.connect();
            const db = client.db(dbName);
            const user = await db.collection(proCol).findOne({ username: username });
            return user;
        } catch (err) {
            console.log(err);
        } finally {
            await client.close();
        }
    }
    



    //create an addToCart



}