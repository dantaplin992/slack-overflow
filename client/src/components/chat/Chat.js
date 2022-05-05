import React from 'react'
import io from 'socket.io-client'
import Feed from './feed/Feed'
import Banner from './Banner'
import SideBar from './SideBar';


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
        <SideBar />
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
