const register = asyc(req, res) => {
  res.send('register')
}

const register = async (req, res) => {
  res.send('login user')
}


const register = async (req, res) => {
  res.send('updateUser')
}

export { register, login, updateUser }
