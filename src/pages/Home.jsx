import React from "react";
import image from "../assets/Panther.jpeg"
import productImage from "../assets/laptop.jpg";
import ProductCard from "../components/ProductCard";
import productImage1 from "../assets/Earpod.jpg"
import productImage3 from "../assets/Iphone.jpg"
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoFacebook } from "react-icons/io5";
import { TiSocialTwitter } from "react-icons/ti";
import { FaSearch } from "react-icons/fa";

const Home = () => {
  const productData = [
    {
      title: "title of 1st card",
      image: productImage,
      description: "Listen and you will know",
      category : "New"
    },
    {
      title: "title of 2nd card",
      image: productImage1,
      description : "I am better than headphone",
      category : "New"
    },
    {
      title: "title of 3rd card",
      image: productImage3,
      description : "Good Quality of photo and vidoes",
      category : "New"
    },
    {
      title: "title of 4th card",
      image: productImage3,
      description : "Happy costumer",
      category : "New"
    },
    {
      title: "title of 4th card",
      image: productImage3,
      description : "Happy costumer",
      category : "New"
    }
  ];
  return (
    <>
      <main className="container m-auto">
        <div className="flex justify-around items-center border p-4 rounded-xl mb-8">
          <div>
            <div className="flex justify-center">
              <div className="relative">
                <h1 className="text-3xl font-bold font-sans mb-5">
                  Get the best product <br /> at you home
                </h1>
                <form action="">
                  <input type="text" placeholder="search..." className="border-2 border-red-500 rounded-3xl w-72 py-2 pl-10 focus:outline-red-700 font-sans" />
                  <FaSearch className=" text-slate-300 text-xl pointer-events-none" style={{
                    position : "absolute",
                    top: "105",
                    left: "15"
                  }} />
                </form>
              </div>
            </div>
          </div>
          <div>
            <img src={image} alt="product.webp" className=" w-72 h-72" />
          </div>
          <div>
            <RiInstagramFill />
            <IoLogoFacebook />
            <TiSocialTwitter />
          </div>
        </div>

        <div className="w-full grid grid-cols-3 gap-4 mb-8">
          {productData.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              title={product.title}
              description={product.description}
              category={product.category}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
