import React from 'react';
import io from 'socket.io-client'
import Feed from './Feed'

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
      <Feed />
    )
  }
}

export default Chat
