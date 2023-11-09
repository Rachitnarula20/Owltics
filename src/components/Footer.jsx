import React from "react";
import Logo from "../assets/Logo.png";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoYoutube,
} from "react-icons/bi";
import { RiTwitterXFill } from "react-icons/ri";
const Footer = () => {
  return (
    <div className="flex flex-col gradient-2 whole page">
      <div className="flex justify-between pt-24 pb-14 sml:flex-col">
        <div>
          <img className="w-36 ml-24" src={Logo} alt="Logo" />
        </div>
        <div className=" -ml-2 sml:ml-2">
          <h3 className="font-bold">Support</h3>
          <h4 className="mt-6 text-sm">Contact Us</h4>
          <h4 className="mt-6 text-sm">Email Support</h4>
          <h4 className="mt-6 text-sm">Schedule a Demo</h4>
          <h4 className="mt-6 text-sm">Resources</h4>
        </div>
        <div className="flex flex-col -ml-2 sml:ml-2">
          <h3 className="font-bold">Use Cases</h3>
          <h4 className="mt-6 text-sm">Product Management</h4>
          <h4 className="mt-6 text-sm">QA Testing</h4>
          <h4 className="mt-6 text-sm">Software Development</h4>
          <h4 className="mt-6 text-sm">Customer Support</h4>
        </div>
        <div className="flex flex-col -ml-2 sml:ml-2">
          <h3 className="font-bold">Product</h3>
          <h4 className="mt-6 text-sm">Pricing</h4>
          <h4 className="mt-6 text-sm">Blogs</h4>
          <h4 className="mt-6 text-sm">Feature Requests</h4>
          <h4 className="mt-6 text-sm">Roadmap</h4>
        </div>
        <div className="mr-24 pr-14 ">
          <h3 className="font-bold">Contact Us</h3>
          <h4 className="mt-6">
            Join our newsletter to stay up to date on features and releases
          </h4>

          <form className="mt-5">
            <div className="flex flex-col gap-4">
              <div className="flex">
                <input
                  className="w-56 h-8 border border-gray-300 rounded px-2 sml:w-44"
                  placeholder="you@example.com"
                  type="email"
                  name="email"
                  required
                />
                <input
                  className="w-56 h-8 border border-gray-300 rounded px-2 ml-2 sml:w-[8.5rem]"
                  placeholder="Enter your name"
                  type="text"
                  name="name"
                  required
                />
              </div>
              <div className="flex flex-col">
                <textarea
                  className="w-96 h-24 border border-gray-300 rounded px-2 py-1 sml:w-72"
                  placeholder="Type your message..."
                  name="message"
                  required
                ></textarea>
              </div>
              <div className="flex">
                <button
                  className="bg-black hover:bg-blue-700 text-white py-2 px-4"
                  type="submit"
                >
                  Contact Us
                </button>
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="mr-2" required />
                <label>I accept the terms and conditions.</label>
              </div>
            </div>
          </form>
        </div>
      </div>
      <hr
        className="my-4 mx-20"
        style={{ backgroundColor: "#CFEEFE", height: "2px", border: "none" }}
      />
      <div className="flex-1 pb-10 sml:flex-col">
        <div className="flex gap-6 ml-20 mt-4 sml:ml-0 sml:flex ">
          <h3>©2023 The Product Management. All rights reserved</h3>
          <a href="#" className="flex underline">
            Privacy Policy
          </a>
          <a href="#" className="underline">
            Terms of service
          </a>
          <a href="#" className="underline">
            Cookies Setting
          </a> 
          </div>
          <div className="sml: flex gap-4 sml:mt-8">
          <BiLogoFacebookCircle size={25} className="ml-48 sml:ml-0 " />{" "}
          <BiLogoInstagram size={25} /> <RiTwitterXFill size={25} />{" "}
          <BiLogoLinkedinSquare size={25} /> <BiLogoYoutube size={25} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
