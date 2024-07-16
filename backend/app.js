const express = require('express')
const mongoose = require('mongoose');
const routes = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

mongoose.connect(process.env.DATABASE_URI);

const db = mongoose.connection;

db.on('connected', () => {
    console.info('🚀 Connected to MongoDB!');
});

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/', routes);


app.listen(process.env.PORT, () => {
  console.log(`Listening to port ${process.env.PORT}`)
})