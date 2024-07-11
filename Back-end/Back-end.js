
const express = require('express');
const { MongoClient } = require('mongodb');
const { DAL } = require('./DAL/mongo-dal');
app.use(cors({ "origin": "*" }));
const app = express();
const port = 3000;


const url = "mongodb+srv://Johanna:Jj306879@rest.4gkziko.mongodb.net/?retryWrites=true&w=majority&appName=rest";
const dbName = 'Ecom';

app.get('/', (req, res) => {
    res.send("you hit my route")
  })

 
  


app.listen(port, (err) => {
    if (err) console.log(err);
    console.log(`Express is listening on ${port}`)
  });
  