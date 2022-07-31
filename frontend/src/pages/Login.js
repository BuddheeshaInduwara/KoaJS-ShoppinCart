import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

import axios from 'axios'

import React from 'react'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  const navigate = useNavigate()

  const loginHandler = async (e) => {
    e.preventDefault()
    const user = {
      email,
      password,
    }

    const response = await axios.post('http://localhost:5000/auth/login', user)

    localStorage.setItem('user', JSON.stringify(response.data))

    if (!response.data) {
      setError(true)
    }

    if (response.data.role === 'customer') {
      navigate('/customer')
    }

    if (response.data.role === 'trader') {
      navigate('/trader')
    }
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      setError(false)
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  }, [error])

  return (
    <center>
      <h2>Login</h2>
      <form onSubmit={loginHandler}>
        <label>Email </label>
        <input
          type='text'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br /> <br />
        <label>Password </label>
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button type='submit'>Login</button>
      </form>
      {error && <p>Invalid Credentials</p>}
    </center>
  )
}

export default Login
