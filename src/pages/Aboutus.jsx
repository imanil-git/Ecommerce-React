import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Anil from "../assets/profile.jpg";

const AboutUs = () => {
  return (
    <div className="w-full min-h-screen bg-gray-300">
      <div className="w-4/5 mx-auto pt-24">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-3/5">
            <div className="text-2xl uppercase mb-4">About Us</div>
            <div className="space-y-4">
              <h3 className="text-lg text-gray-600">
                Lorem, ipsum dolor sit amet consectetur adipisicing
              </h3>
              <p className="text-base font-sans leading-relaxed text-gray-700">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quaerat sed veniam laboriosam culpa fugiat similique soluta
                porro, repudiandae iusto nemo consequuntur cum. Voluptatem,
                pariatur ab.
              </p>
              <button className="mt-6 px-8 py-3 bg-gray-800 text-white text-lg tracking-wide hover:bg-red-700">
                <a href="">Read more</a>
              </button>
            </div>
            <div className="mt-8 flex space-x-4">
              <a href="" className="text-red-700 text-2xl hover:text-gray-800">
                <FaFacebookF />
              </a>
              <a href="" className="text-red-700 text-2xl hover:text-gray-800">
                <FaTwitter />
              </a>
              <a href="" className="text-red-700 text-2xl hover:text-gray-800">
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="md:w-2/5 mt-8 md:mt-0">
            <img
              src={Anil}
              alt="Profile"
              className="w-full h-auto rounded-md shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
