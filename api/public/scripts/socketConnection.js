

function chat(io) {
  io.on('connection', (socket) => {
  console.log(`socket connected with id ${socket.id}`)
  socket.emit('handshake', 'hello client')

  socket.on('buttonPress', (msg) => {
    console.log(msg)

    io.emit('displayMessage', msg)
  })

  socket.on('disconnect', () => {
    console.log(`socket ${socket.id} disconnected`)
  })
})
};

module.exports = chat
