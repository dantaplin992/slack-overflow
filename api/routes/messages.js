const express = require("express");
const router = express.Router();

const messagesController = require("../controllers/messages")

router.get("/all", messagesController.All)

module.exports = router
