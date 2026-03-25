import React from 'react'

const Navbar = (theme , setTheme) => {
    return (
        <div className='flex justify-between items-center
            px-4 sm:px-12 lg:px-24 xl:px-40 sticky top-0
            z-20 backdrop-blur-xl font-medium bg-white/50 * 
            dark:bg-gray-900/70'>
            <img src="{theme === 'dark' ?}" alt="" />
        </div>
    )
}

export default Navbar