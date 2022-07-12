import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const register = async (e) => {
    e.preventDefault()
    const user = {
      name,
      email,
      role,
      password,
    }
    const response = await axios.post(
      'http://localhost:5000/auth/register',
      user
    )

    localStorage.setItem('user', JSON.stringify(response.data))

    if (response.data.role === 'customer') {
      navigate('/customer')
    }

    if (response.data.role === 'trader') {
      navigate('/trader')
    }
  }

  return (
    <center>
      <h2>Register</h2>

      <form onSubmit={(e) => register(e)}>
        <label>Name </label>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <label>Email </label>
        <input
          type='text'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br /> <br />
        <label htmlFor='role'>Role </label>
        <select
          name='role'
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option defaultValue='customer'>Select User role</option>
          <option value='customer'>Customer</option>
          <option value='trader'>Trader</option>
        </select>
        <br /> <br />
        <label>Password </label>
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button type='submit'>Register</button>
      </form>
    </center>
  )
}

export default Register
