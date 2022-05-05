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
    console.log(this.state.newMessageInput)
    event.preventDefault()
    this.socket.emit('newMessage', { message: this.state.newMessageInput})
  }

  displayNewMessage(messageObj) {
    const currentMessages = this.state.messages
    const newMessages = []
    for (let i = 0; i < currentMessages.length; i++) newMessages.push(currentMessages[i])
    newMessages.push(messageObj)
    //console.log(newMessages)
    this.setState({ messages: newMessages})
  }

  render() {
    const messageComponents = []
    for (let i = 0; i < this.state.messages.length; i++) {
      messageComponents.push(<Message text={this.state.messages[i].message} key={i} />)
    }
    return (
      <div className='Feed'>
        Feed
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
