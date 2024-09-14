import React from 'react'
import Logo from '../assets/logo.avif'
import Pic from '../assets/pic.png'
import { FaBell, FaSearch } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-white text-[#172B4D] p-0 z-10">
        <div className='relative'>
            <div className='flex items-center justify-between shadow-md px-4 md:px-16  font-sans '>
                <div className='py-2 sm:grid sm:gap-y-2 sm:py-4 place-items-center sm:items-center md:flex md:py-4 gap-4 items-center'>
                    <img className='w-10 mx-auto' src={Logo} alt="" />
                    <p className='font-bold'>EAII-PMS</p>
                </div>
                <div className='flex items-center gap-6'>
                    <div className='relative'>
                        <input className='border h-10 rounded-md pl-10 pr-4 py-2 w-[50px] md:w-[110px] lg:w-[250px] ' type="text" placeholder='Search' />
                        <FaSearch className="absolute top-1/2 left-5 md:left-3 transform -translate-y-1/2 text-gray-500" />
                    </div>
                    <FaBell className='text-gray-600 w-6' />
                    <div className='flex items-center'>
                        <img className='p-2 w-16' src={Pic} alt="" />
                        <div className='p-2 '>
                            <p className='font-bold max-w[100px] md:text-md '>Bereket Nigussie</p>
                            <p>Admin</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Navbar