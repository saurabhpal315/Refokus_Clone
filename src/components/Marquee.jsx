import React from "react";

export const Marquee = ({ imagesUrls, val }) => {
  return (
    <div className={`flex w-full py-8 gap-20 whitespace-nowrap ${val==0?('forward'):('backward')}`}>
 

      {imagesUrls.map((url, index) => (
        <img key={index} src={url} className={`w-28 flex-shrink-0 `} />
      ))}
      {imagesUrls.map((url, index) => (
        <img key={index} src={url} className={`flex-shrink-0 `} />
      ))}
      
    </div>
  );
};
