import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="header fixed top-0 left-0 right-0 bg-gray-800 p-4 z-10">
        <NavLink to="/" className="w-40 h-10 rounded-lg bg-white 
        items-center justify-center flex font-bold shadow-lg">
            <p className="blue-gradient_text">AnaviaFer</p>
        </NavLink>
        <nav className="flex text-lg gap-7 font-medium">
            <NavLink to="/about" className={({ isActive }) => isActive ?
            'text-blue-500' : 'text-gold-100'}>
                About
            </NavLink>
            <NavLink to="/projects" className={({ isActive }) => isActive ?
            'text-blue-500' : 'text-gold-100'}>
                Projects
            </NavLink>
        </nav>
    </header>
  )
}

export default Navbar