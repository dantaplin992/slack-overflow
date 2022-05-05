import React from 'react'

function Banner(props) {

  const { firstName, lastName, email, icon, displayName } = props.currentUser
  
  return (
    <div className='Banner'>
      Banner. Hello {firstName} {lastName} <br />
    </div>
  )
}

export default Banner
