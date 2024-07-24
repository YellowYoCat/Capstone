
const express = require('express');
const { MongoClient } = require('mongodb');
const { DAL } = require('./DAL/ecom-dal');
const app = express();
const cors = require('cors')

const port = 3001
// require('DB').config();

app.use(cors({ "origin": "*" }));
app.use(express.json());

const url = "mongodb+srv://Johanna:Jj306879@rest.4gkziko.mongodb.net/?retryWrites=true&w=majority&appName=rest";
const dbName = 'Ecom';

app.get('/', (req, res) => {
    res.send("you hit my route")
  })

  
app.post('/profiles', async (req, res) => {
    try {
        const profile = req.body;
        const result = await DAL.createProfile(profile);
        res.status(201).send(result);
    } catch (err) {
        res.status(500).send({ message: 'Error creating profile', error: err });
    }
});


app.get('/profiles', async (req, res) => {
    try {
        const profiles = await DAL.getProfile();
        res.status(200).send(profiles);
    } catch (err) {
        res.status(500).send({ message: 'Error fetching profiles', error: err });
    }
});


app.put('/profiles/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedProfile = req.body;
        const result = await DAL.updateProfile(id, updatedProfile);
        if (result.matchedCount === 0) {
            return res.status(404).send({ message: 'Profile not found' });
        }
        res.status(200).send(result);
    } catch (err) {
        res.status(500).send({ message: 'Error updating profile', error: err });
    }
});


app.delete('/profiles/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const result = await DAL.deleteProfile(id);
        if (result.deletedCount === 0) {
            return res.status(404).send({ message: 'Profile not found' });
        }
        res.status(200).send({ message: 'Profile deleted successfully' });
    } catch (err) {
        res.status(500).send({ message: 'Error deleting profile', error: err });
    }
});


 
app.post('/register', async (req, res) => {
    try {
        const { firstName, lastName, username, email, password, confirmPassword } = req.body;
        const result = await DAL.register(firstName, lastName, username, email, password, confirmPassword);
        res.status(201).send(result);
    } catch (err) {
        if (err.message === "Profile with this email already exists") {
            res.status(409).send({ message: err.message });
        } else {
            res.status(500).send({ message: 'Error registering profile', error: err });
        }
    }
});

app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await DAL.getUserByUsername(username);
        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }
        if (user.password !== password) {
            return res.status(401).send({ message: 'Invalid password' });
        }
        res.status(200).send({ message: 'Login successful', user });
    } catch (err) {
        res.status(500).send({ message: 'Error logging in', error: err });
    }
});



app.listen(port, (err) => {
    if (err) console.log(err);
    console.log(`Express is listening on ${port}`)
  });
  