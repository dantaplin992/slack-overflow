import React from 'react'
import io from 'socket.io-client'
import Feed from './feed/Feed'
import Banner from './Banner'
import Rooms from './Rooms'

class Chat extends React.Component {

  socketConnect = () => {
    const socket = io(`localhost:5000`);

    socket.on('handshake', (msg) => {
      console.log(msg)
    })
  }

  render = () => {
    this.socketConnect()
    return (
      <div className='Chat'>
        <Banner />
        <Rooms />
        <Feed />
      </div>
    )
  }
}

export default Chat
