import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { HiXMark } from "react-icons/hi2";

const Navbar = () => {
    const [open,setOpen]=useState(false)
    const handleClick=()=>{
        setOpen(!open)
    }
  return (
    <>
<header  >
    <nav className='flex justify-between items-center py-4 px-2 bg-gray-200' >
        <h1 className='text-2xl font-bold text-blue-600 '>Dropify</h1>
        <div className=' hidden md:flex gap-5  ' >
        <a href="/" className="text-blue-500 font-bold  hover:text-black transition duration-300">Home</a>
            <a href="/Product" className="text-blue-500 font-bold  hover:text-black transition duration-300">Product</a>
            <a href="/about" className="text-blue-500 font-bold  hover:text-black transition duration-300">About</a>
            <a href="/request" className="text-blue-500 font-bold  hover:text-black transition duration-300">Request Product</a>
        </div>
        <div className='hidden md:flex gap-2' >
        <button className='bg-blue-600 text-white p-2 rounded-md'>Login</button>
        <button className='bg-blue-600 text-white p-2 rounded-md'>Register</button>
        </div>
        <button className='md:hidden' onClick={handleClick}>
        {open?<HiXMark/>:<FaBars/>}

        </button>
    </nav>
            {/* mobile */}
            {open &&(
            <div className="md:hidden flex flex-col text-center  items-center py-2  ">
          <a href="/" className="text-gray-700 py-1 hover:text-pink-500 transition duration-300">Home</a>
            <a href="/Product" className="text-gray-700 py-1 hover:text-pink-500 transition duration-300">Product</a>
            <a href="/about" className="text-gray-700 py-1 hover:text-pink-500 transition duration-300">About</a>
            <a href="/request" className="text-gray-700 py-1 hover:text-pink-500 transition duration-300">Request Product</a>
            <div className='flex md:hidden justify-center items-center py-2' >
        <button className='bg-blue-600 mx-2 text-white p-2 rounded-md'>Login</button>
        <button className='bg-blue-600 mx-2 text-white p-2 rounded-md'>Register</button>
        </div>
            </div>
            
    
            )}


</header>
    </>
  )
}

export default Navbar