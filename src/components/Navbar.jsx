import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoMdHome } from "react-icons/io";
import { FaNoteSticky } from "react-icons/fa6";



const Navbar = () => {
  return (
    <div className='flex flex-row gap-10  p-2 rounded-md min-w-[600px] w-[100%]  bg-gradient-to-r from-blue-100 to-blue-950 mt-11' >
      <NavLink to="/" className={({ isActive }) => 
          `flex items-center gap-2 text-gray-700 hover:text-blue-600 ${
            isActive ? 'font-bold text-blue-600' : ''
          }`
        }>
      <IoMdHome />
            <span>Home</span>
      </NavLink>
      <NavLink to="/pastes" className={({ isActive }) => 
          `flex items-center gap-2 text-gray-700 hover:text-blue-600 ${
            isActive ? 'font-bold text-blue-600' : ''
          }`
        }>
        <FaNoteSticky />
          Saved Note
      </NavLink >
    </div>
  )
}

export default Navbar
