import React from 'react'

function Banner(props) {
  console.log('banner props: ', props.currentUser)

  const { firstName, lastName, email, icon, displayName } = props.currentUser

  const logout = () => {
    props.logoutFunction()
  }
  
  return (
    <div className='Banner'>
      Banner.
      Hello {firstName} {lastName} <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Banner