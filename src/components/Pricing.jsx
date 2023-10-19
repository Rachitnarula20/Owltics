import React from 'react'
import {BsCheckLg} from 'react-icons/bs'
const data = [
    {
        plan: 'Basic' ,
        yearly : 199 ,
        month : '49/mo',
        include : [
            "Unlimited issue reports",
            "10 Team Members",
            "Unlimited Workspaces",
            "4 Collections",
            "All Integrations"
          ] 
    },
    {
        plan: 'Business' ,
        yearly : 299 ,
        month : '249/mo',
        include : [
            "25 Team Members",
            "Unlimited Collections",
            "Active Support",
            "+ Everything in basic",
          ] 
    },
]
const Pricing = () => {
  return (
    <div className='gradient-1 ' id='pricing'>
      <h1 className='font-bold text-[50px] text-center pt-20'>
        Pricing Plan
      </h1>
      <p className='text-center pt-4'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      </p>
      <div className='flex justify-center mt-8 mb-10'>
      <button className=" py-2 px-5 text-white border-[1px] border-r-0 border-solid border-blue-500  rounded-l-lg bg-blue-500">
        Monthly
      </button>
      <button className=' py-2 px-5 border-[1px] hover:border-[2px] border-l-0 rounded-r-lg border-solid border-gray-500'>
        Yearly
      </button>
      </div>
      <div className='flex justify-center gap-8'>
      {data.map((item,index)=>{
        return(

        <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col justify-between w-96 pb-12 h-[574px] mb-20"key={index}>
         {      
          item.plan === 'Business' && 
            <div>

            </div>
          
         } 
        <h1 className='text-xl pb-2'>{item.plan} plan</h1>
            <h1 className='text-[50px] font-bold mt-4'>${item.month}</h1>
            <p className='pb-6 text-gray-500 mt-4'>or ${item.yearly} yearly</p>
            <button className='py-3 px-5 text-white border-[1px] border-solid border-blue-500 rounded-3xl transition-all ease-in duration-300 hover:scale-105  bg-blue-500 mb-7'>Get Started</button>
            <hr/>
            <div className='h-[264px]'>
              <p className="font-bold">Includes:</p>
              {item.include.map((feature, idx) => (
                <div key={idx} className="flex items-center mt-6">
                  <BsCheckLg className="fill-green-500 mr-2" size={20} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
        </div>
        )
      })} 
      </div>
    </div>
  )
}

export default Pricing
