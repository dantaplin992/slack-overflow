import { useState } from 'react'
import DropdownMenu from './DropdownMenu'
import EditProfile from './EditProfile'

function Banner({ currentUser, logoutFunction, currentRoom }) {
  const [showDropdown, setShowDropdown] = useState(false)
  const [showEditProfileModal, setShowEditProfileModal] = useState(false)
  const [animationClass, setAnimationClass] = useState("banner_dropdownhidden")

  const { firstName, lastName, email, icon, displayName } = currentUser
  
  const toggleDropdown = () => { setShowDropdown(value => !value)
                                  if(!showDropdown) {
                                    setAnimationClass("banner_dropdown")
                                  } else {
                                    setAnimationClass("banner_dropdownreverse")
                                 }}

  const dropdownProps = { logoutFunction, currentUser, animationClass, toggleEditProfileModal }

  function toggleEditProfileModal() {
    if (showDropdown) {
      toggleDropdown()
    }
    setShowEditProfileModal(value => !value)
  }

  return (
    <div className='Banner'>
      <div className="bannerRoom">
        <h1>#{ currentRoom }</h1>
      </div>
       <div>
           <button type="button" className='bannerProfile' onClick={toggleDropdown}>
           <img className="w-6 h-6 mr-2 rounded-full shadow-lq" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"/>
           {displayName}
       </button>
      <DropdownMenu {...dropdownProps}/>
      </div>
      { showEditProfileModal ? <EditProfile currentUser = {currentUser} toggleEditProfileModal={toggleEditProfileModal}/>: null }
      </div>
  )
}

export default Banner
