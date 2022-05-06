import React from 'react'
import Message from './Message'
import MessageInput from './MessageInput'
import io from 'socket.io-client'

class Feed extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [],
      renderedHistoric: false,
      newMessageInput: '',
    }
    this.socket = null

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  getAllMessages() {
    const that = this
    const url = 'http://localhost:5000/messages/all'
    fetch(url, {
      method: "GET",
      mode: 'cors',
      credentials: 'include',
    }
    ).then(res => res.json()
    ).then((data) => {
      that.setState(
        {
          messages: data,
          renderedHistoric: true
        }
      )
    })
  }

  socketConnect() {
    this.socket = io(`localhost:5000`)
    this.socket.on('handshake', (msg) => {
      console.log(msg)
    })

    this.socket.on('displayNewMessage', (params) => {
      console.log(`displaying new message: ${params}`)
      this.displayNewMessage(params)
    })
  }

  handleChange(event) {
    this.setState({ newMessageInput: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    const newMessage = { message: this.state.newMessageInput, roomName: this.props.currentRoom }

    this.passMessageToServer(newMessage)
    this.socket.emit('newMessage', newMessage)
  }

  passMessageToServer(newMessage) {
    console.log("Message: " + newMessage.message)
    const url = `http://localhost:5000/messages/new`
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newMessage)
    }).then((result) => {
      console.log(result)
    })
  }

  displayNewMessage(messageObj) {
    const currentMessages = this.state.messages
    const newMessages = []
    for (let i = 0; i < currentMessages.length; i++) newMessages.push(currentMessages[i])
    newMessages.push(messageObj)
    //console.log(newMessages)
    this.setState({ messages: newMessages})
  }

  filterMessagesByRoom() {
    const allMessages = this.state.messages
    const filteredMessages = this.state.messages.filter(obj => {
      return obj.roomName === this.props.currentRoom
    })
    return filteredMessages
  }

  render() {
    const messageComponents = []
    const filteredMessages = this.filterMessagesByRoom()
    for (let i = 0; i < filteredMessages.length; i++) {
      messageComponents.push(<Message text={filteredMessages[i].message} key={i} />)
    }
    return (
      <div className='Feed'>
        <p>{this.props.currentRoom}</p>
        {messageComponents}
        <form>
          <label>
            Message:
            <input type="text" onChange={this.handleChange} />
          </label>
          <input type="submit" onClick={this.handleSubmit} />
        </form>
      </div>
    )
  }

  componentDidMount() {
    if (!this.socket) this.socketConnect()
    this.getAllMessages()
  }
}

export default Feed
