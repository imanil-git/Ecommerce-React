import React from "react";
import productImage from '../assets/Panther.jpeg'

const Home = () => {
  return (
    <>
      <main>
        <div className="container m-auto flex justify-between items-center border ">
          <div>
            <h1 className="text-3xl font-semibold font-sans">
              Get the best product <br /> at you home
            </h1>
            <form action="">
              <input type="text" className="border rounded-xl w-72" />
            </form>
          </div>
          <div>
            <img src={productImage} alt="product.webp" className=" w-72 h-72" />
          </div>
          <div>
            icon
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
