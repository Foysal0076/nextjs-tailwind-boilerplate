const jwt = require('jsonwebtoken')

import { dummyUser } from './dummyData'

const authenticateUser = (email: string, password: string) => {
  if (email !== dummyUser.email || password !== dummyUser.password) {
    throw new Error('Invalid email or password')
  }

  const jsonwebtoken = jwt.sign(
    {
      id: dummyUser.id,
      name: dummyUser.name,
      email: dummyUser.email,
      iat: Math.floor(Date.now() / 1000),
    },
    process.env.JWT_SECRET,
    { expiresIn: 5 * 60 }
  )

  return {
    id: dummyUser.id,
    name: dummyUser.name,
    email: dummyUser.email,
    token: jsonwebtoken,
  }
}

//verify token
const verifyToken = (token: string) => {
  const bearerToken =
    token.split(' ')[0] === 'Bearer' ? token.split(' ')[1] : token
  const decoded = jwt.verify(bearerToken, process.env.JWT_SECRET)
  return decoded
}

export const authService = { authenticateUser, verifyToken }
