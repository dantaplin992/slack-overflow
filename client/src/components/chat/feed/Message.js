import React from 'react'
import Moment from 'react-moment';
import 'moment-timezone';

class Message extends React.Component {

  render = () => {
    const {text: msg, timeStamp: time } = this.props
    const { firstName, lastName, displayName, icon } = this.props.authorId
    return (
      <div className='Message'>
        <div>
          <Moment format="dddd Do MMMM">
          {time}
          </Moment>
        </div>
        <div>
          <Moment fromNow>
          {time}
          </Moment>
        </div>
        <div>
        {displayName} : {msg} 
        </div>
      </div>
    )
  }

}

export default Message
