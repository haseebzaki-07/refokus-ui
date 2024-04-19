import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

const Products = () => {
  const product = [
    {
      title: "artiqel",
      description:
        "lorem what ever might be the reason i am not in remember that0",
      live: true,
      case: false,
    },
    {
      title: "TIR",
      description:
        "lorem what ever might be the reason i am not in remember that0",
      live: true,
      case: false,
    },
    {
      title: "YIR 2022",
      description:
        "lorem what ever might be the reason i am not in remember that0",
      live: true,
      case: true,
    },
    {
      title: "YAHOO!",
      description:
        "lorem what ever might be the reason i am not in remember that0",
      live: true,
      case: false,
    },
  ];

  const [pos, setpos] = useState(20);

  const mover = (val) => {
    setpos(val * 20);
  };
  return (
    <div className=" relative mt-20 ">
      {product.map((val, index) => (
        <Product val={val} mover={mover} count={index} />
      ))}
      <div className=" absolute top-0 w-full h-full pointer-events-none ">
        <motion.div
          intial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + `rem`, x: "-50%" }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
          className=" window absolute h-[20rem] w-[28rem] bg-white left-[45%] overflow-hidden translate-x-[-50%] "
        >
          <motion.div
            
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className=" window  h-full w-full bg-sky-100  "
          >
           <video className="object-cover w-full h-full " autoPlay muted loop src="https://cdn.refokus.com/refokus-promo/webflow-education-promo.mp4"></video>
          </motion.div>
          <motion.div
        
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className=" window  h-full w-full bg-sky-200  "
          ><img className="object-cover w-full h-full "
          src="https://assets-global.website-files.com/6334198f239547f2fccd84c1/64cc29f414c45ee4f46aa3ba_01-p-500.jpg"
          alt=""
        /></motion.div>
          <motion.div
          
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className=" window  h-full w-full bg-sky-300  "
          > <img className="object-cover  w-full h-full "
          src="https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b2cab86e8df24e528c4441_Frame%201.png"
          alt=""
        /></motion.div>
          <motion.div
         
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className=" window  h-full w-full bg-sky-400  "
          ><img className="object-cover w-full h-full "
          src="https://assets-global.website-files.com/6334198f239547f2fccd84c1/64cd6ecc885579ba1b4ffc97_10.jpg"
          alt=""
        /></motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
