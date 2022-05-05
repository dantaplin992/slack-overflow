const User = require("../models/user");

const SessionsController = {
  New: (req, res, next) => {
    console.log('reached the server: ', req.body)
    res.json({
      message: "loggedIn"
    })
  },
}

  module.exports = SessionsController