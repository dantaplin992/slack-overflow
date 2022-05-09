const User = require("../models/user")
const bcrypt = require('bcrypt')

const UserController = {
  New: (req, res, next) => {
    console.log('reached the server: ', req.body)
    let newUserObj = req.body
    bcrypt.hash(req.body.password, 10, (err, hash) => {
      if (err) throw err
      console.log(hash)
      newUserObj.password = hash
      const newUser = newUserObj
      
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
    })
  }
}
     
module.exports = UserController
