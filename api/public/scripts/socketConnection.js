const joinNewRoom = (socket, roomName) => {
  socket.join(roomName)
}

function chat(io) {
  io.on('connection', (socket) => {
    let currentRoom = 'General'
    console.log(`socket connected with id ${socket.id}`)
    socket.emit('handshake', 'hello client')
    joinNewRoom(socket, currentRoom)

    // Sending & receiving messages in MVP API-only app

    socket.on('buttonPress', (msg) => {
      console.log(msg)

      io.emit('displayMessage', msg)
    })

    socket.on('disconnect', () => {
      console.log(`socket ${socket.id} disconnected`)
    })

    // Sending & receiving messages in React client app

    socket.on('newMessage', (newMessage) => {
      console.log(`MESSAGE FOR ROOM ${newMessage.roomName}`)
      io.to(newMessage.roomName).emit('displayNewMessage', newMessage)
    })

    socket.on('changeRoom', (roomName) => {
      console.log(`${socket.id} joinging room: ${roomName}`)
      socket.leave(currentRoom)
      joinNewRoom(socket, roomName)
      currentRoom = roomName
    })
  })
}

module.exports = chat
