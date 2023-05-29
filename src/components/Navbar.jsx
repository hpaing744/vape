import React from 'react'

import img1 from '../assets/pi.png'

import {RiMenu3Line} from 'react-icons/ri'
import {AiOutlineSearch ,AiOutlineShoppingCart} from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className='absolute w-full justify-between m-2 p-6 pl-10 flex z-20'>
      <div className='flex text-xl lg:text-4xl'>
        <h1 className='font-bold text-xl lg:text-4xl'>PI</h1>
        <span className='lg:mt-3 ml-2 mt-2'><img className='w-[20px]' src={img1} alt="" /></span>
    </div>

      <div className='flex mr-6 gap-3'>
        <AiOutlineSearch size={20}/>
        <AiOutlineShoppingCart size={20}/>
        <RiMenu3Line size={20}/>
      </div>
    </div>
  )
}

export default Navbar