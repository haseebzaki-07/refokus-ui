import React from "react";
import Button from "./Button";
import { motion } from "framer-motion";

const Product = ({ val , mover , count }) => {
  return (
    <motion.div whileHover={{backgroundColor:  "#7443FF"}}  className="w-full py-5 text-white h-[20rem]   ">
      <div  onMouseEnter={()=>{mover(count)}} className="max-w-screen-xl px-[6vw] py-10 mt-10 mx-auto flex  items-center justify-between">
        <h1 className="text-6xl capitalize font-semibold"> {val.title}</h1>
        <div className="dets w-1/3">
          <p className="mb-5">{val.description} </p>
          <div className="flex  gap-5 ">
          
            {val.live && <Button />}
            {val.case && <Button title="Case Study" />}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Product;
