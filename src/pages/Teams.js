import React from 'react'
import Footer from '../components/Footer'
import { SlOptions } from "react-icons/sl";
import { IoMdArrowDropdown } from "react-icons/io";
import Mem1 from '../assets/members.svg';

const Teams = () => {
  return (
    <div className='w-full mt-20 ml-[80px] md:ml-[270px] lg:ml-[300px] max-w-[1160px]'>
        <div className='my-4 ml-6 mr-12'>
          <h1 className='py-4 text-2xl font-bold'>Teams</h1>
          <div className='grid gap-8'>
            <div className='flex justify-between'>
              <div className='flex items-center justify-center w-[340px] h-[230px] shadow-lg rounded border-2 p-4 '>
                <p className='font-medium '>Create New Team</p>
              </div>
              <div className='card'>
                <div className='flex justify-between items-center'>
                  <p className='font-semibold '>Project Managers</p>
                  <SlOptions />
                </div>
                <p className='mt-2 text-gray-500 w-[90%]'>A short description about the team or like what the aim of this group is goes here.</p>
                <div className='flex justify-between items-center mt-4'>
                  <div className='flex'>
                    <p className='font-medium text-sm mr-3'>Members</p>
                    <p className='text-sm font-medium bg-gray-200 w-6 h-6 rounded-2xl text-center'>3</p>
                  </div>
                  <IoMdArrowDropdown />
                </div>
                <img className='w-[120px] h-[40px]' src={Mem1} alt='/' />
              </div>
              <div className='card'>
                <div className='flex justify-between items-center'>
                  <p className='font-semibold '>Backend Developers</p>
                  <SlOptions />
                </div>
                <p className='mt-2 text-gray-500 w-[90%]'>A short description about the team or like what the aim of this group is goes here.</p>
                <div className='flex justify-between items-center mt-4'>
                  <div className='flex'>
                    <p className='font-medium text-sm mr-3'>Members</p>
                    <p className='text-sm font-medium bg-gray-200 w-6 h-6 rounded-2xl text-center'>3</p>
                  </div>
                  <IoMdArrowDropdown />
                </div>
                <img className='w-[120px] h-[40px]' src={Mem1} alt='/' />
              </div>
            </div>
            <div className='flex justify-between'>
            <div className='card'>
                <div className='flex justify-between items-center'>
                  <p className='font-semibold '>Frontend Developers</p>
                  <SlOptions />
                </div>
                <p className='mt-2 text-gray-500 w-[90%]'>A short description about the team or like what the aim of this group is goes here.</p>
                <div className='flex justify-between items-center mt-4'>
                  <div className='flex'>
                    <p className='font-medium text-sm mr-3'>Members</p>
                    <p className='text-sm font-medium bg-gray-200 w-6 h-6 rounded-2xl text-center'>3</p>
                  </div>
                  <IoMdArrowDropdown />
                </div>
                <img className='w-[120px] h-[40px]' src={Mem1} alt='/' />
              </div>
              <div className='card'>
                <div className='flex justify-between items-center'>
                  <p className='font-semibold '>UI/UX Designers</p>
                  <SlOptions />
                </div>
                <p className='mt-2 text-gray-500 w-[90%]'>A short description about the team or like what the aim of this group is goes here.</p>
                <div className='flex justify-between items-center mt-4'>
                  <div className='flex'>
                    <p className='font-medium text-sm mr-3'>Members</p>
                    <p className='text-sm font-medium bg-gray-200 w-6 h-6 rounded-2xl text-center'>3</p>
                  </div>
                  <IoMdArrowDropdown />
                </div>
                <img className='w-[120px] h-[40px]' src={Mem1} alt='/' />
              </div>
              <div className='card'>
                <div className='flex justify-between items-center'>
                  <p className='font-semibold '>Testers</p>
                  <SlOptions />
                </div>
                <p className='mt-2 text-gray-500 w-[90%]'>A short description about the team or like what the aim of this group is goes here.</p>
                <div className='flex justify-between items-center mt-4'>
                  <div className='flex'>
                    <p className='font-medium text-sm mr-3'>Members</p>
                    <p className='text-sm font-medium bg-gray-200 w-6 h-6 rounded-2xl text-center'>3</p>
                  </div>
                  <IoMdArrowDropdown />
                </div>
                <img className='w-[120px] h-[40px]' src={Mem1} alt='/' />
              </div>
            </div>
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default Teams