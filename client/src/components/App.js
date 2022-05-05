import '../styles/App.css'
import '../styles/index.css'
import React from 'react'
import UserAuth from './userAuth/UserAuth'
import Chat from './chat/Chat'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      currentUser: null
    }
  }

  componentDidMount() {
    const user = localStorage.getItem('user')
    if (user) {
      this.setState({
        loggedIn: true,
        currentUser: user
      })
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
      console.log('Data: ', data)
      if (data.message === 'loggedIn') {

        const setUser = { firstName: data.firstName,
                    lastName: data.lastName,
                    email: data.email,
                    icon: data.icon,
                    displayName: data.displayName
                  }

        this.setState({ loggedIn: true, currentUser: setUser })
        localStorage.setItem('user', setUser)
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
    console.log('current user from render func: ', this.state.currentUser)
    console.log('local storage: ', localStorage.getItem('user'))
    const content = this.state.loggedIn ? <Chat currentUser={this.state.currentUser}/> : <UserAuth loginFunction={this.login}/>
    return (
      <div className='App'>
        {content}
      </div>
    )
  }
}

export default App
