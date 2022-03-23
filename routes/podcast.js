const express = require("express");
const router = express.Router();

const podcastCtrl = require('../controllers/podcast');

router.get("/", podcastCtrl.getAllPodcast);

router.get("/:id", podcastCtrl.getPodcast);

router.get("/theme/:theme", podcastCtrl.getPodcatsByTheme);

router.post("/", podcastCtrl.createPodcast);

router.put("/:id", podcastCtrl.updatePodcast);

router.delete("/:id", podcastCtrl.deletePodcast);

module.exports = router;