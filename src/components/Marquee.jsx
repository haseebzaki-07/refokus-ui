import React from "react";
import { motion } from "framer-motion";

const Marquee = ({ imagesUrls, direction }) => {
  return (
    <div className="flex gap-20 mt-10  w-full overflow-hidden">
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", repeat: Infinity, duration: 15 }}
        className="flex flex-shrink-0 gap-20 py-2  "
      >
        {imagesUrls.map((item) => (
          <img className="w-[10vw] h-[5vh]" src={item} alt="" />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", repeat: Infinity, duration: 15 }}
        className="flex flex-shrink-0 gap-20 py-2  "
      >
        {imagesUrls.map((item) => (
          <img className="w-[10vw] h-[5vh]" src={item} alt="" />
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
