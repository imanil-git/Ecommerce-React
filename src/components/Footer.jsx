import React from "react";
import Logo from "../assets/e-logo.png";
import Logo1 from "../assets/color.png";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800 px-4 md:px-16 lg:px-28 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="">
            <h2 className="text-lg font-bold mb-4 text-white">About Us</h2>
            <p className="text-gray-300">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              dicta animi excepturi earum quam laborum vitae dolorum, et eius
              modi. Dolor quibusdam blanditiis excepturi cumque?
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4 text-white">Quick Links</h2>
            <ul>
              <li>
                <a href="/" className="hover:underline text-gray-300">
                  Home
                </a>
              </li>
              <li>
                <a href="/" className="hover:underline text-gray-300">
                  Services
                </a>
              </li>
              <li>
                <a href="/" className="hover:underline text-gray-300">
                  Contact
                </a>
              </li>
              <li>
                <a href="/" className="hover:underline text-gray-300">
                  About
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4 text-white">Follow us</h2>
            <ul className="flex space-x-4">
              <li>
                <FaFacebookF className="text-blue-500" />
                <a href="/" className="hover:underline text-gray-300">
                  Facebook
                </a>
              </li>
              <li>
                <FaTwitter className="text-blue-500" />
                <a href="/" className="hover:underline text-gray-300">
                  Twitter
                </a>
              </li>
              <li>
                <FaInstagram className="text-blue-500" />
                <a href="/" className="hover:underline text-gray-300">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-600 pt-6 text-gray-300 text-center mt-6">
          <p>2024 Code with Us. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
