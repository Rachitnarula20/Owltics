import { useState } from "react";
import React from "react";
import Dev_Tabs from "./Dev_Tabs";


const Developer = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    

  return (
    <div className="whole page z-0">
      <div className="headings items-center">
        <h1 className="font-bold text-[55px] text-center pt-10 sml:text-sm">
          Developer get more Insights to
          <br />
          <span className="text-[#037AF8]">Reproduce the issue</span>
        </h1>

        <p className="text-center  text-gray-500 mt-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
          voluptatibus
        </p>
        <Dev_Tabs />
      </div>
      
    </div>
    
  );
};

export default Developer;
