import React from 'react'

class Message extends React.Component {

  render = () => {
    const msg = this.props.text
    return (
      <div className='text-gray-400'>
        <div>
          {msg}
        </div>
      </div>
    )
  }

}

export default Message
