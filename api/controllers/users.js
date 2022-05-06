const User = require("../models/user")

const UserController = {
  New: (req, res, next) => {
    console.log('reached the server: ', req.body)
    
    const newUser = req.body

    const newUserDoc = User.create(newUser)

    res.json({
        message: "signedUp",
    })
  }
}
     
module.exports = UserController
