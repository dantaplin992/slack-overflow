const express = require("express")
const router = express.Router()

const UserController = require("../controllers/users")

router.post("/new", UserController.New)
router.post("/email/check", UserController.CheckEmail)

module.exports = router
