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
          const newUserDoc = User.create(newUser).then(newUser => {
          console.log('newUser: ', newUser)
          res.json({
            message: "signedUp",
            firstName: `${newUser.firstName}`,
            lastName: `${newUser.lastName}`,
            email: `${newUser.email}`,
            icon: `${newUser.icon}`,
            displayName: `${newUser.displayName}`,
            id: `${newUser._id}`,
          })
          })
        }
      })
    })
  },

  Update: (req, res) => {
    const { id, password } = req.body
    let updatedUserObj = req.body

    bcrypt.hash(password, 10, (err, hash) => {
      if (err) throw err
      updatedUserObj.password = hash
      const updatedUser = updatedUserObj
      
      User.findByIdAndUpdate(id, updatedUser, { new: true }, (err) => {
        if (err) { throw err }
        res.json({
          message: "Profile updated",
        })
      })
    })
  },


}
          
     
module.exports = UserController
