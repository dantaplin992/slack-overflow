const User = require("../models/user");
const bcrypt = require('bcrypt')

const SessionsController = {
  New: (req, res, next) => {
    console.log('reached the server: ', req.body)
    const email = req.body.email
    const password = req.body.password

    User.findOne({ email: email }).then((user) => {
      if(!user){
        res.json({
          message: "emailIncorrect"
        })
      } else {
        bcrypt.compare(password, user.password, (err, result) => {
          if (err) throw err
          if (result) {
            res.json({
              message: "loggedIn",
              firstName: `${user.firstName}`,
              lastName: `${user.lastName}`,
              email: `${user.email}`,
              icon: `${user.icon}`,
              displayName: `${user.displayName}`,
              id: `${user._id}`,
            })
          } else {
            res.json({
              message: "passwordIncorrect"
            })
          }
        })
      }
    })
  }
}

module.exports = SessionsController
