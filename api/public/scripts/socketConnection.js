const fetch = (url) => import('node-fetch').then(({default: fetch}) => fetch(url))

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
      //console.log(newMessage)

      postNewMessage(newMessage)

      io.emit('displayNewMessage', newMessage)
    })
  })
}

function postNewMessage(newMessage) {
  console.log(newMessage.message)
  const url = `http://localhost:5000/messages/new`
  const messageObj = { message: newMessage.message }
  fetch(url, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(messageObj),
  }).then((res) => {
    console.log(res)
  })
}

module.exports = chat
