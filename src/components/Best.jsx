import React from 'react'

import {AiFillStar} from 'react-icons/ai'

import img1 from '../assets/vape(1).webp'
import img2 from '../assets/vape(2).webp'
import img3 from '../assets/vape(3).webp'
import img4 from '../assets/vape(4).png'
import img5 from '../assets/vape(5).jpg'
import img6 from '../assets/vape(6).webp'

const Best = () => {
  return (
    <div className='relative mt-8 md:h-[500px] h-[800px]'>
        <h1 className='text-2xl lg:text-4xl text-center font-bold'>Best Deals</h1>
        <p className='text-center text-xl lg:text-2xl'>Just For You</p>
        <div className='md:flex sm:flex justify-center mt-5 gap-5 grid grid-cols-2'>
            <div className='relative text-center sm:ml-5'>
                <div className='absolute w-[120px] h-[30px] border bg-red-500 text-white left-[20%]'>
                    20% OFF
                </div>
                <img className='w-[200px] h-[200px] border-2 rounded-xl' src={img1} alt="vape" />
                <h1>Refreshing Mint</h1>
                <p>30,000MMK</p>
                <p className='line-through text-xs'>30,000MMK</p>
                <p className='text-yellow-400 flex '><span className='mr-2 ml-12'><AiFillStar size={15} className='mt-1'/></span>600 points</p>
            </div>

            <div className='relative text-center'>
                <div className='absolute w-[120px] h-[30px] border bg-red-500 text-white left-[20%]'>
                    20% OFF
                </div>
                <img className='w-[200px] h-[200px] border-2 rounded-xl' src={img2} alt="vape" />
                <h1>Refreshing Mint</h1>
                <p>30,000MMK</p>
                <p className='line-through text-xs'>30,000MMK</p>
                <p className='text-yellow-400 flex '><span className='mr-2 ml-12'><AiFillStar size={15} className='mt-1'/></span>600 points</p>
            </div>

            <div className='relative text-center'>
                <div className='absolute w-[120px] h-[30px] border bg-red-500 text-white left-[20%]'>
                    20% OFF
                </div>
                <img className='w-[200px] h-[200px] border-2 rounded-xl' src={img3} alt="vape" />
                <h1>Refreshing Mint</h1>
                <p>30,000MMK</p>
                <p className='line-through text-xs'>30,000MMK</p>
                <p className='text-yellow-400 flex '><span className='mr-2 ml-12'><AiFillStar size={15} className='mt-1'/></span>600 points</p>
            </div>

            <div className='hidden lg:flex-col lg:flex relative text-center'>
                <div className='absolute w-[120px] h-[30px] border bg-red-500 text-white left-[20%]'>
                    20% OFF
                </div>
                <img className='w-[200px] h-[200px] border-2 rounded-xl' src={img4} alt="vape" />
                <h1>Refreshing Mint</h1>
                <p>30,000MMK</p>
                <p className='line-through text-xs'>30,000MMK</p>
                <p className='text-yellow-400 flex '><span className='mr-2 ml-12'><AiFillStar size={15} className='mt-1'/></span>600 points</p>
            </div>

            <div className=' relative text-center'>
                <div className='absolute w-[120px] h-[30px] border bg-red-500 text-white left-[20%]'>
                    20% OFF
                </div>
                <img className='w-[200px] h-[200px] border-2 rounded-xl' src={img5} alt="vape" />
                <h1>Refreshing Mint</h1>
                <p>30,000MMK</p>
                <p className='line-through text-xs'>30,000MMK</p>
                <p className='text-yellow-400 flex '><span className='mr-2 ml-12'><AiFillStar size={15} className='mt-1'/></span>600 points</p>
            </div>

            <div className='hidden lg:flex-col lg:flex relative text-center'>
                <div className='absolute w-[120px] h-[30px] border bg-red-500 text-white left-[20%]'>
                    20% OFF
                </div>
                <img className='w-[200px] h-[200px] border-2 rounded-xl' src={img6} alt="vape" />
                <h1>Refreshing Mint</h1>
                <p>30,000MMK</p>
                <p className='line-through text-xs'>30,000MMK</p>
                <p className='text-yellow-400 flex '><span className='mr-2 ml-12'><AiFillStar size={15} className='mt-1'/></span>600 points</p>
            </div>
            
        </div>
        <div className='absolute lg:bottom-[10%] bottom-4 lg:left-[48%] left-[40%]'>
            <button className='border bg-gray-400 rounded-full p-2'>View More</button>
        </div>
    </div>
  )
}

export default Best