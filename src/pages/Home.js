import React from 'react'
import TotalIcon from '../assets/total_icon.svg'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='w-full mt-20 ml-[80px] md:ml-[270px] lg:ml-[300px] max-w-[1160px]'>
        <div className='my-8 ml-6 mr-12'>
          <div className='flex justify-between mb-6 gap-2 '>
            <div className='stats'>
              <img className='w-[30px] h-[30px] md:w-[40px] md:h-[40px]' src={TotalIcon} alt='/' />
              <div className=''>
                <p className='hidden md:grid text-white'>Total Projects</p>
                <p className='text-white'>64</p>
              </div>
            </div>
            <div className='stats'>
              <img className='w-[30px] h-[30px] md:w-[40px] md:h-[40px]' src={TotalIcon} alt='/' />
              <div className=''>
                <p className='hidden md:grid text-white'>Completed Projects</p>
                <p className='text-white'>43</p>
              </div>
            </div>
            <div className='stats'>
              <img className='w-[30px] h-[30px] md:w-[40px] md:h-[40px]' src={TotalIcon} alt='/' />
              <div className=''>
                <p className='hidden md:grid text-white'>Inprogress Projects</p>
                <p className='text-white'>32</p>
              </div>
            </div>
            <div className='stats'>
              <img className='w-[30px] h-[30px] md:w-[40px] md:h-[40px]' src={TotalIcon} alt='/' />
              <div className=''>
                <p className='hidden md:grid text-white'>Coming Projects</p>
                <p className='text-white'>18</p>
              </div>
            </div>
          </div>
          <div className='h-[400px] shadow-md border-t-2 rounded mb-6'>

          </div>
          <div className='flex gap-8 mb-6'>
            <div className='h-[400px] w-[80%] shadow-md border-t-2 rounded'>

            </div>
            <div className='h-[400px] w-[50%] shadow-md border-t-2 rounded'>

            </div>
          </div>
          <div className='h-[400px] bg-[#f7f6f3] shadow-md border-t-2 rounded mb-6'>

          </div>
        </div>
        <Footer />
      </div>
      
  )
}

export default Home