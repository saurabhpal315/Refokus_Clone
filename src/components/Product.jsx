
import { useState } from "react";
import Button from "./Button";

const Product = ({val,mover,index,bkimg}) => {
  
  const [backgroundImage, setBackgroundImage] = useState(null);

  const handleMouseEnter = () => {
   

      setBackgroundImage(bkimg[index]);
    
  };

  const handleMouseLeave = () => {
    setBackgroundImage(null); 
  };

  return (
    <div className="w-full py-20 h-[23rem] text-white"   style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover'}} onMouseEnter={handleMouseEnter}  onMouseLeave={handleMouseLeave}>
      <div onMouseEnter={()=>{mover(index)}}  className=" max-w-screen-xl mx-auto flex flex-col gap-3 lg:flex-row lg:px-10 items-center justify-between" >
        <h1 className="text-6xl capitalize font-medium">{val.title}</h1>
        <div className="dets w-1/3">
          <p className="mb-10 text-center lg:text-start">
           {val.description}
          </p>
          <div className="flex items-center gap-3">

          {val.live && <Button title='Live Website'/>}
          {val.case && <Button title='Case Study'/>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
