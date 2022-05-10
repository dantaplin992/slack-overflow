import React from 'react'
import DropdownMenu from './DropdownMenu'

function Banner(props) {
  const [showDropdown, setShowDropdown] = React.useState(false)
  const [animationClass, setAnimationClass] = React.useState("banner_dropdownhidden")
  const { firstName, lastName, email, icon, displayName } = props.currentUser
  
  const toggleDropdown = () => {setShowDropdown(value => !value)
                                 if(!showDropdown) {
                                   setAnimationClass("banner_dropdown")
                                 } else {
                                   setAnimationClass("banner_dropdownreverse")
                                 }}

  const dropdownProps = {
    logoutFunction: props.logoutFunction,
    currentUser: props.currentUser,
    animationClass: animationClass
  }

  return (
    <div className='Banner'>
       <div>
           <button type="button" className='bannerProfile' onClick={toggleDropdown}>
           <img className="w-6 h-6 mr-2 rounded-full shadow-lq" src={icon}/>
           {firstName} {lastName}
       </button>
       {showDropdown ? (
      <DropdownMenu dropdownProps={dropdownProps}/>
       ): <DropdownMenu dropdownProps={dropdownProps}/>}
      </div>
      </div>
  )
}

export default Banner
