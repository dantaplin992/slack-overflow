const Message = require('../models/message')

const HomeController = {
  All: (req, res) => {
    Message.find(

    ).then( (result) => {
      res.send(result)
    })
  },
  New: (req, res) => {
    console.log("Body: " + req.body)
    const message = new Message(req.body)
    console.log(message)
    Message.insertOne(
      { message: req.body.message }
    )
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
