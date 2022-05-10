import React from 'react'
import Moment from 'react-moment'
import 'moment-timezone'
import equal from 'fast-deep-equal'

class Message extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reactions: this.props.reactions
    }
  }

  alreadyReacted() {
    let reacted = false
    for (let i in this.state.reactions) {
      console.log(this.props.currentUser.id)
      if (this.state.reactions[i].userId == this.props.currentUser.id) reacted = true
    }
    return reacted
  }

  updateReaction(newReactions, emoji) {
    for (let i in newReactions) {
      if (newReactions[i].userId === this.props.currentUser.id) {
        if (newReactions[i].emoji === emoji) {
          newReactions.splice(i, 1)
        } else {
          newReactions[i].emoji = emoji
        }
      }
    }
    return newReactions
  }

  addReaction(newEmoji) {
    let newReactions = []
    const newReaction = { emoji: newEmoji, userId: this.props.currentUser.id }

    for (let i in this.state.reactions) {
      newReactions.push(this.state.reactions[i])
    }
    console.log(this.alreadyReacted())
    if (this.alreadyReacted()) {
      // remove reaction
      newReactions = this.updateReaction(newReactions, newEmoji)
    } else {
      newReactions.push(newReaction)
    }
    this.setState({ reactions: newReactions })
    this.props.emitReaction({ messageId: this.props.messageId, newReactions: newReactions })
  }

  reactionElements() {
    let elements = []
    for (let i in this.state.reactions)  elements.push(<span>{this.state.reactions[i].emoji}</span>)
    return elements
  }

  render = () => {
    const {text: msg, timeStamp: time } = this.props
    const { firstName, lastName, displayName, icon } = this.props.authorId
    return (
      <div className='text-gray-400'>
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
        <div>
          {this.reactionElements()}
        </div>
        <div>
          <button onClick={() => { this.addReaction("❤️") }}>❤️</button>
          <button onClick={() => { this.addReaction("😂") }}>😂</button>
          <button onClick={() => { this.addReaction("👍") }}>👍</button>
          <button onClick={() => { this.addReaction("👎") }}>👎</button>
        </div>
      </div>
    )
  }

  componentDidUpdate(prevProps) {
    if (!equal(prevProps.reactions, this.props.reactions)) {
      this.setState({ reactions: this.props.reactions })
    }
  }

}

export default Message
