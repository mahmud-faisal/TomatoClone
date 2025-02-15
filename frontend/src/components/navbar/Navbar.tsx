import React, { useState } from 'react'
import { assets } from '../../assets/frontend_assets/assets'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="flex justify-between items-center mx-auto w-4/5 py-4">
        
        {/* Logo */}
        <img src={assets.logo} alt="Logo" className="w-32" />

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 text-lg">
          <li className="hover:text-red-500 cursor-pointer">Home</li>
          <li className="hover:text-red-500 cursor-pointer">Menu</li>
          <li className="hover:text-red-500 cursor-pointer">Mobile App</li>
          <li className="hover:text-red-500 cursor-pointer">Contact Us</li>
        </ul>

        {/* Right Side: Search, Cart, and Sign-In */}
        <div className="hidden md:flex items-center space-x-4">
          <img src={assets.search_icon} alt="Search" className="w-6 cursor-pointer" />
          <div className="relative cursor-pointer">
            <img src={assets.basket_icon} alt="Basket" className="w-6" />
            <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-4 h-4 flex justify-center items-center rounded-full">
              3
            </div>
          </div>
          <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">Sign In</button>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setNavOpen(!navOpen)} className="md:hidden">
          {navOpen ? (
            <AiOutlineClose size={30} className="text-red-500" />
          ) : (
            <AiOutlineMenu size={30} className="text-red-500" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {navOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md">
          <ul className="flex flex-col items-center space-y-4 py-4 text-lg">
            <li className="hover:text-red-500 cursor-pointer">Home</li>
            <li className="hover:text-red-500 cursor-pointer">Menu</li>
            <li className="hover:text-red-500 cursor-pointer">Mobile App</li>
            <li className="hover:text-red-500 cursor-pointer">Contact Us</li>
            <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
              Sign In
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
