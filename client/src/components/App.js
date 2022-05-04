import '../App.css';
import React from 'react'
import UserAuth from './userAuth/UserAuth'
import Chat from './chat/Chat'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      loggedIn: true
    }
  }

  login = () => {
    this.setState(
      {
        loggedIn: true
      }
    )
  }

  logout = () => {
    this.setState(
      {
        loggedIn: false
      }
    )
  }
  
  render = () => {
    const content = this.state.loggedIn ? <Chat /> : <UserAuth />
    return (
      <div className='App'>
        {content}
      </div>
    )
  }
}

export default App;
