import '../App.css';
import React from 'react'
import UserAuth from './UserAuth'
import Chat from './Chat'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false
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
