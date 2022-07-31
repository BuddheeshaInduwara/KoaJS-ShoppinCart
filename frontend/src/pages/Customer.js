import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import CartTable from '../components/customer/CartTable'
import ItemTable from '../components/customer/ItemTable'
import WishlistTable from '../components/customer/WishlistTable'

const Customer = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    if (!user) {
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
      <ItemTable />
      <CartTable />
      <WishlistTable />
    </div>
  )
}

export default Customer
