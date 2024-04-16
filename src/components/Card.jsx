import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
const Card = ({ width, start, para ,index}) => {
  return (
    <div className={`${index===0?("hover:bg-zinc-700"):("hover:bg-violet-600")} hover:p-6 transition-all duration-200  w-1/2 bg-zinc-800 p-5 rounded-xl  ${width} min-h-[30rem] flex flex-col justify-between`}>
      <div>
        <div className="w-full flex justify-between items-center">
          <h3>{index==0?('Up Next: News'):('Get in Touch')}</h3>
          <IoIosArrowRoundForward />
        </div>
        <h1 className="text-3xl font-medium mt-5">{index==1?( <>Let's get to it,<br/>together.</>):( <>Insights and behind <br /> the scenes</>)}</h1>
      </div>

      <div className="down w-full">
        {start && (
          <>
            <h1 className="text-6xl font-semibold tracking-tight leading-none">
              Start a project
            </h1>
            <button className="rounded-full py-2 px-5 mt-5 border-[1px] border-zinc-500 ">
              Contact Us
            </button>
          </>
        )}
        {
            para && (<>
            
            <p className="text-sm text-zinc-500 font-medium ">
                Explore what drives our team.
        </p>
            </>)
        }
        
      </div>
    </div>
  );
};

export default Card;
