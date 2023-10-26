import React from 'react'
import group from '../assets/Group.png'
const Premise = () => {
  return (
    <div className='flex justify-evenly  mt-16 mb-10'>

        <div className='ml-28 sml:ml-4'>

      <h1 className='font-bold text-[50px] mb-6 mt-10 sml:text-3xl'>
        On Premise Solutions
      </h1> 
      <p className='mb-5'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro voluptatem <br />rerum non delectus blanditiis. Quia temporibus, nostrum, vero, magnam voluptate <br/>culpa totam dolor necessitatibus nam id voluptatum officiis. Quasi, nulla.
      </p>
      <button className=" py-3 px-5 font-semibold text-white border-[1px] border-solid border-blue-500 rounded-lg bg-blue-500 transition-all ease-in duration-300 hover:scale-105">
             Request a Demo
            </button>
 </div>
      <div className=''>
        <img className='' src={group}alt="img" />
      </div>
    </div>
  )
}

export default Premise
