const Message = require('../../models/message.js')

function chat(io) {
  io.on('connection', (socket) => {
    let currentRoom = 'General'
    console.log(`socket connected with id ${socket.id}`)
    socket.emit('handshake', 'hello client')
    socket.join(currentRoom)

    // Sending & receiving messages in MVP API-only app

    socket.on('buttonPress', (msg) => {
      console.log(msg)

      io.emit('displayMessage', msg)
    })

    socket.on('disconnect', () => {
      console.log(`socket ${socket.id} disconnected`)
    })

    socket.on('joinNewRoom', (newRoomName) => {
      console.log(`leaving room: ${currentRoom}`)
      socket.leave(currentRoom)
      console.log(`joining room: ${newRoomName}`)
      socket.join(newRoomName)
      currentRoom = newRoomName
    })

    // Sending & receiving messages in React client app

    socket.on('newMessage', (newMessage) => {

      io.to(currentRoom).emit('displayNewMessage', newMessage)
    })

    socket.on('newReaction', (params) => {
      console.log(params)
      // Add reaction to message in DB
      Message.updateOne(
        { _id: params.messageId },
        { reactions: params.newReactions }
      ).then(() => {
        io.to(currentRoom).emit('displayNewReaction', params)
      })
    })

    socket.on('nameChange', (roomName) => {
      io.to(currentRoom).emit('refreshMessages')
    })
  })
}

module.exports = chat
