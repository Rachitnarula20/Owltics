import React from 'react'
import work from '../assets/Framework1.png'
const Framework = () => {
  return (
    <div className='flex justify-around pt-20 pb-1'>
      <div className='ml-28 '>
        <img className='w-full' src={work} alt="framwork" />
      </div>
      <div className='flex flex-col w-[35rem] mr-52 justify-center ml-10'>
        <h1 className='font-bold text-[50px]'>Support for all the modern Frameworks</h1>
        <p className='mt-6 text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio maiores quo veniam animi laborum perspiciatis eaque, officiis quia culpa nobis sint, blanditiis iusto, rerum voluptatem molestiae exercitationem autem cum harum.</p>

        <button className="font-semibold items-center mr-[23rem] font flex flex-col rounded-lg py-3 px-5 border-[1px] border-solid border-gray-500 mt-10 transition-all ease-in duration-300 hover:scale-105">
            View all Frameworks
        </button>
      </div>
    </div>
  )
}

export default Framework
