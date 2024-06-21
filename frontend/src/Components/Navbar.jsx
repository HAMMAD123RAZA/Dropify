import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { HiXMark } from "react-icons/hi2";
import {BrowserRouter as Router ,Route,Routes, Navigate,Link} from "react-router-dom"
import { IoCart } from "react-icons/io5";
import { useSelector } from 'react-redux';

const Navbar = () => {
  const items = useSelector((state) => state.cart.items);
    const [open,setOpen]=useState(false)
    const handleClick=()=>{
        setOpen(!open)
    }
  return (
    <>
<header  >
    <nav className='flex justify-between items-center py-4 px-2 bg-gray-200' >
        <a className='text-2xl font-bold text-blue-600  hover:text-blue-400' href='/' >Dropify</a>
        <div className=' hidden md:flex gap-5  ' >
        <a href="/" className="text-blue-500 font-bold  hover:text-blue-300 transition duration-300">Home</a>
           
            <a href="/tank" className="text-blue-500 font-bold  hover:text-blue-300 transition duration-300">Tank</a>
            <a href="/bottle" className="text-blue-500 font-bold  hover:text-blue-300 transition duration-300">Bottle</a>
            {/* <a href="/suzuki" className="text-blue-500 font-bold  hover:text-blue-300 transition duration-300">Suzuki</a> */}
             <a href="/gallon" className="text-blue-500 font-bold  hover:text-blue-300 transition duration-300">Gallon</a>
            <a href="/request" className="text-blue-500 font-bold  hover:text-blue-300 transition duration-300">Request Product</a>
        </div>
        <div className='hidden md:flex items-center  gap-4 hover:text-blue-400 text-blue-600' >
        <Link to="/login" className="text-blue-500 font-bold  hover:text-blue-300 transition duration-300" >Login</Link>

        <Link to="/cart" >   {items.length}     <IoCart size={38} />
</Link>

      {/* <Link to="/register" ><button  className='bg-blue-600 hover:bg-white hover:text-blue-700 font-bold text-white p-2 rounded-md'>Register</button></Link>   */}
        </div>
        <button className='md:hidden' onClick={handleClick}>
        {open?<HiXMark/>:<FaBars/>}

        </button>
    </nav>
            {/* mobile */}
            {open &&(
            <div className="md:hidden flex flex-col text-center  items-center py-2  ">
          <a href="/" className="text-gray-700 py-1 hover:text-pink-500 transition duration-300">Home</a>
            <a href="/request" className="text-gray-700 py-1 hover:text-pink-500 transition duration-300">Request Product</a>
            <a href="/tank" className="text-gray-700 py-1 hover:text-pink-500 transition duration-300">Tank</a>
            {/* <a href="/suzuki" className="text-gray-700 py-1 hover:text-pink-500 transition duration-300">Suzuki</a> */}
            <a href="/bottle" className="text-gray-700 py-1 hover:text-pink-500 transition duration-300">Bottle</a>
            <a href="/gallon" className="text-gray-700 py-1 hover:text-pink-500 transition duration-300">Gallon</a>

            <div className='flex md:hidden justify-center items-center py-2hover:text-blue-400 text-blue-600'  >
            <Link to="/cart" >{items.length}<IoCart />
</Link>

            <Link to="/login" className="text-blue-500 font-bold  hover:text-blue-300 transition duration-300">     Login</Link>
      {/* <Link to="/register" ><button  className='bg-blue-600 hover:bg-white hover:text-blue-700 font-bold text-white p-2 rounded-md'>Register</button></Link>   */}
        </div>
            </div>
            )}
</header>
    </>
  )
}

export default Navbar