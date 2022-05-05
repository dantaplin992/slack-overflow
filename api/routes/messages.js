const express = require("express");
const router = express.Router();

const messagesController = require("../controllers/messages")

router.get("/all", messagesController.All)
router.get("/new", messagesController.New)
router.get("/delete", messagesController.Delete)

module.exports = router
