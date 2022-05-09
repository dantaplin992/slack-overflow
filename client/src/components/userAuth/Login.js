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

    const signUp = () => {
      this.props.toggleLogin()
    }
      
      return (
        <div className="flex flex-col justify-center items-center h-screen bg-slate-100">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-5 mb-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="email">
              Email
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            type='text'
            name="email"
            placeholder="email"
            autoComplete='email' />
          </div>
         <div className="mb-6">
           <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="password">
              Password
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              type='password'
               name="password"
               placeholder='password'
               autoComplete='password' />
          </div>
           <div className="flex justify-center">
            <input className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              value="Login" />
           </div>
        <div className="mt-5">
          <p className="text-center text-gray-500 text-xs">Don't have an account?</p>
          <button className="text-center text-gray-500 hover:text-purple-600 text-xs"
                  onClick={signUp}>Sign Up</button>
        </div>
       </form>
    </div>
  )}
}
  
export default Login
