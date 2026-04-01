import React from "react";

const Button = ({
  text,
  bgColor = "bg-black",
  textColor = "text-white",
  onClick = () => {},
}) => {
  return (
    <button
      onClick={onClick}
      className={`${bgColor} ${textColor} 
      cursor-pointer hover:scale-105 duration-300 
      py-2 px-8 rounded-full relative z-10 dark:bg-red-500`}
    >
      {text}
    </button>
  );
};

export default Button;
