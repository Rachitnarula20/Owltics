import React from 'react'
import connect from '../assets/cropped picture.png'
const Connect2 = () => {
  return (
    <div>
    <h3 className='flex justify-center font-bold text-center text-gray-500'>App Integration</h3>
    <h1 className='flex justify-center font-bold text-[50px] text-center' style={{color:'black'}}  >Connect with Software</h1>
    <div className=' pb-20 '>
      <img className='w-full' src={connect} alt='hero' />
    </div>
    </div>
  )
}

export default Connect2;
