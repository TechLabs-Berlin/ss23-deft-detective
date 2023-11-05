const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')
const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname + "/public")))
app.use(cors({ origin: 'http://localhost:3000' }))
app.use(bodyParser.json());


const mongoose = require('mongoose');

require("dotenv").config();

mongoose.connect("mongodb://localhost:27017/deft-detective")
  .then((x) => {
    const dbName = x.connections[0].name;
    console.log(`Connected to Mongo! Database name: "${dbName}"`);
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });


const index = require('./routes/index')
app.use('/', index)

const PORT = process.env.PORT || 1000

app.listen(PORT, console.log(`server listening on port ${PORT}`))