const express = require("express");
const mongoose = require("mongoose");

const sessionRoutes = require('./routes/session');
const podcastRoutes = require('./routes/podcast');

const app = express();

mongoose
	.connect(
		"mongodb+srv://  @kickstart-booking-db.sfkqu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
		{ useNewUrlParser: true, useUnifiedTopology: true }
	)
	.then(() => console.log("Connection to MongoDB: SUCCESS!"))
	.catch(() => console.log("Connection to MongoDB: FAILED !"));

app.use(express.json());

app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
	);
	res.setHeader(
		"Access-Control-Allow-Methods",
		"GET, POST, PUT, DELETE, PATCH, OPTIONS"
	);
	next();
});

app.use('/api/sessions', sessionRoutes);

app.use('/api/podcasts', podcastRoutes);

module.exports = app;
