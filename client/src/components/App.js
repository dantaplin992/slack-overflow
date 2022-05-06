import '../styles/App.css'
import '../styles/index.css'
import React from 'react'

import UserAuth from './userAuth/UserAuth'
import Chat from './chat/Chat'

class App extends React.Component {
  constructor() {
    super()
    if (localStorage.getItem('currentUser')) {
      this.state = {
        loggedIn: true,
        currentUser: JSON.parse(localStorage.getItem('currentUser'))
      }
    } else {
      this.state = {
        loggedIn: false,
        currentUser: null
      }
    }
  }

  login = (email, password) => {
    const credentials = { email: email, password: password } 

    fetch('http://localhost:5000/sessions/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    }).then(response => response.json())
    .then(data => {
      if (data.message === 'loggedIn') {

        const setUser = { firstName: data.firstName,
                    lastName: data.lastName,
                    email: data.email,
                    icon: data.icon,
                    displayName: data.displayName
                  }

        this.setState({ loggedIn: true, currentUser: setUser })
        localStorage.setItem('currentUser', JSON.stringify(setUser))
      }
    })
  }

  logout = () => {
    this.setState(
      {
        loggedIn: false,
        currentUser: {}
      }
      )
    localStorage.removeItem('currentUser')
  }
  
  render = () => { 
    const content = this.state.loggedIn ?  <Chat currentState={this.state} logoutFunction={this.logout}/> : <UserAuth loginFunction={this.login}/>
    return (
      <div className='App'>
        {content}
      </div>
    )
  }
}

export default App
