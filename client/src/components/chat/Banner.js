import React from 'react'

function Banner(props) {
  console.log('banner props: ', props.currentUser)

  const { firstName, lastName, email, icon, displayName } = props.currentUser
  
  return (
    <div className='Banner'>
      Banner.
      Hello {firstName} {lastName} <br />
    </div>
  )
}

export default Banner

// import React, { useContext } from 'react'

// class Banner extends React.Component {
//   static contextType = this.context
  
//   render() {

//     const { firstName, lastName, email, icon, displayName } = useContext(UserContext)
    
//     return (
//       console.log('this context: ', useContext(UserContext)),
//       <div className='Banner'>
//         Banner. Hello {firstName} {lastName} <br />
//       </div>
//     )
//   }
// }

// export default Banner