import React from 'react'
import EditProfile from './EditProfile'

function Banner(props) {

  const { firstName, lastName, email, icon, displayName } = props.currentUser

  const logout = () => {
    props.logoutFunction()
  }
  
  return (
    <div className='Banner'>
       <div>
           <button type="button" className='bannerProfile'>
       <img className="w-6 h-6 mr-2 rounded-full shadow-lq" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"/>
       {firstName} {lastName}
       </button>
       <div className=" bg-white flex flex-col mt-6 mr-2">
         <EditProfile currentUser={props.currentUser} />
         {<button onClick={logout}>Logout</button>}
       </div>
      </div>
      </div>
  )
}

export default Banner
