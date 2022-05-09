import React from 'react'

class Message extends React.Component {

  render = () => {
    const msg = this.props.text
    const time = this.props.timeStamp
    return (
      <div className='Message'>
        <div>
          {msg} 
        </div>
        <div>
          {time}
        </div>
      </div>
    )
  }

}

export default Message
