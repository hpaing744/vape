import React from 'react'

import img1 from '../assets/vape(1).webp'

import {AiOutlineArrowRight} from 'react-icons/ai'

const NewReleased = () => {
  return (
    <div className='relative md:h-[360px] h-[600px] '>
        <div className='text-center md:max-w-[1350px] m-auto w-full'>
            <h1 className='text-4xl font-bold text-red-600 md:text-5xl'>New <span className='text-black'>Released</span></h1>
            <p className='text-sm'>Try Our Latest Flavours Here</p>
        </div>
        <div className='md:flex grid grid-cols-2 justify-center gap-4'>
            <div>
                <img className='border-2 rounded-xl mt-4 w-[200px] h-[200px]' src={img1} alt="" />
            </div>
            <div>
                <img className='border-2 rounded-xl mt-4 w-[200px] h-[200px]' src={img1} alt="" />
            </div>
            <div>
                <img className='border-2 rounded-xl mt-4 w-[200px] h-[200px]' src={img1} alt="" />
            </div>
            <div>
                <img className='border-2 rounded-xl mt-4 w-[200px] h-[200px]' src={img1} alt="" />
            </div>
        </div>
        <div className='items-center mt-5'>
            <button className='absolute left-[35%] flex text-sm border bg-gray-600 rounded-full p-2 hover:bg-gray-400 md:left-[48%]'>View More<AiOutlineArrowRight className='mt-1 ml-2' size={16}/></button>
        </div>
    </div>
  )
}

export default NewReleased