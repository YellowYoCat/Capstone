
const express = require('express');
const { MongoClient } = require('mongodb');
const { DAL } = require('./DAL/ecom-dal');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser');


const port = 3001

app.use(cors({ "origin": "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



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
    const pro = await DAL.getAllProfiles();
    res.json(pro);
})



app.get('/profiles/:id', async (req, res) => {
    try {
        const profile = await DAL.getProfileById(req.params.id);
        res.status(200).send(profile);
    } catch (err) {
        res.status(500).send({ message: 'Error fetching profiles', error: err });
    }

   
});




app.put('/update', async (req, res) => {
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


app.delete('/delete/:id', async (req, res) => {
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

app.get('/products', async (req, res) => {
    const pro = await DAL.getData();
    res.json(pro);
});


app.get('/products/:dataId', async (req, res) => {
    const id = parseInt(req.params.dataId);
    try {
        const pro = await DAL.getDataById(id);
        if (!pro) {
            return res.status(404).send({ message: 'Product not found' });
        }
        res.json(pro);
    } catch (error) {
        console.error('Error fetching product:', error);
        res.status(500).send({ message: 'Internal Server Error' });
    }
});



app.post('/card', async (req, res) => {
    try {
        const { firstName, lastName, street, city, state, zip, country, card, mmyy, cvc, zip2 } = req.body;
        const result = await DAL.checkout(firstName, lastName, street, city, state, zip, country, card, mmyy, cvc, zip2);
        res.status(201).send(result);
    } catch (err) {
        if (err.message === "Profile with this card already exists") {
            res.status(409).send({ message: err.message });
        } else {
            res.status(500).send({ message: 'Error registering card', error: err });
        }
    }
});


app.post('/contact', async (req, res) => {
    try {
        const { name, email, phone, comment } = req.body;
        const result = await DAL.contact(name, email, phone, comment);
        res.status(201).send(result);
    } catch (err) {
        if (err.message === "oops something went wrong") {
            res.status(409).send({ message: err.message });
        } else {
            res.status(500).send({ message: 'error', error: err });
        }
    }
});


app.get('/users/:username', async (req, res) => {
    try {
        const username = req.params.username;
        const userData = await DAL.getUserDataByUsername(username);
        if (!userData) {
            res.status(404).send({ message: 'User not found' });
        } else {
            res.send(userData);
        }
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: 'Error retrieving user data' });
    }
});








app.listen(port, (err) => {
    if (err) console.log(err);
    console.log(`Express is listening on ${port}`)
});
