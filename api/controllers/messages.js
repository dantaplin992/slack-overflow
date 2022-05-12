const Message = require('../models/message')

const MessageController = {
  All: (req, res) => {
    Message.find(

    ).then( (result) => {
      res.send(result)
    })
  },
  Room: (req, res) => {
    console.log(req.params)
    Message.find(
      { roomName: req.params.roomId }
    ).populate("authorId").then( (result) => {
      res.send(result)
    })
  },
  New: (req, res) => {
    const message = new Message(req.body)
    console.log('this is a new message: ', message)
    message.save((err) => {
      if (err) throw err
    })
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

module.exports = MessageController;
