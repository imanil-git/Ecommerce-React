import React from "react";

const NWButton = (props) => {
  const { name, type, classnames } = props;
  return (
    <button
      type={type}
      className={
        classnames ??
        `text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700x`
      }
    >
      {name}
    </button>
  );
};

export default NWButton;
