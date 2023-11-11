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
    <div className='border ml-28 mr-20 rounded-t-3xl mt-10 border-b-0 overflow-hidden sml:mr-0 sml:ml-0'>
      <div className='background-img pt-32'>
      <h1 className='flex justify-center font-bold text-[55px] text-center  sml:text-3xl' style={{color:'black'}} >
      Support for browsers on both
      </h1><h1 className='flex justify-center font-bold text-[55px] text-center sml:text-3xl'>
      <span className="text-[#08A2F3]">
       Mobile&nbsp;</span>
       and<span className="text-[#037AF8]">&nbsp;Web </span>
        </h1>
        </div>
      <div className='flex justify-center mt-10 gap-20 sml:gap-3 '>
        <img className='sml:h-10 sml:w-10' src={Safari} alt='Safari img '/>
        <img className='sml:h-10 sml:w-10' src={Firefox} alt='Firefox img'/>
        <img className='sml:h-10 sml:w-10' src={Chrome} alt='Chrome img'/>
        <img className='sml:h-10 sml:w-10' src={Brave} alt='Brave img'/>
        <img className='sml:h-10 sml:w-10' src={Edge} alt='Edge img'/>
        <img className='sml:h-10 sml:w-10' src={OperaMini} alt='OperaMini img'/>
        <img className='sml:h-10 sml:w-10' src={AddMore} alt='AddMore img'/>
    </div> 
    </div>
  )
}

export default Support
