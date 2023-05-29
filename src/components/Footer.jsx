import React from 'react'

import {TiArrowBackOutline} from 'react-icons/ti'
import {BiPhone,BiLocationPlus} from 'react-icons/bi'
import {BsCircle,BsRecordCircle,BsFillShieldLockFill} from 'react-icons/bs'

import img1 from '../assets/qrcode.webp'
import img2 from '../assets/kbzpay.png'
import img3 from '../assets/wavepay.png'
import img4 from '../assets/facebook.webp'
import img5 from '../assets/instagram.webp'
import img6 from '../assets/viber.png'
import img7 from '../assets/telegram.webp'
import img8 from '../assets/twitter.jpg'

const Footer = () => {
  return (
    <div className='w-full md:max-w-[1350px] m-auto mt-5'>
        <div className='lg:grid-cols-4 grid grid-cols-2 justify-between p-2'>
            <div>
                <h1 className='text-2xl'>Customer Service</h1>
                <ul>
                    <li className='ml-2 mt-2 flex'><BsFillShieldLockFill className='mt-1 mr-2'/>Terms & Privacy Policy</li>
                    <li className='ml-2 mt-1 flex'><TiArrowBackOutline className='mt-1 mr-2'/>Return Policy</li>
                </ul>
            </div>
            <div className='hidden md:flex md:flex-col'>
                <h1 className='text-2xl'>Language</h1>
                <ul>
                    <li className='ml-2 mt-2 flex'><BsCircle className='mt-1 mr-2'/>Myanmar(Unicode)</li>
                    <li className='ml-2 mt-1 flex'><BsCircle className='mt-1 mr-2'/>Myanmar(Zawgyi)</li>
                    <li className='ml-2 mt-1 flex'><BsRecordCircle className='mt-1 mr-2 text-blue-600'/>English</li>
                </ul>
            </div>
            <div>
                <h1 className='text-2xl'>Contact Us</h1>
                
                    <p className='ml-2 mt-2 flex '><BiLocationPlus className='mt-1 mr-2'/>Lay Daunt Kan Main Road,<br/>Cashmere Stop,Near Zawana,<br/>Thingangyn Tsp,Yangon</p>
                    <p className='ml-2 mt-2 flex '><BiPhone className='mt-1 mr-2'/>09458489458</p>
                
            </div>
            <div className='hidden md:flex md:flex-col'>
                <h1 className='text-2xl'>Download our App</h1>
                <img className='w-[200px] h-[200px] object-cover' src={img1} alt="" />
            </div>
            <div className='mt-4'>
                <h1 className='text-2xl'>Payment</h1>
                <div className='flex gap-2 mt-2'>
                    <img className='w-[30px] h-[30px] rounded-xl' src={img2} alt="" />
                    <img className='w-[30px] h-[30px] rounded-xl' src={img3} alt="" />
                </div>
            </div>
            <div className='mt-4'>
                <h1 className='text-2xl'>Follow Us On</h1>
                <div className='flex gap-2 mt-2'>
                    <img className='w-[30px] h-[30px] rounded-xl' src={img4} alt="" />
                    <img className='w-[30px] h-[30px] rounded-xl' src={img5} alt="" />
                    <img className='w-[30px] h-[30px] rounded-xl' src={img6} alt="" />
                    <img className='w-[30px] h-[30px] rounded-xl' src={img7} alt="" />
                    <img className='w-[30px] h-[30px] rounded-xl' src={img8} alt="" />
                </div>
            </div>
        </div>
        <p className='text-center mt-4 mb-2'>Copyrights 2023 C by D Co,Ltd.All Rights reserved.</p>
    </div>
  )
}

export default Footer