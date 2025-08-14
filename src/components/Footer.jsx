import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div
      className="pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 overflow-hidden w-full"
      id="Footer"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <img src={assets.logo} alt="" className="w-50" />
          <p className="text-gray-400 mt-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            cum eius eaque error vitae,
          </p>
        </div>

        <div className="w-full md:w-1/3 ">
          <h3 className="text-white text-lg font-bold mb-4">
            Subscribe to Newsletter
          </h3>

          <div className="flex gap-2">
            <input
              className="p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto"
              type="email"
              placeholder="Enter Your Email"
            />
            <button className="py-2 px-4 rounded bg-blue-500 text-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="border-t boder-gray-700 py-4 mt-10 text-center text-gray-500">
        Copyrights 2025 @ Goldstack. all rights reseved
      </div>
    </div>
  );
};

export default Footer;
