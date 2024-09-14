import React from 'react'
import Footer from '../components/Footer';

const Projects = () => {
  return (
    <div className='w-full mt-20  ml-[80px] md:ml-[270px] lg:ml-[300px] max-w-[1160px]'>
        <div className='my-4 ml-6 mr-12'>
          <h1 className='py-4 text-2xl font-bold'>Projects</h1>
          <div className='h-[400px] shadow-md border-t-2 rounded mb-6'>
            <div className='flex justify-between p-3'>
              <div className='flex '>
                <p className='p-2 text-[#0F69D8]'>All</p>
                <p className='p-2 text-[#909090]'>Completed</p>
                <p className='p-2 text-[#909090]'>Process</p>
                <p className='p-2 text-[#909090]'>Canceled</p>
              </div>
              <button className='p-3  bg-[#0C8CE9] text-white rounded-md'>+ Create Project</button>
            </div>
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default Projects