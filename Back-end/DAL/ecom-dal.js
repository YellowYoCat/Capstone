const { MongoClient, ObjectId } = require("mongodb");

const url = "mongodb+srv://Johanna:Jj306879@rest.4gkziko.mongodb.net/?retryWrites=true&w=majority&appName=rest";
const dbName = 'Ecom';
const dataCol = 'Data';
const comCol = 'Comment';
const proCol = 'Profile';
const carCol = 'Card';

exports.DAL = {


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
    }, 

   getData: async function () {
    const client = new MongoClient(url);
        try {
            await client.connect();
            const db = client.db(dbName);

            const results = await db.collection(dataCol).find().toArray();
            return results;
        } catch (err) {
            console.log(err);
            throw err;
        } finally {
            await client.close();
        }
   },

   

   getDataById: async function (dataId) {

    const client = new MongoClient(url);

    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection(dataCol);

        const query = { dataId: dataId };

        const result = await collection.findOne(query);
        return result;
    } catch (error) {
        console.error('Error fetching data by ID:', error);
        throw error;
    } finally {
        await client.close();
    }
    
},

    checkout: async function(firstName, lastName, street, city, state, zip, country, card, mmyy, cvc, zip2){
        const client = new MongoClient(url);
        try {
            console.log("Received parameters:", {
                firstName,
                lastName,
                street,
                city,
                state,
                zip,
                country, 
                card,
                mmyy, 
                cvc,
                zip2,
            });
            await client.connect();
            const db = client.db(dbName);
            const profile = db.collection(carCol);

            const userData = {
                firstName: firstName,
                lastName: lastName,
                street: street,
                city: city,
                state: state,
                zip: zip,
                country: country, 
                card: card,
                mmyy: mmyy, 
                cvc : cvc,
                zip2: zip2,
            };

            console.log("New User Object:", userData);

            const result = await profile.insertOne(userData);

            console.log("Insert Result:", result);

            return result.insertedId;
        } catch (err) {
            console.log(err);
        } finally {
            await client.close();
        }
    },

    contact: async function (name, email, phone, comment){
        const client = new MongoClient(url);
        try {
            console.log("Received parameters:", {
                name,
                email,
                phone,
                comment
            });
            await client.connect();
            const db = client.db(dbName);
            const profile = db.collection(comCol);

            const newCom = {
                name: name,
                email: email,
                phone: phone,
                comment: comment
            };

            console.log("New:", newCom);

            const result = await profile.insertOne(newCom);

            console.log("Insert Result:", result);

            return result.insertedId;
        } catch (err) {
            console.log(err);
        } finally {
            await client.close();
        }

    },
   


}