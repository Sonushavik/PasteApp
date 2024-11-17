import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex flex-row gap-10 bg-blue-100 p-2 rounded-md w-[600px] sm:w-[500px] '>
      <NavLink to="/">
            Home
      </NavLink>
      <NavLink to="/pastes">
          Saved Note
      </NavLink >
    </div>
  )
}

export default Navbar
