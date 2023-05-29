import React, { useState } from 'react'

import { BsChevronCompactRight } from 'react-icons/bs'


const Cards = () => {
  const slides=[
    {
      url:'https://img.freepik.com/premium-photo/vape-close-up-smoke-black-background_120739-1292.jpg',
      title:'Vape smoke'
    },
    {
      url:'https://img.freepik.com/free-vector/realistic-vape-set-with-isolated-icons-smoke-circles-puffs-with-vaping-devices-text-vector-illustration_1284-79267.jpg',
      title:'Vape'
    }
  ]

  const [currentIndex,setCurrentIndex]=useState(0);

  const nextSlide=()=>{
    const isFirstSlide= currentIndex === slides.length -1;
    const newIndex =isFirstSlide ? 0 : currentIndex +1;

    setCurrentIndex(newIndex)
  }
  return (
    <div className='md:max-w-[1350px] m-auto mt-4 group w-full'>
        <div className='relative w-full h-[400px] bg-auto rounded-xl duration-300'  style={{backgroundImage:`url(${slides[currentIndex].url})`}}>
          <div className='bg-black/100 absolute lg:w-[730px] md:w-[480px] w-[206px] h-[400px] md:left-[46%] left-[48%] rounded-xl'/>
          <div className='absolute text-white md:right-[20%] right-[10%] bottom-[30%] text-center'>
            <h1 className='font-bold text-xl md:text-3xl'>Try New Flavor</h1>
            <p className='font-sm mb-3'>Citrus Monster</p>
            <button className='border bg-gray-500 rounded-full py-1 px-4'>View</button>
          </div>
          <div className='absolute top-[50%] right-5 text-2xl rounded-full p-2 group-hover:bg-black/80 text-white cursor-pointer'>
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
        </div>
          
    </div>
  )
}

export default Cards