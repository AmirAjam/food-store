import icons from "@/icons"

const Header = ({openMobileNav}) => {
    const{Menu,Search,Notification} = icons
  return (
    <header className='mt-5'>
      <div className='bg-gray-300 py-4 px-4 rounded-lg flex items-center justify-between md:px-5'>
        <div className='flex gap-5 items-center'>
          <Menu className='text-2xl lg:hidden' onClick={openMobileNav}/>
          <Search className='text-2xl' />
          <span className='hidden sm:block'>جستجو(/+Ctrl)</span>
        </div>
        <div className='flex gap-5 items-center'>
          {/* <div>
            <Sunny className='text-2xl' />
            <Moon className='text-xl hidden' />
          </div> */}
          <div className='relative'>
            <span className='absolute rounded-full bg-red-500 text-white size-4 flex 
              justify-center items-center text-xs bottom-3.5 left-3'>۵</span>
            <Notification className='text-3xl' />
          </div>
          <div className='size-10 rounded-full overflow-hidden'>
            <img src="/public/images/user/user.jpg" alt="" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header