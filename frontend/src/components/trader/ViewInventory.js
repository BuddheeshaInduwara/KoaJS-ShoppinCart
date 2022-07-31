import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { FaEdit } from 'react-icons/fa'
import EditItem from './EditItem'

const ViewInventory = () => {
  const [edit, setEdit] = useState(false)
  const [editItem, setEditItem] = useState(null)

  const [inventory, setInventory] = useState([])

  const getInventory = async () => {
    const response = await axios.get('http://localhost:5000/trader/inventory')
    setInventory(response.data)
  }
  useEffect(() => {
    getInventory()
  }, [])

  return (
    <div>
      {!edit && (
        <>
          <h3>Inventory</h3>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>PRICE</th>
                <th>DISCOUNT</th>
                <th>EDIT</th>
              </tr>
            </thead>
            <tbody>
              {inventory &&
                inventory.map((item) => (
                  <tr key={item[1].id}>
                    <td>{item[1].id}</td>
                    <td>{item[1].name}</td>
                    <td>{item[1].price}</td>
                    <td>{`${item[1]?.discount || 0} %`}</td>
                    <td>
                      <button
                        onClick={() => {
                          setEdit(true)
                          setEditItem(item[1])
                        }}
                      >
                        <FaEdit />
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </>
      )}
      {edit && <EditItem setEdit={setEdit} editItem={editItem} />}
      <hr />
    </div>
  )
}

export default ViewInventory
