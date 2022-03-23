const Session = require("../models/session");

exports.createSession = (req, res, next) => {
	const session = new Session({
		...req.body,
	});

	session
		.save()
		.then(() => res.status(201).json({ message: "Session created!" }))
		.catch((error) => res.status(400).json({ error }));
};

exports.getAllSession = (req, res, next) => {
	Session.find()
		.then((sessions) => res.status(200).json(sessions))
		.catch((error) => res.status(400).json({ error }));
};

exports.getSession = (req, res, next) => {
	Session.findOne({ _id: req.params.id })
		.then((session) => res.status(200).json(session))
		.catch((error) => res.status(404).json({ error }));
};

exports.updateSession = (req, res, next) => {
	Session.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
		.then(() => res.status(200).json({ message: "Session updated!" }))
		.catch((error) => res.status(400).json({ error }));
};

exports.deleteSession = (req, res, next) => {
	Session.deleteOne({ _id: req.params.id })
		.then(() => res.status(200).json({ message: "Session deleted!" }))
		.catch((error) => res.status(400).json({ error }));
};