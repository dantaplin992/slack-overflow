import React, { useState } from 'react';

const initialValues = {
  username: '',
  password: ''
}

export default function LoginForm() {
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
    console.log('username :', values.username)
    console.log('password :', values.password)
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


