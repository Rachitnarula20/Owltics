import React from 'react'
import img1 from '../assets/Icons/woman.png'
import img2 from '../assets/Icons/man.png'
import wire1 from '../assets/Icons/Vector 1654.png'
import wire2 from '../assets/Icons/Vector 1656.png'
import wire3 from '../assets/Icons/Vector 1655.png'
import rec from '../assets/Icons/Record.png'
import replay from '../assets/Icons/Session-Replays.png'
import event from '../assets/Icons/Event.png'
import console from '../assets/Icons/Console.png'
import integrations from '../assets/Icons/Cog.png'
import ss from '../assets/Icons/Screenshot.png'

const Hero_img = () => {
  return (
    <div className='whole page flex justify-between mt-16 '>
      <div>
    <img src={img1} alt="woman" /> 
    <img className='absolute bottom-48 left-[22rem]' src={wire1} alt="" />
    <img className='absolute bottom-60 left-[34rem] z-10 ' src={rec} alt="" />
    <img className='absolute bottom-36 left-[37rem] z-10 ' src={replay} alt="" />
    <img className='absolute bottom-8 left-[42rem] z-10 ' src={event} alt="" />
    <img className='absolute bottom-40 left-[46rem] z-10 ' src={console} alt="" />
    <img className='absolute bottom-36 left-[53rem] z-10 ' src={integrations} alt="" />
    <img className='absolute bottom-80 left-[60rem] z-10 ' src={ss} alt="" />
    <h6 className='text-xs absolute bottom-60 left-[33rem] rotate-[18deg] text-[#037AF8] z-10'>Screen Recording</h6>
    <h6 className='text-xs absolute bottom-36 left-[38rem] rotate-[10deg] text-[#037AF8] z-10'>Replay</h6>
    <h6 className='text-xs absolute bottom-36 left-[53.5rem] rotate-[354deg] text-[#037AF8] z-10'>Integrations</h6>
    <h6 className='text-xs absolute bottom-8 left-[43.25rem] rotate-[0deg] text-[#037AF8] z-10'>Event</h6>
    <h6 className='text-xs absolute bottom-40 left-[46rem] rotate-[0deg] text-[#037AF8] z-10'>Console Logs</h6>
    <h6 className='text-xs absolute bottom-80 left-[60.5rem] rotate-[354deg] text-[#037AF8] z-10'>Screenshot</h6>
    <img className='absolute bottom-32 left-[22rem]' src={wire2} alt="" />
    <img className='absolute bottom-12  left-[22rem]' src={wire3} alt="" />
    
      </div>
      <div>
        <img src={img2} alt="" />
      </div>
    </div>
  )
}

export default Hero_img
