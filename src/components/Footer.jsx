import React from "react";
import Logo from "../assets/e-logo.png";
import Logo1 from "../assets/color.png"

const Footer = () => {
  return (
    <>
      <div className="bg-slate-700">
        <div className=" container m-auto grid grid-cols-4 w-full py-8">
          <div className="flex flex-col justify-center">
            <img className="w-20" src={Logo1} alt="logo.png" />
            <p className="text-xl font-bold font-sans text-red-500">E-Shop</p>
          </div>
          <div className="flex justify-center">
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
          <div className="flex justify-center">
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
          <div className="flex justify-center">
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
