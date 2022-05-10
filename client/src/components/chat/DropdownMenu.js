function DropdownMenu({ currentUser, logoutFunction, animationClass, toggleEditProfileModal }) {

  const { firstName, lastName, email, icon, displayName } = currentUser

  return(
    <div className={`${animationClass}`}>
    <div className=" bg-gray-800 text-gray-400 text-sm flex flex-col mt-0 mr-0">
         <ul>
           <li className='bannerProfile'>
             {<button onClick={toggleEditProfileModal}>Edit Profile</button>}
           </li>
           <li className='bannerProfile'>
             {<button onClick={logoutFunction}>Logout</button>}
           </li>
         </ul>
       </div>
    </div>
  )
}

export default DropdownMenu