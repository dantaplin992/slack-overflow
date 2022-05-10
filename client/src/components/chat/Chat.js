import React from 'react'
import Feed from './feed/Feed'
import Banner from './Banner'
import SideBar from './SideBar';

class Chat extends React.Component {
  constructor(props) {
    super(props)
    this.socket = null
    this.state = {
      currentRoom: "General",
    }
    this.changeRoom = this.changeRoom.bind(this)
  }

  changeRoom(newRoom) {
    this.setState({ currentRoom: newRoom })
  }

  render = () => {
    const { currentUser } = this.props.currentState
    const { logoutFunction } = this.props
  
    return (
      <div className='Chat'>
        <Banner currentUser={currentUser} logoutFunction={logoutFunction}/>
        <SideBar changeRoom={this.changeRoom}/>
        <Feed currentRoom={this.state.currentRoom} currentUser={currentUser}/>
      </div>
    )
  }

}

export default Chat
