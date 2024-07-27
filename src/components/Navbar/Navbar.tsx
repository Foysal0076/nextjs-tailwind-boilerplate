import ThemeSwitcher from '@/components/Common/ThemeSwitcher'

export const Navbar = () => {
  return (
    <div className='border-b border-slate-900/10 bg-surface-100/50 py-4 dark:border-slate-300/10'>
      <div className='container'>
        <div className='flex justify-end'>
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  )
}
