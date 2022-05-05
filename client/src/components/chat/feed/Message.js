import React from 'react'

class Message extends React.Component {

  render = () => {
    const msg = this.props.text
    return (
      <div className='Message'>
        <div>
          {msg}
        </div>
      </div>
    )
  }

}

export default Message
