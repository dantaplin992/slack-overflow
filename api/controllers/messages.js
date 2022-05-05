const Message = require('../models/message')

const HomeController = {
  All: (req, res) => {
    Message.find(

    ).then( (result) => {
      res.send(result)
    })
  },
};

module.exports = HomeController;
