import ThemeSwitcher from '@/components/Common/ThemeSwitcher'

export const Navbar = () => {
  return (
    <div className='bg-primary-0 shadow-sm dark:bg-info-900/20 dark:border-b border-neutral-500 py-4'>
      <div className='container'>
        <ThemeSwitcher />
      </div>
    </div>
  )
}
