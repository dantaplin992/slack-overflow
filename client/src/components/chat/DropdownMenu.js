function DropdownMenu({ currentUser, logoutFunction, animationClass, toggleEditProfileModal }) {

  const { firstName, lastName, email, icon, displayName } = currentUser

  return(
    <div className={`${animationClass}`}>
    <div className="bannerDropdownList">
         <ul>
           <li>
             {firstName} {lastName}
           </li>
           <li>
              {email}
           </li>
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