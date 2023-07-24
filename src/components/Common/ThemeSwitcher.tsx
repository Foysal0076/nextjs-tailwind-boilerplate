'use client'

import clsx from 'clsx'
import { useEffect, useState } from 'react'

import { ToggleDarkIcon, ToggleLightIcon } from '@/components/Common/Icons'
import { LOCAL_STORAGE_THEME_KEY } from '@/utils/constants/common'
import { getLocalStorageItem, setLocalStorageItem } from '@/utils/helpers'

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState('')

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme((prevValue) => (prevValue === 'light' ? 'dark' : 'light'))
      setLocalStorageItem(LOCAL_STORAGE_THEME_KEY, 'light')
      document.documentElement.classList.remove('dark')
    } else {
      setTheme((prevValue) => (prevValue === 'dark' ? 'light' : 'dark'))
      setLocalStorageItem(LOCAL_STORAGE_THEME_KEY, 'dark')
      document.documentElement.classList.add('dark')
    }
  }

  useEffect(() => {
    if (
      getLocalStorageItem(LOCAL_STORAGE_THEME_KEY) === 'dark' ||
      (!(LOCAL_STORAGE_THEME_KEY in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setTheme('dark')
      document.documentElement.classList.add('dark')
    } else {
      setTheme('light')
      document.documentElement.classList.remove('dark')
    }
  }, [])

  return (
    <button
      id='theme-toggle'
      type='button'
      onClick={toggleTheme}
      className='text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5'>
      <ToggleDarkIcon
        className={clsx(`w-6 h-6 text-primary-900`, {
          hidden: theme === 'dark',
          block: theme === 'light',
        })}
      />
      <ToggleLightIcon
        className={clsx(`w-6 h-6 text-warning-500`, {
          hidden: theme === 'light',
          block: theme === 'dark',
        })}
      />
    </button>
  )
}

export default ThemeSwitcher
