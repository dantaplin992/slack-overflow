import React from 'react'
import io from 'socket.io-client'
import Feed from './feed/Feed'
import Banner from './Banner'
import Rooms from './Rooms'

class Chat extends React.Component {
  constructor() {
    super()
    this.socket = null
  }

  socketConnect() {
    this.socket = io(`localhost:5000`)
    this.socket.on('handshake', (msg) => {
      console.log(msg)
    })
  }

  render = () => {
    return (
      <div className='Chat'>
        <Banner />
        <Rooms />
        <Feed />
      </div>
    )
  }

  componentDidMount() {
    if(!this.socket) {
      this.socketConnect()
    }
  }
}

export default Chat
