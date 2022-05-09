const User = require("../models/user")

const UserController = {
  New: (req, res, next) => {
    console.log('reached the server: ', req.body)
    
    const newUser = req.body

    const newUserDoc = User.create(newUser)

    res.json({
        message: "signedUp",
    })
  },

CheckEmail: (req, res, next) => {
  console.log('reached the server: ', req.body)
  const email = req.body.email
  User.findOne({ email: email }).then((user) => {
    if(!user){
      res.json({
        message: "userDoesNotExist"
      })
    } else {
      res.json({
        message: "userExists"
      })
    }
  })
},

}
     
module.exports = UserController
