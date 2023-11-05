import React from 'react';
import Annotation from '../assets/Annotation.png'
import ActionableFeedback from '../assets/Actionable-Feedback.png'
import OnPremise from '../assets/On-Premise.png'
import Session from '../assets/Session-Replays.png'
import Integrations from '../assets/Integrations.png'
import Web from '../assets/Web-Sdk.png'
const data = [
  {
    img: Annotation,
    title: 'Annotation on Screenshots',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. i doloribus eos architecto consequatur nam error!'
  },
  {
    img: Session,
    title: 'Session Replays',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. i doloribus eos architecto consequatur nam error!'
  },
  {
    img: Integrations,
    title: 'Integrations',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. i doloribus eos architecto consequatur nam error!'
  },
  {
    img: ActionableFeedback,
    title: 'Actionable feedback',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. i doloribus eos architecto consequatur nam error!'
  },
  {
    img: Web,
    title: 'Web SDK',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. i doloribus eos architecto consequatur nam error!'
  },
  {
    img: OnPremise,
    title: 'On-Premise',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. i doloribus eos architecto consequatur nam error!'
  },
];

const Features = () => {
  return (
    <div className='grid grid-cols-3  sml:grid-cols-1 med:grid-cols-3 gap-4 justify-center mx-36 sml::mx-8 med::mx-16 my-28 ' id='features'>
      {data.map((item, index) => (
        <div key={index} className="bg-white p-6 flex flex-col items-center">
          <img src={item.img} alt="" className="max-w-full h-auto mb-4" />
          <h1 className="text-lg sm:text-xl font-bold mb-2">{item.title}</h1>
          <p className="text-sm text-gray-600 text-center">{item.desc}</p>
        </div>
      ))}
    </div>
  );
};

  

export default Features;
