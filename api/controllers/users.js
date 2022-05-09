const User = require("../models/user")

const UserController = {
  New: (req, res, next) => {
    console.log('reached the server: ', req.body)
    
    const newUser = req.body

    User.findOne({ email: newUser.email }, (err, existingUser) => {
      if (err) { throw err }
      if (existingUser) {
        res.json( { message: 'userExists' } )
      } else {
        const newUserDoc = User.create(newUser)
        res.json({
        message: "signedUp",
        })
      }
    })
  }
}
     
module.exports = UserController
