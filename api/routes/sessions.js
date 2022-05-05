const express = require("express")
const router = express.Router()

const SessionsController = require("../controllers/sessions")

router.post("/new", SessionsController.New)

module.exports = router