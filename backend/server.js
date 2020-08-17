const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');//to interact with our DB
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors()); //apply CORS
app.use(express.json()); //parse JSON

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
	console.log("MongoDB DB connection established successfully");
})

const exerciseRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');
app.use('/exercises', exerciseRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
	console.log("Server is running on port:", port);
})