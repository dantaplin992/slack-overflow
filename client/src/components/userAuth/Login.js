import React from 'react'

class Login extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render = () => {

    const handleSubmit = (e) => {
      const email = e.target.email.value
      const password = e.target.password.value
      e.preventDefault()
      this.props.loginFunction(email, password)
    }
      
      return (
        <div>
        <form onSubmit={handleSubmit}>
          <input
          type="text"
          name="email"
          placeholder="email"
          />
          <input
            type="text"
            name="password"
            placeholder="password" />
          <input type="submit" value="Login" />
        </form>
    </div>
  )}
}
  
export default Login
