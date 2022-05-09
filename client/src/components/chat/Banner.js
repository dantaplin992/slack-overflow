import React from 'react'
import EditProfile from './EditProfile'

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
      <EditProfile currentUser={props.currentUser} />
    </div>
  )
}

export default Banner