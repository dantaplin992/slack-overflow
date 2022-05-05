import React from 'react';

function Login() {

  document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('login-button');
    loginButton.addEventListener('click', (e) => {
      e.preventDefault()
      console.log('login button clicked')
    }
    )
  })
  
  return(
    <div class="flex flex-col justify-center items-center h-screen bg-slate-100
  ">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-5 mb-4">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2 text-left" for="username">
          Username
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
        type='text' name="username" placeholder='username' />
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2 text-left" for="password">
          Password
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
         type='password' name="password" placeholder='password' />
      </div>
      <div class="flex justify-center">
        <button class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
         id="login-button" type='button'>
           Login
        </button>
       
      </div>
      <div class="mt-5">
        <p class="text-center text-gray-500 text-xs">Don't have an account?</p>
        <button class="text-center text-gray-500 hover:text-purple-600 text-xs">Sign Up</button>
      </div>
      </form>
    </div>
  )
}

export default Login
