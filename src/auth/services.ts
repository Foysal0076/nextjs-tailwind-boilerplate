const authenticateUser = (email: string, password: string) => {
  if (email !== 'test@foy.com' && password !== 'Test1234') {
    return null
  }

  const user = {
    id: 1,
    name: 'Foysal Ahmed',
    email: 'test@foy.com',
    token:
      'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTcwOTIwNzc5NCwiZXhwIjoxNzA5MjExMzk0fQ.nKg7XRa-2BdLAtA1uqOcQsKhMFxcrBoiDkD7FHTInCA',
  }

  return user
}

export const authService = { authenticateUser }
