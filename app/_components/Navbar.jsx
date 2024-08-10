import React from 'react'
import { MdOutlineMenu } from "react-icons/md";
import { FiHelpCircle } from "react-icons/fi";
import { VscGraph } from "react-icons/vsc";
import { IoMdSettings } from "react-icons/io";

const ICON_SIZE = 35;

const Navbar = () => {
  return (
    <nav className='flex shadow-md w-full justify-around h-20'>
        <div className='menu flex my-auto'>
            <MdOutlineMenu size={ICON_SIZE} className='mx-4 hover:cursor-pointer'/>
            <FiHelpCircle size={ICON_SIZE} className='hover:cursor-pointer'/>
        </div>
        <div className='title text-5xl my-auto'>WORDLE</div>
        <div className='options flex my-auto'>
            <VscGraph size={ICON_SIZE} className='mx-4 hover:cursor-pointer'/>
            <IoMdSettings size={ICON_SIZE} className='hover:cursor-pointer'/>
        </div>
    </nav>
  )
}

export default Navbar