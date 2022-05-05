import React from 'react'
import Feed from './feed/Feed'
import Banner from './Banner'
import SideBar from './SideBar';


class Chat extends React.Component {

  render = () => {
    return (
      <div className='Chat'>
        <Banner />
        <SideBar />
        <Feed />
      </div>
    )
  }
}

export default Chat
