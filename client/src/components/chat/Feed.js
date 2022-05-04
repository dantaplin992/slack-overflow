import React from 'react';
import Message from './Message'
import MessageInput from './MessageInput'

class Feed extends React.Component {
  constructor() {
    super()
    this.state = {
      messages: ["Message 1", "Message 2", "Message 3"]
    }
  }
  render = () => {
    const msgs = []
    for (let i = 0; i < this.state.messages.length; i++) {
      msgs.push(<Message />)
    }
    return (
      <div className='Feed'>
        Feed
        {msgs}
        <MessageInput />
      </div>
    )
  }
}

export default Feed
