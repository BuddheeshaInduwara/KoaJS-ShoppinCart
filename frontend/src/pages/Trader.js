import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Trader = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    if (!user || user.role !== 'trader') {
      navigate('/')
    }
  }, [])

  const logout = () => {
    localStorage.removeItem('user')
    navigate('/')
  }

  return (
    <div>
      <button onClick={() => logout()}>Sign Out</button>
      <br />
    </div>
  )
}

export default Trader
