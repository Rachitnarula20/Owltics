import React from 'react';
import { Collapse } from 'react-collapse';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';

const Accordion = ({ open, toggle, title, desc }) => {
  return (
    <div className='mb-6'>
    <div className='cursor-pointer flex mb-4 gap-x-20' onClick={toggle}>
      <h2 className='font-semibold text-2xl sml:text-lg'>
        {title}
      </h2>
      <h1 className='flex mt-3'>
        {open ? <BsChevronUp size={25} color='#D1D5DB' strokeWidth='2' /> : <BsChevronDown size={25} color='#D1D5DB' strokeWidth='2'/>}
      </h1>
    </div>
      <Collapse isOpened={open}>
        <p className='text-gray-500 text-lg mb-8 sml:text-xs' >
        {desc}
        </p>
      </Collapse>
      <hr />
      </div>
  );
};

export default Accordion;
