'use client'

import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'

import Spinner from '@/components/Common/Spinner'

const UserDetailsPage = () => {
  const [userDetails, setUserDetails] = useState<any>(null)
  const { data: session, status } = useSession()
  const isLoading = status === 'loading'

  useEffect(() => {
    if (status === 'authenticated') {
      const fetchData = async () => {
        const res = await fetch('/api/user', {
          headers: {
            Authorization: `Bearer ${session.accessToken}`,
          },
        })
        if (res.ok) {
          const data = await res.json()
          setUserDetails(data)
        }
      }
      fetchData()
    }
  }, [status])
  return (
    <div className='container py-20'>
      {isLoading && (
        <div className='my-20 flex items-center justify-center'>
          <Spinner className='text-primary-400' />
        </div>
      )}
      {userDetails && (
        <div>
          <h1 className='mb-4 text-center text-xl lg:text-display-xs'>
            <span className='text-info-400'> {userDetails?.name}</span>
          </h1>
          <div className='mb-2 text-center font-semibold'>
            Id: {userDetails?.id}
          </div>
          <div className='mb-2 text-center font-semibold'>
            Email: {userDetails?.email}
          </div>
        </div>
      )}
    </div>
  )
}

export default UserDetailsPage
