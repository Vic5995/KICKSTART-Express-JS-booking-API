const express = require('express');
const router = express.Router();

const sessionController = require('../controllers/session');

router.get("/", sessionController.getAllSession);

router.get("/:id", sessionController.getSession);

router.post("/", sessionController.createSession);

router.put("/:id", sessionController.updateSession);

router.delete("/:id", sessionController.deleteSession);

module.exports = router;