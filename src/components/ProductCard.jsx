import React from "react";

const ProductCard = ({ image, title, description }) => {
  return (
    <>
      <div className="max-w-sm border p-4">
        <div className="flex justify-center bg-slate-300">
          <img
            src={image}
            style={{
              width: "300px",
              height: "300px",
            }}
            alt="image-section.webp"
          />
        </div>
        <div>
          <h5 className=" text-xl font-bold text-center">{title}</h5>
          <p className="text-center">{description}</p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
