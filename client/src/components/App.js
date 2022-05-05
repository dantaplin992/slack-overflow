import '../App.css';
import React from 'react'
import UserAuth from './userAuth/UserAuth'
import Chat from './chat/Chat'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false
    }
  }

  login = (email, password) => {
    const credentials = { email: email, password: password } 
    console.log('credentials: ', credentials)

    fetch('http://localhost:5000/sessions/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    }).then(response => response.json())
    .then(data => {
      console.log('Success: ', data)
      if (data.message === 'loggedIn') {
        this.setState({ loggedIn: true, 
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        icon: data.icon,
        displayName: data.displayName
       })
      }
    })
  }

  logout = () => {
    this.setState(
      {
        loggedIn: false
      }
    )
  }
  
  render = () => {
    const content = this.state.loggedIn ? <Chat /> : <UserAuth loginFunction={this.login}/>
    return (
      <div className='App'>
        {content}
      </div>
    )
  }
}

export default App;
