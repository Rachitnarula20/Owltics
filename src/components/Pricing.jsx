import React from 'react';
import { BsCheckLg } from 'react-icons/bs';

const data = [
  {
    plan: 'Basic',
    yearly: 199,
    month: '49/mo',
    include: [
      'Unlimited issue reports',
      '10 Team Members',
      'Unlimited Workspaces',
      '4 Collections',
      'All Integrations'
    ]
  },
  {
    plan: 'Business',
    yearly: 299,
    month: '249/mo',
    include: [
      '25 Team Members',
      'Unlimited Collections',
      'Active Support',
      '+ Everything in basic'
    ]
  }
];

const Pricing = () => {
  return (
    <div className='gradient-1 text-center' id='pricing'>
      <h1 className='font-bold text-5xl sml:text-4xl pt-20 sml:pt-4'>
        Pricing Plan
      </h1>
      <p className='text-base sml:text-lg pt-4'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      </p>
      <div className='flex justify-center sml:flex-row mt-8 mb-10'>
        <button className="py-2 px-5 text-white border-[1px] border-r-0 border-solid border-blue-500  rounded-l-lg bg-blue-500 hover:bg-blue-600 transition duration-300">
          Monthly
        </button>
        <button className='py-2 px-5 border-[1px] hover:border-[2px] border-l-0 rounded-r-lg border-solid border-gray-500 hover:border-gray-600 transition duration-300'>
          Yearly
        </button>
      </div>
      <div className='flex justify-center gap-8 sml:flex-col '>
        {data.map((item) => (
          <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col justify-between w-96 pb-12 h-[574px] mb-20 sml:w-80 sml:ml-8" key={item.plan}>
            <h1 className='text-xl pb-2'>{item.plan} plan</h1>
            <h1 className='text-[50px] font-bold mt-4'>${item.month}</h1>
            <p className='pb-6 text-gray-500 mt-4'>or ${item.yearly} yearly</p>
            <button className='py-3 px-5 text-white border-[1px] border-solid border-blue-500 rounded-3xl transition-all ease-in duration-300 hover:scale-105  bg-blue-500 mb-7 hover:bg-blue-600'>
              Get Started
            </button>
            <hr />
            <div className='h-[264px]'>
              <p className='font-bold'>Includes:</p>
              {item.include.map((feature, idx) => (
                <div key={idx} className='flex items-center mt-6'>
                  <BsCheckLg className='fill-green-500 mr-2' size={20} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
