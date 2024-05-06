import React from "react";

const ProductCard = ({ image, title, description, category}) => {
  return (
    <>
      <div className="max-w-sm shrink-0 border p-4 relative rounded-xl">
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
          <p style={{
            background: '#F74046',
            color: 'white',
            width: 'fit-content',
            borderTopRightRadius: '2rem',
            borderBottomRightRadius: '2rem',
            padding: '0px 10px',
            position: 'absolute',
            top: '10px',
            left: '0px'
        }}>{category}</p>
          <h5 className=" text-xl font-bold text-center">{title}</h5>
          <p className="text-center">{description}</p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
