import React from 'react'
import Moment from 'react-moment'
import 'moment-timezone'
import equal from 'fast-deep-equal'

class Message extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reactions: this.props.reactions,
      author: this.props.authorId,
      editing: false,
      editedText: this.props.text,
    }

    this.handleEditing = this.handleEditing.bind(this)
    this.editBoxChange = this.editBoxChange.bind(this)
  }

  alreadyReacted() {
    let reacted = false
    for (let i in this.state.reactions) {
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
    let uniqueEmojis = []
    let uniqueEmojiCount = []
    let elements = []
    let myReaction = ''
    for (let i in this.state.reactions) {
      if (uniqueEmojis.includes(this.state.reactions[i].emoji)) {
        let countIndex = uniqueEmojis.indexOf(this.state.reactions[i].emoji)
        uniqueEmojiCount[countIndex] += 1
      } else {
        uniqueEmojis.push(this.state.reactions[i].emoji)
        uniqueEmojiCount.push(1)
      }
      if (this.state.reactions[i].userId === this.props.currentUser.id) myReaction = this.state.reactions[i].emoji
    }
    for (let i in uniqueEmojis) {
      let elementClass = uniqueEmojis[i] === myReaction ? "reaction-icon-active" : "reaction-icon"
      let emojiDisplayNumber = uniqueEmojiCount[i] > 1 ? uniqueEmojiCount[i] : ''
      elements.push(<span className={elementClass} key={i}><span>{uniqueEmojis[i]}</span><span>{emojiDisplayNumber}</span></span>)
    }
    return elements
  }

  deleteButton() {
    if (this.props.authorId._id === this.props.currentUser.id) {
      return (<button name="delete-button" className="delete-message-button" onClick={() => {this.props.emitDelete(this.props.messageId)}}>Delete</button>)
    }
    return null
  }

  handleEditing() {
    if (this.state.editing) {
      this.props.emitEdit(this.props.messageId, this.state.editedText)
      this.setState({ editing: false })
      console.log("Saving changes")
    } else {
      this.setState({ editing: true })
      console.log("Editing message")
    }
  }

  editBoxChange(event) {
    this.setState({ editedText: event.target.value })
  }

  editButton() {
    if (this.props.authorId._id === this.props.currentUser.id) {
      return (<button name="edit-button" className="delete-message-button" onClick={this.handleEditing}>{this.state.editing ? "Save" : "Edit"}</button>)
    }
    return null
  }

  editBox(msg) {
    return (
      <textarea onChange={this.editBoxChange} value={this.state.editedText}/>
    )
  }

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
            {this.state.author.displayName}
            <span className='chat-timeSince'>
              <Moment fromNow>
                {time}
              </Moment>
              <span className="edit-delete-buttons">
                {this.deleteButton()}
                {this.editButton()}
              </span>
            </span>
          </div>
          {/* <div>
            <Moment format="dddd Do MMMM">
            {time}
            </Moment>
          </div> */}
          <div className='chat-message'>
            {this.state.editing ? this.editBox(msg) : msg}
          </div>
          <div>
            {this.reactionElements()}
          </div>
          <div>
            <button name="heart" onClick={() => { this.addReaction("❤️") }} key="heart" >❤️</button>
            <button name="laugh" onClick={() => { this.addReaction("😂") }} key="laugh" >😂</button>
            <button name="up" onClick={() => { this.addReaction("👍") }} key="up" >👍</button>
            <button name="down" onClick={() => { this.addReaction("👎") }} key="down" >👎</button>
          </div>
        </div>
      </div>
    )
  }

  componentDidUpdate(prevProps) {
    if (!equal(prevProps.reactions, this.props.reactions)) {
      this.setState({ reactions: this.props.reactions })
    }
    if (!equal(prevProps.authorId, this.props.authorId)) {
      this.setState({ author: this.props.authorId })
    }
  }

}

export default Message
