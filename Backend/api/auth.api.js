const { v4: uuidv4 } = require('uuid')
const { Users } = require('../dal')

const register = ({ name, email, role, password }) => {
  const id = uuidv4()

  const user = {
    id,
    name,
    email,
    role,
    password,
  }

  Users.set(id, user)
  return user
}

const login = ({ email, password }) => {
  for (let [k, v] of Users) {
    if (v.email === email && v.password === password) {
      return v
    }
  }

  return null
}

module.exports = { register, login }
