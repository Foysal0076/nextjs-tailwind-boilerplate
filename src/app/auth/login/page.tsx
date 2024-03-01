'use client'
import { useSession } from 'next-auth/react'

import LoginForm from '@/components/Auth/LoginForm'

const LoginPage = () => {
  const { data: session, status } = useSession()

  if (status === 'authenticated') {
    return <p>Signed in as {session.user.email}</p>
  }

  return (
    <div>
      <LoginForm />
    </div>
  )
}

export default LoginPage
