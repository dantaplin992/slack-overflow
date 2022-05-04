import React from 'react'
import Message from './Message'
import MessageInput from './MessageInput'

class Feed extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [],
      renderedHistoric: false
    }
  }

  getAllMessages = () => {
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
            messages: data
          }
        )
      })
  }

  render = () => {
    this.getAllMessages()
    const messageComponents = []
    for (let i = 0; i < this.state.messages.length; i++) {
      messageComponents.push(<Message />)
    }
    return (
      <div className='Feed'>
        Feed
        {messageComponents}
        <MessageInput />
      </div>
    )
  }
}

export default Feed
