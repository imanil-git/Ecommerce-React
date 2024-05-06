import React from "react";

const NWButton = (props) => {
  const { name, type, classnames } = props;
  return (
    <button
      type={type}
      className={
        classnames ??
        `text-white bg-[#F74046] font-medium rounded-lg text-sm px-4 py-2 text-center`
      }
    >
      {name}
    </button>
  );
};

export default NWButton;
