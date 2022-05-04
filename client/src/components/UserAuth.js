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
    let displayPage = this.state.displayLogin? <Login /> : <Signup />
    return (
      <div className='UserAuth'>
        UserAuth
        {displayPage}
      </div>
    )
  }
}

export default UserAuth
