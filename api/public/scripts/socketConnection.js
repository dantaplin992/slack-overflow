
const joinRoom = (socket, roomName) => {
  socket.join(roomName)
}

function chat(io) {
  io.on('connection', (socket) => {
    let currentRoom = 'General'
    console.log(`socket connected with id ${socket.id}`)
    socket.emit('handshake', 'hello client')
    joinRoom(socket, currentRoom)

    // Sending & receiving messages in MVP API-only app

    socket.on('buttonPress', (msg) => {
      console.log(msg)

      io.emit('displayMessage', msg)
    })

    socket.on('disconnect', () => {
      console.log(`socket ${socket.id} disconnected`)
    })

    socket.on('joinNewRoom', (newRoomName) => {
      console.log(`joining room: ${newRoomName}`)
      joinRoom(socket, newRoomName)
      currentRoom = newRoomName
    })

    // Sending & receiving messages in React client app

    socket.on('newMessage', (newMessage) => {

      io.to(currentRoom).emit('displayNewMessage', newMessage)
    })
  })
}

module.exports = chat
