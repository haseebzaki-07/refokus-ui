import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";
const Card = ({ width, start, para, hover="false" ,padding }) => {
  return (
    <motion.div whileHover={{  backgroundColor : hover === "true" && "#7443FF", padding:" 25px" }} className={`${width} flex flex-col justify-between  bg-zinc-800 rounded-xl p-5`}>
      <div className="w-full flex items-center justify-between ">
        <h3>One Heading</h3>
        <IoIosArrowRoundForward />
      </div>
      <h1 className="text-2xl mt-10">Whatever Heading</h1>

      <div className="down w-full mt-40 " >
       
       {start === true &&(
        < >
        <h1 className="text-6xl font-semibold tracking-tighter leading-none">
         Start a Project
       </h1>
       <button className="rounded-full mt-5 py-2 px-5 border-[1px] border-zinc-50">
         Contact Us
       </button>
        </>
         
       
       )}
       {para === true &&(
        <p className="text-sm text-zinc-500 font-medium">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat,
        molestias.
      </p> 

       )}

        
      </div>
    </motion.div>
  );
};

export default Card;
