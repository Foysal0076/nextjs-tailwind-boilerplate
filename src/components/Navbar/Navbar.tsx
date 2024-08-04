import Link from 'next/link'

import NavbarAuthMenu from '@/components/Auth/NavbarAuthMenu'
import ThemeSwitcher from '@/components/Common/ThemeSwitcher'
import { NavigationDrawerMenu } from '@/components/Navbar/NavigationDrawer'

export const Navbar = () => {
  return (
    <header
      className='fixed top-0 z-40 flex h-[3.75rem] w-full items-center border-b border-surface-100/70 bg-surface-100/70 backdrop-blur-3xl md:h-[4.5rem]'
      aria-label='Main navigation'>
      <nav
        className='flex w-full items-center justify-between px-4 md:px-8'
        aria-label='Main navigation'>
        <div className='tracking-tighter'>
          <Link href='/' className='h5 font-extrabold text-primary-400'>
            Home
          </Link>
        </div>
        <div className='flex gap-4'>
          <ThemeSwitcher />
          <NavbarAuthMenu />
          <div className='flex md:hidden'>
            <NavigationDrawerMenu />
          </div>
        </div>
      </nav>
    </header>
  )
}
