import React from 'react'
import ScreenShot from '../assets/Screenshot.png'

const data=[
    {head_large: 'Add SDK Script', 
    head_small: 'WEBSDK'},
    {head_large: 'Screenshot or Record Sessions with logs', 
    head_small: 'CAPTURE WITH MEDIA'},
    {head_large: 'Detailed Insights in Dashboard', 
    head_small: 'CHAT'},

]
const Install = () => {
  return (<div className='bg-white rounded-t-[56px] -mt-14 sml:bg-red-500'>
        
            <h1 className='font-bold text-[55px] text-center pt-10'>Install and use with simple steps</h1>
        
        <div className='text-center  text-gray-500 mt-6'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos laboriosam nobis non, sint numquam Lorem ipsum dolor sit amet
        </div>

        <div className='flex mt-14 mx-14 ml-48 md:flex-row'>
            <div className='gap-0 mr-20 w-1/4 mt-10'>
                {data.map((item,index)=>(
              <div className='inner py-3 px-4 flex-1 mt-4 hover:gradient-hover  hover:cursor-pointer' key={index}>
               <h3 className=' text-base text-gray-500'>{item.head_small}</h3>
               <h1 className='font-semibold text-2xl'>{item.head_large}</h1>
              </div>
                ))}
            </div>
            <div className='mx-4'>
            <img src={ScreenShot} alt='SS' className='max-w-full h-auto'/>
            </div>
        </div>  
 </div>
  )
} 

export default Install
