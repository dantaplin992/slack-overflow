import React from 'react';

function Login() {

  const loginButton = document.getElementById('login-button');
  loginButton.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('login button clicked')
  }
  )
  
  return(
    <div className='Login'>
      <form>
        <input type='text' name="username" placeholder='username' />
        <input type='password' name="password" placeholder='password' />
        <button id="login-button" type='button'>Login</button>
      </form>
      <div>
        <p>Don't have an account?</p>
        <button>Sign Up</button>
      </div>
    </div>
  )
}

export default Login
