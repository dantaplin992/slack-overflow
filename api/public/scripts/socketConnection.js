

function chat(io) {
  io.on('connection', (socket) => {
  console.log("socket connected")
  socket.emit('handshake', 'hello client')

  socket.on('buttonPress', (msg) => {
    console.log(msg)

    io.emit('displayMessage', msg)
  })
})
};

module.exports = chat
