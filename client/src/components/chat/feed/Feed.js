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
            messages: data,
            renderedHistoric: true
          }
        )
      })
  }

  render() {
    const messageComponents = []
    for (let i = 0; i < this.state.messages.length; i++) {
      messageComponents.push(<Message text={this.state.messages[i].message} key={i} />)
    }
    return (
      <div className='Feed'>
        Feed
        {messageComponents}
        <MessageInput />
      </div>
    )
  }

  componentDidMount() {
    this.getAllMessages()
  }
}

export default Feed
