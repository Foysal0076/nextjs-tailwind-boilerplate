'use client'

import clsx from 'clsx'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

import { ToggleDarkIcon, ToggleLightIcon } from '@/components/Common/Icons'

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  const toggleTheme = () => {
    if (resolvedTheme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  useEffect(() => setMounted(true), [])

  if (!mounted) return <div className='h-6 w-6' />

  return (
    <button onClick={toggleTheme} className='block'>
      <ToggleDarkIcon
        width={24}
        className={clsx(`text-primary-900`, {
          hidden: resolvedTheme === 'dark',
          block: resolvedTheme === 'light',
        })}
      />
      <ToggleLightIcon
        width={24}
        className={clsx(`text-warning-500`, {
          hidden: resolvedTheme === 'light',
          block: resolvedTheme === 'dark',
        })}
      />
    </button>
  )
}

export default ThemeSwitcher
