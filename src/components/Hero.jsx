import React from 'react'
import Hero_2 from '../assets/30.png'
const Hero = () => {
  return (
    <div className='gradient-1' id='home'>
      <div className='font-bold text-[55px] text-center pt-24'>
        Effortlessly <span className="text-[#08A2F3]">Capture Bugs</span> With Logs
      </div>
      <div className='text-center  text-gray-500 mt-6'>
      Avoid the hassle of going back and forth with different teams by
              capturing every step of your journey through <br/>seamless log tracking
              made simple.
      </div>
     <div className='flex justify-center mt-10'>
        <div className='mr-4 '>
            <button className=" py-3 px-5 font-semibold text-white border-[1px] border-solid border-blue-500 rounded-lg bg-blue-500 transition-all ease-in duration-300 hover:scale-105">
             Request a Demo
            </button>
        </div>
        <div>
            <button className="rounded-lg py-3 px-5 border-[1px] border-solid border-gray-500 transition-all ease-in duration-300 hover:scale-105">
                Get started
            </button>
        </div>
      </div>
      <div className=' pb-20'>
      <img src={Hero_2} alt='hero' />
    </div>
    </div>
     
  )
}


export default Hero
