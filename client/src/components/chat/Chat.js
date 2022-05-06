import React from 'react'
import { ReactSession } from 'react-client-session'
import io from 'socket.io-client'
import Feed from './feed/Feed'
import Banner from './Banner'
import SideBar from './SideBar';

class Chat extends React.Component {
  constructor(props) {
    super(props)
    this.socket = null
  }

  socketConnect() {
    this.socket = io(`localhost:5000`)
    this.socket.on('handshake', (msg) => {
      console.log(msg)
    })
  }

  render = () => {
    const { currentUser } = this.props.currentState
  
    return (
      <div className='Chat'>
        <Banner currentUser={currentUser}/>
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
