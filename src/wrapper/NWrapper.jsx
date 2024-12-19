import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Service from "../pages/Service";
import Contact from "../pages/Contact";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Aboutus from "../pages/Aboutus";

const NWrapper = () => {
  const navItems = [
    {
      name : 'Home',
      path : '/'
    },
    {
      name : 'Products',
      path : '/product'
    },
    {
      name : 'Service',
      path : '/service'
    },
    {
      name : 'Contact',
      path : '/contact'
    },
    {
      name : 'About Us',
      path : '/aboutus'
    }
  ]
  return (
    <>
    <Navbar items = {navItems} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Products />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/aboutus" element={<Aboutus />} />
      </Routes>
    
    <Footer />
    </>
  );
};

export default NWrapper;
