import React from 'react'
import EditProfile from './EditProfile'

function DropdownMenu(props) {

  const logout = () => {
    logoutFunction()
  }

  const { animationClass, currentUser, logoutFunction } = props.dropdownProps
  const { firstName, lastName, email, icon, displayName } = currentUser

  

  return(
    <div className={`${animationClass}`}>
    <div className=" bg-gray-800 text-gray-400 text-sm flex flex-col mt-0 mr-0">
         <ul>
           <li className='bannerProfile'>
             <EditProfile currentUser={currentUser} />
           </li>
           <li className='bannerProfile'>
             {<button onClick={logout}>Logout</button>}
           </li>
         </ul>
       </div>
    </div>
  )
}

export default DropdownMenu