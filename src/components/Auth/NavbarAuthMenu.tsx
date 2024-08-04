'use client'

import { signOut, useSession } from 'next-auth/react'

import { createInitials } from '@/utils/helpers'

const NavbarAuthMenu = () => {
  const { data: session, status } = useSession()
  const isLogged = status === 'authenticated'
  // const isNotLogged = status === 'unauthenticated'
  const user = session?.user
  const initial = createInitials(user?.name ?? '')

  const handleLogout = () => {
    signOut({ callbackUrl: '/' })
  }

  return (
    <>
      {isLogged ? (
        <div className='flex gap-2'>
          <div
            className={`flex h-8 w-8 items-center justify-center rounded-full border-neutral-100 bg-neutral-800 text-base font-bold text-neutral-0 md:h-9 md:w-9`}>
            <span className='text-sm font-bold text-neutral-0 md:text-base'>
              {initial}
            </span>
          </div>
          <button onClick={handleLogout} className='text-neutral-900'>
            Logout
          </button>
        </div>
      ) : (
        <a href='/auth/login' className='text-neutral-900'>
          Login
        </a>
      )}
    </>
  )
}

export default NavbarAuthMenu
