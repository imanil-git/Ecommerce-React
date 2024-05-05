import React from "react";
import productImage from "../assets/Panther.jpeg";
import ProductCard from "../components/ProductCard";
import productImage1 from "../assets/Earpod.jpg"
import productImage3 from "../assets/Iphone.jpg"
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoFacebook } from "react-icons/io5";
import { TiSocialTwitter } from "react-icons/ti";

const Home = () => {
  const productData = [
    {
      title: "title of 1st card",
      image: productImage,
      description: "Listen and you will know",
    },
    {
      title: "title of 2nd card",
      image: productImage1,
      description : "I am better than headphone"
    },
    {
      title: "title of 3rd card",
      image: productImage3,
      description : "Good Quality of photo and vidoes"
    },
    {
      title: "title of 4th card",
      image: productImage3,
      description : "Happy costumer"
    },
    {
      title: "title of 4th card",
      image: productImage3,
      description : "Happy costumer"
    }
  ];
  return (
    <>
      <main className="container m-auto">
        <div className="flex justify-around items-center border p-4 rounded-xl">
          <div>
            <div className="flex justify-center">
              <div>
                <h1 className="text-3xl font-semibold font-sans">
                  Get the best product <br /> at you home
                </h1>
                <form action="">
                  <input type="text" className="border rounded-xl w-72" />
                </form>
              </div>
            </div>
          </div>
          <div>
            <img src={productImage} alt="product.webp" className=" w-72 h-72" />
          </div>
          <div>
            <RiInstagramFill />
            <IoLogoFacebook />
            <TiSocialTwitter />
          </div>
        </div>

        <div className="w-full grid grid-cols-3 gap-4">
          {productData.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              title={product.title}
              description={product.description}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
