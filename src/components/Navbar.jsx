import React from "react";
import NWButton from "../wrapper/NWButton";
import { Link } from "react-router-dom";
import Logo from "../assets/e-logo.png"

const Navbar = ({ items }) => {
  console.log(items, "item");
  return (
    <>
      <nav className="w-full z-20 top-0 start-0 border-gray-200 dark:border-gray-600 mb-8">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div>
            <img className=" w-10" src={Logo} alt="logo.png" />
            <p className="text-lg font-bold font-sans text-red-500">E-Shop</p>
          </div>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {/* ---======= Button ======--- */}
            <NWButton name="SignIn" type="submit" />
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
              {items.map((nav, index) => {
                return (
                  <Link to={nav.path}>
                    <li>
                      <a
                        href="#"
                        className=" hover:text-blue-700 hover:underline"
                        aria-current="page"
                      >
                        {nav.name}
                      </a>
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
