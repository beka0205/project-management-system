import React from 'react'
import Team from '../assets/Vector.svg'
import Member from '../assets/Team-icon.svg'
import Role from '../assets/Roles.svg'
import { FiHome } from "react-icons/fi";
import { FaProjectDiagram } from "react-icons/fa";
import { FaClipboardQuestion } from "react-icons/fa6";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='fixed top-[90px] md:w-[280px] text-[#172B4D] p-3 md:px-6 h-[650px] border-r-2'>
        <ul className='md:w-[240px] p-0 md:px-auto items-center'>
          <Link to="/">
            <li className="list">
              <FiHome className=" w-7 h-7 mx-4 md:w-7 md:h-7 md:ml-7 "/>
              <p className='hidden md:flex md:ml-4'>Home</p>
            </li>
          </Link> 
          <Link to="/projects">
            <li className="list">
              <FaProjectDiagram className=" w-7 h-7 mx-4 md:w-7 md:h-7 md:ml-7"/>
              <p className='hidden md:flex md:ml-4'>Projects</p>
            </li>
          </Link>
          <Link to="/requests">
            <li className="list">
              <FaClipboardQuestion className="w-7 h-7 mx-4 md:w-7 md:h-7 md:ml-7"/>
              <p className='hidden md:flex md:ml-4'>Project Requests</p>
            </li> 
          </Link>
          <Link to="/teams">
            <li className="list">
              <img className="w-7 h-7 mx-4 md:w-7 md:h-7 md:ml-7" src={Team} alt="/" />
              <p className='hidden md:flex md:ml-4'>Teams</p>
            </li> 
          </Link>
          <Link to="/members">
            <li className="list">
              <img className="w-7 h-7 mx-4 md:w-7 md:h-7 md:ml-7" src={Member} alt="/" />
              <p className='hidden md:flex md:ml-4'>Members</p>
            </li>
          </Link>
          <Link to="/roles">
            <li className="list">
              <img className="w-7 h-7 mx-4 md:w-7 md:h-7 md:ml-7" src={Role} alt="/" />
              <p className='hidden md:flex md:ml-4'>Roles</p>
            </li>
          </Link>
          <Link to="/structure">
            <li className="list">
              <FaProjectDiagram className="w-7 h-7 mx-4 md:w-7 md:h-7 md:ml-7"/>
              <p className='hidden md:flex md:ml-4'>Structure</p>
            </li>
          </Link>
          <Link to="/trash">
            <li className="list">
              <FaRegTrashAlt className="w-7 h-7 mx-4 md:w-7 md:h-7 md:ml-7"/>
              <p className='hidden md:flex md:ml-4'>Trash</p>
            </li>
          </Link>
          <Link to="/setting">
            <li className="list">
              <IoMdSettings className="w-7 h-7 mx-4 md:w-7 md:h-7 md:ml-7"/>
              <p className='hidden md:flex md:ml-4'>Settings</p>
            </li>
          </Link>
        </ul>
    </div>
  )
}

export default Sidebar