const Message = require('../models/message')

const HomeController = {
  All: (req, res) => {
    Message.find(

    ).then( (result) => {
      res.send(result)
    })
  },
  New: (req, res) => {
    const message = new Message({ message: req.query.message })
    message.save((err) => {
      if (err) {
        throw err;
      }
    })
    res.redirect('/messages/all')
  },
  Delete: (req, res) => {
    const postId = req.query.id
    Message.deleteOne(
      { _id: postId}
    ).then( () => {
      res.redirect('/messages/all')
    })
  }
};

module.exports = HomeController;
