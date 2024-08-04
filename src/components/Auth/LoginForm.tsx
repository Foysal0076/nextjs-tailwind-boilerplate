'use client'
import Link from 'next/link'
import { signIn } from 'next-auth/react'

const LoginForm = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const email = e.currentTarget.email.value
    const password = e.currentTarget.password.value
    await signIn('credentials', {
      email,
      password,
      redirect: true,
      callbackUrl: '/dashboard',
    })
  }

  return (
    <div className='flex h-[80vh] items-center justify-center'>
      <form
        className='w-full rounded-lg border bg-surface-0 p-4 shadow-sm dark:bg-surface-100 md:max-w-96 md:p-8'
        onSubmit={handleSubmit}>
        <h2 className='mb-4 text-2xl font-bold'>Login</h2>
        <div className='mb-4'>
          <label
            className='mb-2 block font-bold text-neutral-700'
            htmlFor='email'>
            Email
          </label>
          <input
            type='email'
            id='email'
            className='w-full rounded border border-neutral-300 bg-surface-50 px-3 py-2 text-neutral-900 focus:border-primary-500 focus:outline-none dark:bg-surface-200'
            placeholder='Enter your email'
            defaultValue='test@foy.com'
          />
        </div>
        <div className='mb-4'>
          <label
            className='mb-2 block font-bold text-neutral-700'
            htmlFor='password'>
            Password
          </label>
          <input
            type='password'
            id='password'
            className='w-full rounded border border-neutral-300 bg-surface-50 px-3 py-2 text-neutral-900 focus:border-primary-500 focus:outline-none dark:bg-surface-200'
            placeholder='Enter your password'
          />
        </div>
        <div className='flex flex-col items-center justify-center'>
          <button
            type='submit'
            className='mt-2 w-full rounded bg-primary-500 px-4 py-2 text-white transition-colors duration-300 hover:bg-primary-400 active:bg-primary-600'>
            Log In
          </button>
          <Link href='/auth/register' className='mt-6 text-sm hover:underline'>
            Register
          </Link>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
