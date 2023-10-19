import React from 'react'
import background from '../assets/background-img.png' 
import Safari from '../assets/Safari.png' 
import Firefox from '../assets/Firefox.png' 
import Chrome from '../assets/Chrome.png' 
import Brave from '../assets/Brave.png' 
import OperaMini from '../assets/OperaMini.png' 
import Edge from '../assets/Edge.png' 
import AddMore from '../assets/AddMore.png' 
const Support = () => {
  return (
    <div className='border ml-10 mr-20 rounded-t-3xl mt-10 border-b-0 overflow-hidden'>
      <div className='background-img pt-32'>
      <h1 className='flex justify-center font-bold text-[55px] text-center' style={{color:'black'}}  >
      Support for browsers on both
      </h1><h1 className='flex justify-center font-bold text-[55px] text-center '>
      <span className="text-[#08A2F3]">
       Mobile&nbsp;</span>
       and<span className="text-[#037AF8]">&nbsp;Web </span>
        </h1>
        </div>
      <div className='flex justify-center mt-10 gap-20'>
        <img src={Safari} alt='Safari img'/>
        <img src={Firefox} alt='Firefox img'/>
        <img src={Chrome} alt='Chrome img'/>
        <img src={Brave} alt='Brave img'/>
        <img src={Edge} alt='Edge img'/>
        <img src={OperaMini} alt='OperaMini img'/>
        <img src={AddMore} alt='AddMore img'/>
    </div>
    </div>
  )
}

export default Support
