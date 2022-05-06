import React from 'react';

function Signup(props) {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      password: e.target.password.value,
      icon: e.target.icon.value,
      displayName: e.target.displayName.value
    }
   props.signUpFunction(newUser)
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-slate-100">
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-5 mb-4" onSubmit={handleSubmit}>
      <div className="mb-6">
       <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="firstName">
          First Name
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          type='text'
           name="firstName"
           placeholder='First Name'
           autoComplete='First Name' />
      </div>

      <div className="mb-6">
       <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="lastName">
          Last Name
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          type='text'
           name="lastName"
           placeholder='Last Name'
           autoComplete='Last Name' />
      </div>

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


      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="displayName">
          Display Name
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type='text'
          name="displayName"
          placeholder='Display Name'
          autoComplete='Display Name' />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="icon">
          Icon Url
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type='text'
          name="icon"
          placeholder='Icon Url'
          autoComplete='Icon Url' />
      </div>


       <div className="flex justify-center">
        <input className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          value="Sign Up" />
       </div>
   </form>
</div>
  )
}

export default Signup
