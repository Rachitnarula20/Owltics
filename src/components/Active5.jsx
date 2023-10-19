import React from 'react'
import item5 from '../assets/Item5.png'
const data = [
    {
      head: "Track an event",
      btn: "capture",
    },
    {
      head: "Identify a user",
      btn: "identify",
      btn1: "group",
    },
    {
      head: "Record a pageview",
      btn: "capture",
    },
  ];
const Active5 = () => {
  return (
    <div>
      <div className="flex items-center space-y-4">
      <div className="flex justify-between">
        <div className="sidebar w-1/2 z-10">
          {data.map((item, index) => (
            <div
              className="inner py-3 px-4 flex-1 mt-4 hover:gradient-hover1  hover:cursor-pointer"
              key={index}
            >
              <h1 className="font-semibold text-2xl">{item.head}</h1>
              <button className=" border-black border-2 text-gray-500 rounded-lg py-1 px-2">
                {item.btn}
              </button>
              {item.btn1 && (
                <button className="border-black border-2 text-gray-500 rounded-lg py-1 px-2 ml-2">
                  {item.btn1}
                </button>
              )}
            </div>
          ))}
        </div>

        <div className="ml-16">
          <h1 className="font-bold text-3xl mt-7">Track an Event</h1>
          <p className="mt-8">
            Use the capture method to send custom events from yopur codebase.
            Use this data in PosHog for building cohorts, filtering insights,
            watching specific session replays, triggering feature flags, adding
            a user to an A/B test, and more.
          </p>
          <img className='mt-10' src={item5} alt="" />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Active5
