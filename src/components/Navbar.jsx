import React, {useState} from "react";
// import {GiHamburgerMenu} from 'react-icons'
import Logo from "../assets/Logo.png";
import Down from '../assets/down-arrow.png'
const Navbar1 = () => {
  // const [showMenu, setShowMenu] = useState(false);

  return (
      
      <div className="bg-white fixed w-full top-0 z-30 ">
      <div className="flex justify-between py-4">
      <div className="flex justify-between ml-8 sml:ml-2">
        <div className="w-48 sml:m-auto ">
          <a href="/"><img className="sml:w-44" src={Logo} alt="Logo Img" /></a>
        </div>
        <div className="inner flex gap-8 items-center ml-6 sml:hidden sml:ml-0">
          <a  className="hover:underline decoration-blue-500 " href="#home">Home</a>
          <a className="hover:underline decoration-blue-500 " href="#features">Features</a>
          <a className="hover:underline decoration-blue-500 " href="#pricing">Pricing</a>
          <div className="flex justify-around">
          <a className="hover:underline decoration-blue-500 " href="#blog">Blog</a>
          <img className=" w-5 h-5 overflow-hidden mt-1 ml-1" alt="Down arrow"
                  src={Down}/>
          </div>
        </div>
      </div>

      <div className="buttons flex gap-6 items-center">
          <div >
            <button className="rounded-lg py-2 px-5 border-[1px] border-solid border-gray-500 transition-all ease-in duration-300 hover:scale-105 sml:py-1 sml:px-3">
              Register
              </button>
              </div>
          <div>
            <button className="mr-20 py-2 px-5 text-white border-[1px] border-solid border-blue-500 rounded-lg bg-blue-500 transition-all ease-in duration-300 hover:scale-105 sml:py-1 sml:px-3 sml:mr-3">Log In</button>
          </div>
        </div>

    </div>
    <hr />
    </div>
  );
};

export default Navbar1;
