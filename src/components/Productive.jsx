import React, { useState } from 'react'
import ScreenShot from '../assets/Screenshot.png'
import Accordian from './Accordian'
const Productive = () => {
    const [open, setOpen] = useState(false);

    const toggle = (index) => {
        if (open === index) {
            return setOpen(null) 
        }
        setOpen(index)
    }
const accordianData =[
    {
        title : 'Report 30% of time spent in reporting issue',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        title : 'Register and create your first support portal',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        title : 'Enable everyone to report issue easily with every detail',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
]
  return (
    <div className='page pt-32 sml:ml-0 sml:pt-24'>
      <div className='flex justify-between mr-0 ml-10 sml:ml-0'>
        <div className='ml-10 w-2/5 pl-20 sml:ml-0 sml:pl-2' >
      <h3 className='text-gray-500 font-semibold sml:ml-0 sml:text-lg'>Getting Started in Minutes</h3>
            <h1 className='font-semibold text-[55px] mb-10 sml:ml-0 sml:text-3xl'>
                Be Productive 
                <br />
                with <span className="text-[#08A2F3]">Owltics</span>
            </h1>
            <div>
                {accordianData.map((data,index) =>{
                    return <Accordian key={index} open={index === open} title={data.title} desc={data.desc} toggle={() => toggle(index)}/>
                })}
            </div>
        </div>
        <div className='ml-4 mr-0 mt-10 drop-shadow-2xl'>
            <img src={ScreenShot} alt='SS'/>
            </div>
      </div>
    
    </div>
  )
}

export default Productive


