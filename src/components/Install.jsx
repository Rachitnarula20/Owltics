import React from 'react'
import ScreenShot from '../assets/Screenshot.png'

const data=[
    {head_large: 'Add SDK Script', 
    head_small: 'WEBSDK'},
    {head_large: 'Screenshot/Record Sessions with logs', 
    head_small: 'CAPTURE WITH MEDIA'},
    {head_large: 'Detailed Insights in Dashboard', 
    head_small: 'CHAT'},

]
const Install = () => {
  return (<div className='bg-white rounded-t-[56px] -m-1 sml:ml-0'>
        
            <h1 className='font-bold text-[55px] text-center pt-10 sml:text-2xl sml:pt-16 sml:ml-2'>Install and use with simple steps</h1>
        
        <div className='text-center  text-gray-500 mt-6 sml:ml-2'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos laboriosam nobis non, sint numquam Lorem ipsum dolor sit amet
        </div>

        <div className='flex mt-14 mx-14 ml-48 sml:mx-0 sml:mt-4 sml:flex-col'>
            <div className='gap-0 mr-20 w-1/4 mt-10 sml:mt-0 sml:w-full'>
                {data.map((item,index)=>(
              <div className='inner py-3 px-4 flex-1 mt-4 hover:gradient-hover  hover:cursor-pointer sml:mt-0 ' key={index}>
               <h3 className=' text-base text-gray-500 sml:text-xs'>{item.head_small}</h3>
               <h1 className='font-semibold text-2xl sml:text-base'>{item.head_large}</h1>
              </div>
                ))}
            </div>
            <div className='mx-4 sml:my-auto sml:mt-4'>
            <img src={ScreenShot} alt='SS' className='max-w-full h-auto'/>
            </div>
        </div>  
 </div>
  )
} 

export default Install
