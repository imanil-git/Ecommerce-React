import React from "react";
import Logo from "../assets/e-logo.png";

const Footer = () => {
  return (
    <>
      <div className="bg-slate-700">
        <div className=" container m-auto grid grid-cols-4 w-full h-72">
          <div className="flex items-center justify-center">
            <img className="w-20" src={Logo} alt="logo.png" />
          </div>
          <div className="flex items-center justify-center">
            <div>
              <h6 className="text-center font-semibold text-xl text-white font-mono">
                Shop
              </h6>
              <div className="flex flex-col text-white">
                <span>About us</span>
                <span>Contact</span>
                <span>Location</span>
                <span>F&Q</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div>
              <h6 className="text-center font-semibold text-xl text-white font-mono">
                Link
              </h6>
              <div className="flex flex-col text-white">
                <span>Electronics</span>
                <span>Cosmetics</span>
                <span>Furniture</span>
                <span>Book</span>
                <span>Summer</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div>
              <h6 className="text-center font-semibold text-xl text-white font-mono">
                Contact
              </h6>
              <div className="flex flex-col text-white">
                <span>+ 9779800000000</span>
                <span>info.ecommerce@gmail.com</span>
                <span>Itahari-2, Sunsari</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
