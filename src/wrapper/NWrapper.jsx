import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Service from "../pages/Service";
import Contact from "../pages/Contact";
import Navbar from "../components/Navbar";

const NWrapper = () => {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contacts" element={<Contact />} />
      </Routes>
    </>
  );
};

export default NWrapper;
