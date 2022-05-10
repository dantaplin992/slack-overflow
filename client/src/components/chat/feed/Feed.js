import React from 'react'
import Message from './Message'
import MessageInput from './MessageInput'
import io from 'socket.io-client'
import { IoSend } from "react-icons/io5";
import { BsImage, BsFillEmojiDizzyFill, BsCodeSlash } from "react-icons/bs";
import { AiOutlineFileGif } from "react-icons/ai";


class Feed extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [],
      newMessageInput: '',
      upToDate: false,
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
        }
      )
    })
  }

  getRoomMessages() {
    const that = this
    const url = `http://localhost:5000/messages/room/${this.props.currentRoom}`
    fetch(url, {
      method: "GET",
      mode: 'cors',
      credentials: 'include',
    }
    ).then(res => res.json()
    ).then((data) => {
      that.setState({ messages: data })
    })
  }

  setMessagesState(newMessages) {
    this.setState({ messages: newMessages })
  }

  objectsAreSame(x, y) {
    var objectsAreSame = true;
    for(var propertyName in x) {
       if(x[propertyName] !== y[propertyName]) {
          objectsAreSame = false;
          break;
       }
    }
    return objectsAreSame;
 }

  socketConnect() {
    this.socket = io(`localhost:5000`)
    this.socket.on('handshake', (msg) => {
      console.log(msg)
    })

    this.socket.on('displayNewMessage', (params) => {
      console.log(params.timeStamp)
      this.displayNewMessage(params)
    })
  }

  handleChange(event) {
    this.setState({ newMessageInput: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    if (this.state.newMessageInput != '') {
      const { firstName, lastName, displayName, icon } = this.props.currentUser
      const newTimeStamp = new Date
      const newMessage = { 
        message: this.state.newMessageInput, 
        roomName: this.props.currentRoom, 
        timeStamp: newTimeStamp, 
        authorId: this.props.currentUser.id 
      }
      const socketMessage = { 
        message: this.state.newMessageInput, 
        roomName: this.props.currentRoom, 
        timeStamp: newTimeStamp, 
        authorId: { displayName: displayName, firstName: firstName, lastName: lastName, icon: icon } 
      }

      this.passMessageToServer(newMessage)
      this.socket.emit('newMessage', socketMessage)
      this.setState({ newMessageInput: '' })
    }
  }

  passMessageToServer(newMessage) {
    console.log("Message: " + newMessage.message )
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
    this.setState({ messages: newMessages })
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
    for (let i = 0; i < this.state.messages.length; i++) {
      messageComponents.push(<Message key={i} authorId={this.state.messages[i].authorId} text={this.state.messages[i].message} timeStamp={this.state.messages[i].timeStamp} currentUser={this.props.currentUser}/>)
    }

    return (
      <div className='Feed'>
        <p>{this.props.currentRoom}</p>

        {messageComponents}
        <form>
          <div className='bottom-bar'>
            <input 
              className='bottom-bar-input' 
              type="text" 
              placeholder="Enter message..." 
              onChange={this.handleChange}
              value={this.state.newMessageInput} />
            <button
              type="submit"
              className='send-button' 
              onClick={this.handleSubmit}>
              <IoSend size="20" />
            </button>
            <div className='bottom-sub-bar'>
            <button
              type="submit"
              className='bottom-bar-icon'>
              <BsImage size="20" />
            </button>
            <button
              type="submit"
              className='bottom-bar-icon'>
              <AiOutlineFileGif size="20" />
            </button>
            <button
              type="submit"
              className='bottom-bar-emoji'>
              <BsFillEmojiDizzyFill size="20"/>
            </button>
            <button
              type="submit"
              className='bottom-bar-icon'>
              <BsCodeSlash size="20" />
            </button>
            </div>
          </div>
        </form>
      </div>
    )
  }

  componentDidMount() {
    if (!this.socket) this.socketConnect()
    this.getRoomMessages()
  }

  componentDidUpdate(prevProps) {
    if(this.props.currentRoom != prevProps.currentRoom) {
      console.log(`leaving room: ${prevProps.currentRoom}`)
      console.log(`joining room: ${this.props.currentRoom}`)
      this.socket.emit('joinNewRoom', this.props.currentRoom)
      this.getRoomMessages()
    }
  }
}

export default Feed
