const User = require("../models/user");

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
      } else if (user.password != password) {
        res.json({
          message: "passwordIncorrect"
      })
    } else {
      res.json({
        message: "loggedIn",
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        icon: user.icon,
        displayName: user.displayName
    })
  }
})
  }
}

  module.exports = SessionsController