const Podcast = require("../models/podcast");

exports.createPodcast = (req, res, next) => {
	const podcast = new Podcast({
		...req.body,
	});

	podcast
		.save()
		.then(() => res.status(201).json({ message: "Podcast created!" }))
		.catch((error) => res.status(400).json({ error }));
};

exports.getAllPodcast = (req, res, next) => {
	Podcast.find()
		.then((pods) => res.status(200).json(pods))
		.catch((error) => res.status(400).json({ error }));
};

exports.getPodcast = (req, res, next) => {
	Podcast.findOne({ _id: req.params.id })
		.then((pod) => res.status(200).json(pod))
		.catch((error) => res.status(404).json({ error }));
};

exports.updatePodcast = (req, res, next) => {
	Podcast.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
		.then(() => res.satus(200).json({ message: 'Podcast updated!' }))
		.catch((error) => res.status(404).json({ error }));
};

exports.deletePodcast = (req, res, next) => {
	Podcast.updateOne({ _id: req.params.id })
		.then(() => res.satus(200).json({ message: "Podcast deleted!" }))
		.catch((error) => res.status(404).json({ error }));
};

exports.getPodcatsByTheme = (req, res, next) => {
	Podcast.find({ theme: req.params.theme })
		.then((pods) => res.status(200).json(pods))
		.catch((error) => res.status(404).json({ error }));
};
