'use client'
import Link from 'next/link'
import React from 'react'

const RegistrationForm = () => {
  //add onchange and onsubmit functions

  const onsubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    //get the form values
    const email = e.currentTarget.email.value
    const password = e.currentTarget.password.value
    //call the register function
    console.log(email, password)
  }

  return (
    <div className='flex h-[80vh] flex-col items-center justify-center'>
      <div className='w-full rounded-lg border bg-surface-0 p-8 shadow-md dark:bg-surface-100 md:max-w-96'>
        <h2 className='mb-4 text-2xl font-bold'>Register</h2>
        <form className='flex flex-col' onSubmit={onsubmit}>
          <div className='mb-4'>
            <label
              htmlFor='email'
              className='mb-2 block font-bold text-neutral-700'>
              Email
            </label>
            <input
              type='email'
              id='email'
              className='w-full rounded border border-neutral-300 bg-surface-50 px-3 py-2 focus:border-primary-500 focus:outline-none dark:bg-surface-200'
              placeholder='Enter your email'
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='password'
              className='mb-2 block font-bold text-neutral-700'>
              Password
            </label>
            <input
              type='password'
              id='password'
              className='w-full rounded border border-neutral-300 bg-surface-50 px-3 py-2 focus:border-primary-500 focus:outline-none dark:bg-surface-200'
              placeholder='Enter your password'
            />
          </div>
          <button
            type='submit'
            className='mt-2 w-full rounded bg-primary-500 px-4 py-2 text-white transition-colors duration-300 hover:bg-primary-400 active:bg-primary-600'>
            Register
          </button>
          <Link
            href='/auth/login'
            className='mx-auto mt-6 text-sm hover:underline'>
            Login
          </Link>
        </form>
      </div>
    </div>
  )
}

export default RegistrationForm
