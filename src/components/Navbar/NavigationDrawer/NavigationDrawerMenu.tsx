'use client'

import { useState } from 'react'

import {
  DrawerContent,
  HamburgerMenu,
} from '@/components/Navbar/NavigationDrawer'

export const NavigationDrawerMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='relative my-auto'>
      <HamburgerMenu isOpen={isOpen} toggleMenu={toggleMenu} />
      <div
        id='navigation-drawer'
        className={`fixed right-0 top-[3.75rem] h-[calc(100vh-3.75rem)] w-full transform bg-surface-0 shadow-lg backdrop-blur-3xl transition-transform duration-500 dark:bg-surface-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
        <DrawerContent />
      </div>
    </div>
  )
}
