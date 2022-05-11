const express = require("express")
const router = express.Router()

const UserController = require("../controllers/users")

router.post("/new", UserController.New)
router.put("/:id", UserController.Update)

module.exports = router
