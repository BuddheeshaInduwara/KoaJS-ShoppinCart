import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  return (
    <center>
      <h1>Shopping Cart / Trader</h1>
      <button onClick={() => navigate('/login')} style={{ marginRight: '8px' }}>
        Login
      </button>
      <button onClick={() => navigate('/register')}>Register</button>
    </center>
  )
}

export default Home
