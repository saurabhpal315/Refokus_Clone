import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="max-w-screen-xl p-4 flex items-center justify-between mx-auto  border-zinc-700 border-b-[1px]">
     <div className="nleft flex items-center">
     <img
        src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
        alt=""
      />
      <div className=" hidden  lg:visible links lg:flex gap-14 ml-20">
        {["Home", "Work", "Culture","","News"].map((item, index) => (
          <a className=" font-regular text-sm flex  items-center gap-1 hover:text-zinc-300" key={index} href="#">
            {index===1 && (<span style={{boxShadow:"0 0 0.55em #00FF19"}} className=" inline-block w-[0.3rem] h-[0.3rem] rounded-full bg-[#00FF19]"></span>)}
            {item.length===0?<span className="w-[2px] h-7 bg-zinc-700"></span>:(item)}
          </a>
        ))}
      </div>
     </div>
     <div className=" hidden md:block">

     <Button/>
     </div>
    </div>
  );
};

export default Navbar;
