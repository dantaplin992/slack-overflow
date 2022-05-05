import React from 'react';
import Login from './Login'
import Signup from './Signup'

class UserAuth extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      displayLogin: true
    }
  }
  

  render = () => {
    let displayPage = this.state.displayLogin ? <Login loginFunction={this.props.loginFunction} /> : <Signup />
    return (
      <div className='UserAuth'>
        UserAuth <br />
        {this.props.loggedIn ?  null : <span>I am logged in on the Auth page</span>}
        {displayPage}
      </div>
    )
  }
}

export default UserAuth
