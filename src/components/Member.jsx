import React from 'react'

import img1 from '../assets/vape(1).webp'
import img2 from '../assets/pod(1).jpg'
import img3 from '../assets/disposable(1).webp'

import {BsChevronCompactRight} from 'react-icons/bs'

const Member = () => {
  return (
    <div className='md:max-w-[1350px] w-full justify-center items-center m-auto md:grid md:grid-cols-2 flex flex-col gap-3 md:ml-5 ml-3'>
        <div className='relative md:w-full sm:w-[600px] w-[380px] border h-[500px] bg-gray-600 rounded-xl'>
            <div className='absolute sm:left-[10%] sm:bottom-[20%] left-14 bottom-28 flex flex-col text-white  md:text-start text-center'>
                <h1 className='font-bold text-2xl md:text-5xl'>Membership Program</h1>
                <p className='mt-3 text-sm'>Be a Vape Pi member and get our special<br/> exclusive offers</p>
                
            </div>
            <button className='absolute md:left-16 bottom-16 left-32 bg-gray-400 rounded-full w-[100px] mt-3 items-center'>View</button>
        </div>
        <div className='flex gap-1'>
            <div className='relative'>
                <img className='  w-[300px] md:h-[500px] h-[500px] object-cover border-2 rounded-xl' src={img1} alt="img1" />
                <div className='absolute bg-black/80 bottom-0 w-full h-[100px] rounded-xl' />
                <div className='absolute bottom-6 text-gray-200 p-2 flex'>
                    <div className=''>
                        <h1>Devices</h1>
                        <p className='text-xs'>Find the best for <br/> you here!</p>
                    </div>
                    <div className='absolute mt-2 right-[-70%]'>
                        <BsChevronCompactRight size={15}/>
                    </div>
                </div>
            </div>

            <div className='flex flex-col relative'>
                <div className=''>
                    <img className='w-[300px] md:h-[240px] h-[240px] object-cover border-2 rounded-xl' src={img2} alt="img2" />
                    <div className='absolute bg-black/80 bottom-[52%] w-full h-[100px] rounded-xl'/>
                    <div className='absolute text-gray-200 p-2 flex'>
                        <div className='absolute bottom-7'>
                            <h1 className='text-sm mb-2'>Pods</h1>
                            <h2 className='text-xs'>Choices are available </h2>
                        </div>
                        <div className='absolute mt-2 bottom-20 left-36'>
                            <BsChevronCompactRight size={15}/>
                        </div>
                    </div>
                </div>

                <div className='relative mt-5'>
                    <img className='w-[300px] md:h-[240px] h-[240px] object-cover border-2 rounded-xl' src={img3} alt="img2" />
                    <div className='absolute bg-black/80 bottom-0 w-full h-[100px] rounded-xl'/>
                    <div className='absolute text-gray-200 p-2 flex'>
                        <div className='absolute bottom-7'>
                            <h1 className='text-sm mb-2'>Disposable</h1>
                            <h2 className='text-xs'>Easy,Clean and Superb Flavor</h2>
                        </div>
                        <div className='absolute mt-2 bottom-20 left-36'>
                            <BsChevronCompactRight size={15}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Member