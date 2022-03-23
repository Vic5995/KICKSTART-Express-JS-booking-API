const mongoose = require('mongoose');

const sessionSchema = mongoose.Schema({
	host: { type: String, required: true },
	hostEMail: { type: String, required: true },
	guest: { type: String, required: true },
	guestEMail: { type: String, required: true },
	start: { type: Date, required: true },
	end: { type: Date, required: true },
});

module.exports = mongoose.model('Session', sessionSchema);