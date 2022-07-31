import React, { useState } from 'react'
import axios from 'axios'

const AddItem = () => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  const addItem = async (e) => {
    e.preventDefault()
    const item = {
      name,
      price,
    }
    await axios.post('http://localhost:5000/trader/inventory', item)
    window.location.reload()
  }

  return (
    <div>
      <hr />
      <h3>Add Item</h3>
      <form onSubmit={(e) => addItem(e)}>
        <label>Name </label>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <label>Price </label>
        <input
          type='text'
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <br /> <br />
        <button type='submit'>Add Item</button>
      </form>
      <hr />
    </div>
  )
}

export default AddItem
