'use client'

import Link from 'next/link'
import { useSession } from 'next-auth/react'

import Spinner from '@/components/Common/Spinner'

const DashboardHomePage = () => {
  const session = useSession()
  const isLoading = session.status === 'loading'
  const isLogged = session.status === 'authenticated'
  const isNotLoggedIn = session.status === 'unauthenticated'
  const user = session.data?.user
  // console.log(session)
  // if (isNotLoggedIn) return redirect('/')

  return (
    <div className='py-20'>
      {isLoading && (
        <div className='my-20 flex items-center justify-center'>
          <Spinner className='text-primary-400' />
        </div>
      )}
      {isLogged && (
        <div>
          <h1 className='text-center text-xl lg:text-display-xs'>
            Welcome <span className='text-info-400'> {user?.name}</span>
          </h1>
        </div>
      )}
      <div className='mt-10 flex justify-center'>
        <Link href='/user' className='w-full text-center text-lg font-semibold'>
          User Details
        </Link>
      </div>
    </div>
  )
}

export default DashboardHomePage
