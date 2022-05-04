import React, { useState } from 'react'

const initialValues = {
  username: '',
  password: ''
}

export default function LoginForm(props) {
  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target

    setValues({
      ...values,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    return (
      props.loggedIn ? null : console.log("I am the winner!")
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
      type="text"
      name="username"
      placeholder="username"
      value={values.username}
      onChange={handleInputChange} />
      <input
        type="text"
        name="password"
        placeholder="password"
        value={values.password}
        onChange={handleInputChange} />
      <input type="submit" value="Login" />
    </form>

  )
}


