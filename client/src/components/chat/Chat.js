import React from 'react'
import Feed from './feed/Feed'
import Banner from './Banner'
import Rooms from './Rooms'

class Chat extends React.Component {

  render = () => {
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
