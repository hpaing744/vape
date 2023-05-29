import React from 'react'


import img1 from '../assets/vape(1).webp'
import img2 from '../assets/vape(2).webp'
import img3 from '../assets/vape(3).webp'
import img4 from '../assets/vape(4).png'
import img5 from '../assets/vape(5).jpg'
import img6 from '../assets/vape(6).webp'
import img7 from '../assets/pod(1).jpg'

import {AiFillStar} from 'react-icons/ai'

const Pods = () => {
  return (
    <div className='md:max-w-[1320px] bg-black rounded-xl flex flex-col m-auto p-3 mt-10 ml-6'>
        
        <div className='lg:flex justify-center mt-5 gap-5 grid grid-cols-2'>
        <div className='relative md:w-[250px] w-[150px]'>
        <div className='absolute bottom-[25%] text-white flex'>
            <img className='w-[100px] object-cover' src={img7} alt="" />
            <div>
            <p className='mt-5 text-xl font-bold mb-2'>Pods</p>
            <p className='text-xs'>Variety of choices available</p>
            </div>
        </div>
        </div>
            <div className='relative text-center text-white'>
                
                <img className='w-[200px] h-[200px] border-2 rounded-xl' src={img1} alt="vape" />
                <h1>Refreshing Mint</h1>
                <p>30,000MMK</p>
                <p className='line-through text-xs'>30,000MMK</p>
                <p className='text-yellow-400 flex '><span className='mr-2 ml-12'><AiFillStar size={15} className='mt-1'/></span>600 points</p>
            </div>

            <div className='relative text-center text-white'>
                
                <img className='w-[200px] h-[200px] border-2 rounded-xl' src={img2} alt="vape" />
                <h1>Refreshing Mint</h1>
                <p>30,000MMK</p>
                <p className='line-through text-xs'>30,000MMK</p>
                <p className='text-yellow-400 flex '><span className='mr-2 ml-12'><AiFillStar size={15} className='mt-1'/></span>600 points</p>
            </div>

            <div className='relative text-center text-white'>
                
                <img className='w-[200px] h-[200px] border-2 rounded-xl' src={img3} alt="vape" />
                <h1>Refreshing Mint</h1>
                <p>30,000MMK</p>
                <p className='line-through text-xs'>30,000MMK</p>
                <p className='text-yellow-400 flex '><span className='mr-2 ml-12'><AiFillStar size={15} className='mt-1'/></span>600 points</p>
            </div>

            <div className='hidden lg:flex-col lg:flex relative text-center text-white'>
                
                <img className='w-[200px] h-[200px] border-2 rounded-xl' src={img4} alt="vape" />
                <h1>Refreshing Mint</h1>
                <p>30,000MMK</p>
                <p className='line-through text-xs'>30,000MMK</p>
                <p className='text-yellow-400 flex '><span className='mr-2 ml-12'><AiFillStar size={15} className='mt-1'/></span>600 points</p>
            </div>

            <div className=' relative text-center text-white'>
                
                <img className='w-[200px] h-[200px] border-2 rounded-xl' src={img5} alt="vape" />
                <h1>Refreshing Mint</h1>
                <p>30,000MMK</p>
                <p className='line-through text-xs'>30,000MMK</p>
                <p className='text-yellow-400 flex '><span className='mr-2 ml-12'><AiFillStar size={15} className='mt-1'/></span>600 points</p>
            </div>

            <div className='hidden lg:flex-col lg:flex relative text-center text-white'>
                
                <img className='w-[200px] h-[200px] border-2 rounded-xl' src={img6} alt="vape" />
                <h1>Refreshing Mint</h1>
                <p>30,000MMK</p>
                <p className='line-through text-xs'>30,000MMK</p>
                <p className='text-yellow-400 flex '><span className='mr-2 ml-12'><AiFillStar size={15} className='mt-1'/></span>600 points</p>
            </div>
            
        </div>
    </div>
  )
}

export default Pods