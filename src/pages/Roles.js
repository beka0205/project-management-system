import React from 'react'
import Footer from '../components/Footer'
import { FaSearch } from 'react-icons/fa';

const Roles = () => {
  return (
    <div className='w-full mt-20 ml-[80px] md:ml-[270px] lg:ml-[300px] max-w-[1160px]'>
        <div className='my-4 ml-6 mr-12'>
          <h1 className='py-4 text-2xl font-bold'>Roles</h1>
          <div className='h-[400px] shadow-md border-t-2 rounded mb-6'>
            <div className='flex justify-between p-3'>
              <div className='relative'>
                <input className='border h-10 rounded-md pl-10 pr-4 py-2 w-[50px] md:w-[110px] lg:w-[250px] ' type="text" placeholder='Search role' />
                <FaSearch className="absolute top-1/2 left-5 md:left-3 transform -translate-y-1/2 text-gray-500" />
              </div>
              <button className='p-3  bg-[#0C8CE9] text-white rounded-md'>Add New Role</button>
            </div>
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default Roles