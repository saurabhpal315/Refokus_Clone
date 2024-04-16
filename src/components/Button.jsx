import React from "react";
import { IoIosReturnRight } from "react-icons/io";

const Button = ({ title = "Get Started" }) => {
  return (
    <div className="mx-auto lg:m-0 cursor-pointer hover:scale-110 hover:px-6 transition-all duration-200  w-40 px-4 py-2 bg-zinc-100 text-black rounded-full flex items-center justify-between ">
      <span className="text-[0.65rem] sm:text-xs lg:text-sm font-medium">{title}</span>
      <IoIosReturnRight className="hidden sm:block" />
    </div>
  );
};

export default Button;
