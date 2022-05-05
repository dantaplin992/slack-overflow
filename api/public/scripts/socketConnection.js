
function chat(io) {
  io.on('connection', (socket) => {
    console.log(`socket connected with id ${socket.id}`)
    socket.emit('handshake', 'hello client')

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

      io.emit('displayNewMessage', newMessage)
    })
  })
}

module.exports = chat
