import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { Link, animateScroll as scroll, } from 'react-scroll'

const Navabar = () => {

    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle(!toggle)
    }

  return (
    <div className='max-w-[95%] m-auto py-4 border-b-[1px] border-white fixed top-0 left-0 right-0 bg-black/90 z-20'>
        <ul className='hidden md:flex justify-end font-bold gap-8 cursor-pointer'>
            <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
            <p>|</p>
            <li><Link to="about" smooth={true} duration={500}>About</Link></li>
            <p>|</p>
            <li><Link to="knwoledge" smooth={true} duration={500}>Knowledge</Link></li>
            <p>|</p>
            <li><Link to="career" smooth={true} duration={500}>Career</Link></li>
        </ul>
        <div className='md:hidden flex justify-end mr-8'>
            {!toggle ? (
                <AiOutlineMenu onClick={handleToggle} className='text-2xl cursor-pointer' />
            ) : (
                <AiOutlineClose onClick={handleToggle} className='text-2xl cursor-pointer z-20' />
            )}   
        </div>
        {
            toggle ? (
                <div className='absolute top-0 right-0 w-full h-screen z-10 bg-black flex items-center justify-center'>
                    <ul className='flex flex-col justify-center items-center font-bold gap-8 text-3xl cursor-pointer'>
                    <li><Link onClick={handleToggle} to="home" smooth={true} duration={500}>Home</Link></li>
                    <li><Link onClick={handleToggle} to="about" smooth={true} duration={500}>About</Link></li>
                    <li><Link onClick={handleToggle} to="knwoledge" smooth={true} duration={500}>Knowledge</Link></li>
                    <li><Link onClick={handleToggle} to="career" smooth={true} duration={500}>Career</Link></li>
                    </ul>

            </div>
            ) : (
                <></>
            )
        }
    </div>
  )
}

export default Navabar
