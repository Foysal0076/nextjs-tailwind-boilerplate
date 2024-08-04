import Link from 'next/link'

import NavbarAuthMenu from '@/components/Auth/NavbarAuthMenu'
import ThemeSwitcher from '@/components/Common/ThemeSwitcher'

export const Navbar = () => {
  return (
    <div className='border-b border-slate-900/10 bg-surface-100/50 py-4 dark:border-slate-300/10'>
      <div className='container'>
        <div className='flex items-center justify-between'>
          <Link href='/' className='flex gap-1'>
            <h1 className='text-lg font-bold uppercase leading-4 tracking-normal'>
              Home
            </h1>
          </Link>
          <div className='flex space-x-4'>
            <ThemeSwitcher />
            <NavbarAuthMenu />
          </div>
        </div>
      </div>
    </div>
  )
}
