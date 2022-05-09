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

      io.to(currentRoom).emit('displayNewMessage', newMessage)
    })

    socket.on('joinRoom', (roomName) => {
      console.log(`joinging room: ${roomName}`)
      joinNewRoom(socket, roomName)
      currentRoom = roomName
    })
  })
}

module.exports = chat
