import ThemeSwitcher from '@/components/Common/ThemeSwitcher'

export const Navbar = () => {
  return (
    <div className='bg-neutral-0 py-4 shadow-sm'>
      <div className='container'>
        <div className='flex justify-end'>
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  )
}
