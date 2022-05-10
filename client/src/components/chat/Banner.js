import React from 'react'
import EditProfile from './EditProfile'

function Banner(props) {
  const [showDropdown, setShowDropdown] = React.useState(false)
  const toggleDropdown = () => setShowDropdown(value => !value)
  const { firstName, lastName, email, icon, displayName } = props.currentUser

  const logout = () => {
    props.logoutFunction()
  }
  
  return (
    <div className='Banner'>
       <div>
           <button type="button" className='bannerProfile' onClick={toggleDropdown}>
           <img className="w-6 h-6 mr-2 rounded-full shadow-lq" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"/>
           {firstName} {lastName}
       </button>
       {showDropdown ? (
       <div className=" bg-gray-800 text-gray-400 text-sm flex flex-col mt-0 mr-0 banner_dropdown">
         <ul>
           <li className='bannerProfile'>
         <EditProfile currentUser={props.currentUser} />
           </li>
           <li className='bannerProfile'>
         {<button onClick={logout}>Logout</button>}
           </li>
         </ul>
       </div>
       ): null}
      </div>
      </div>
  )
}

export default Banner
