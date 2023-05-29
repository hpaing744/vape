import React, { useState } from 'react'

import {BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'

const Slider = () => {
  const slides=[
    {
      url:'https://images.unsplash.com/photo-1616065787198-a41b9ab94ef2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      title:'vape1'
    },
    {
      url:'https://images.pexels.com/photos/3545426/pexels-photo-3545426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title:'vape2'
    },
    {
      url:'https://images.pexels.com/photos/2463125/pexels-photo-2463125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title:'vape3'
    },
    {
      url:'https://images.pexels.com/photos/10358765/pexels-photo-10358765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title:'vape4'
    },
    {
      url:'https://images.pexels.com/photos/13871868/pexels-photo-13871868.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title:'vape5'
    },
  ]

  const [currentIndex,setCurrentIndex] =useState (0);

  const prevSlide=()=>{
    const isFirstSlide=currentIndex===0;
    const newIndex = isFirstSlide ? slides.length -1: currentIndex -1;

    setCurrentIndex(newIndex)
  }

  const nextSlide=()=>{
    const isFirstSlide= currentIndex === slides.length -1;
    const newIndex =isFirstSlide ? 0 : currentIndex +1;

    setCurrentIndex(newIndex)
  }

  const gotoSlide=(slideIndex)=>{
    setCurrentIndex(slideIndex)
  }

  return (
    <div className='w-full h-screen group'>
      <div className='top-0 left-0 w-full h-screen bg-cover duration-500' style={{backgroundImage:`url(${slides[currentIndex].url})`}}>
        <div className='flex flex-col text-center absolute bottom-4 sm:bottom-10 sm:left-[36%] left-[18%] lg:bottom-[10%] lg:left-[38%]'>
          <div>
            <p className='text-white lg:text-2xl mt-2'>The Best Look</p>
            <p className='font-bold text-white text-3xl lg:text-5xl mt-2'>Anytime Anywhere</p>
            <p className='text-white lg:text-2xl mt-2'>Start from 10,000MMK</p>
            <button className='bg-gray-800 rounded-full text-white py-2 px-3 mt-2'>View</button>
          </div>
        </div>
      </div>
      <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>

      <div className='flex top-4 justify-center py-2'>
          {slides.map((slide,slideIndex)=>(
            <div className='text-2xl cursor-pointer' key={slideIndex} onClick={()=>gotoSlide(slideIndex)} >
              <RxDotFilled />
            </div>
          ))}
      </div>
    </div>
  )
}

export default Slider