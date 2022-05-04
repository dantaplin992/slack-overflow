document.addEventListener('DOMContentLoaded', () => {
  console.log('Feed loaded')
  const socket = io()
  const messagesList = document.querySelector('#messages')

  socket.on('handshake', (msg) => {
    console.log(msg)
  })

  socket.on('displayMessage', (newMsg) => {
    console.log(newMsg)
    const newListItem = document.createElement('li')
    newListItem.innerText = newMsg
    messagesList.appendChild(newListItem)
  })

  const sendButton = document.querySelector('#messageButton')
  const textInput = document.querySelector('#textInput')
  sendButton.addEventListener('click', () => {
    const fullMessage = textInput.value
    socket.emit('buttonPress', fullMessage)
  })

})