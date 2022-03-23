const mongoose = require('mongoose');

const podcastSchema = mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  descr: { type: String },
  theme: { type: String, required: true },
  numberOfEpisodes: { type: Number, default: 0 }
});

module.exports = mongoose.model('Podcast', podcastSchema);