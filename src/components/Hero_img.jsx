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
    <img className='z-20' src={img1} alt="woman" /> 
    <img className='translate-x-1/2 translate-y-[-412px] z-10' src={wire1} alt="" />
    
      </div>
      <div>
        <img className='z-20' src={img2} alt="man" />
      </div>
    </div>
  )
}

export default Hero_img
