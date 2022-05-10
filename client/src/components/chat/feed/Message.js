import React from 'react'
import Moment from 'react-moment';
import 'moment-timezone';

class Message extends React.Component {

  render = () => {
    const {text: msg, timeStamp: time } = this.props
    const { firstName, lastName, displayName, icon } = this.props.authorId
    return (
      <div className='chat-container text-gray-400'>
        <div className='chat-profile-container'>
          <img className='w-10 h-10 mt-2 mb-2 rounded-md shadow-lq' src={icon}/>
        </div>
        <div className='flex-col'>
        <div className='chat-user'>
         {displayName}
         <span className='chat-timeSince'><Moment fromNow>
          {time}
          </Moment></span>
        </div>
        {/* <div>
          <Moment format="dddd Do MMMM">
          {time}
          </Moment>
        </div> */}
        <div className='chat-message'>
       {msg}
        </div>
        </div>
      </div>
    )
  }

}

export default Message
