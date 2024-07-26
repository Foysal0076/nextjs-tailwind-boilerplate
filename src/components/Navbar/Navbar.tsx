import ThemeSwitcher from '@/components/Common/ThemeSwitcher'

export const Navbar = () => {
  return (
    <div className='bg-neutral-0 py-4 shadow-sm dark:border-b dark:border-b-neutral-30'>
      <div className='container'>
        <div className='flex justify-end'>
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  )
}
