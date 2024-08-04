'use client'
import { clsx } from 'clsx'

type Props = {
  isOpen: boolean
  toggleMenu: () => void
}

export const HamburgerMenu = ({ isOpen, toggleMenu }: Props) => {
  return (
    <button
      className='flex h-3.5 w-6 flex-col items-center justify-between'
      onClick={toggleMenu}
      aria-expanded={isOpen}
      aria-controls='navigation-drawer'
      aria-label='Toggle navigation drawer menu'>
      <span
        className={clsx(
          'block h-0.5 w-6 bg-surface-600 transition-transform duration-300',
          { 'translate-y-2 rotate-45': isOpen }
        )}
      />
      <span
        className={clsx(
          'block h-0.5 w-6 bg-surface-600 transition-opacity duration-300',
          { 'opacity-0': isOpen, 'opacity-100': !isOpen }
        )}
      />
      <span
        className={clsx(
          'block h-0.5 w-6 bg-surface-600 transition-transform duration-300',
          { '-translate-y-1 -rotate-45': isOpen }
        )}
      />
    </button>
  )
}
