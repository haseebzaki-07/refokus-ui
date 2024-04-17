import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { MdImagesearchRoller } from "react-icons/md";
function Work() {
;

  const [images , setImages] = useState(  [
    {
      url: "https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b415e16156819899272250_Frame%202-p-500.png",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547f2fccd84c1/64cc29f414c45ee4f46aa3ba_01-p-500.jpg",
      top: "57%",
      left: "48%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547f2fccd84c1/64cd6ec7666ac6009cfcb7db_11-p-500.jpg",
      top: "67%",
      left: "53%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547f2fccd84c1/65f112dec7a59534cca51a3d_portfolioCard_cc-01-p-500.webp",
      top: "75%",
      left: "52%",
      isActive: false,
    },
  ])
  const { scrollYProgress } = useScroll();
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
 
    showNHideImage(Math.floor(latest*100));
    console.log(Math.floor(latest*100))
  });

  function imageShow(arr){
    setImages(prev=> prev.map((item, index)=> arr.indexOf(index)  === -1 ? {...item , isActive: false} : {...item , isActive : true} ))
  }

  function  showNHideImage(scrollval) {
    if (scrollval === 0){
      imageShow([])
    }
    else if (scrollval >= 2 && scrollval <7) {
      console.log("pehla dikha kya bandhu" ,scrollval)
      imageShow([0])
    }
    else if (scrollval >= 7 && scrollval <10 ) {
      console.log("pehla dikha kya bandhu aur dusra?", scrollval)
    imageShow([0,1])
    }
    else if (scrollval >= 10 && scrollval <13 ) {
      console.log("pehla dikha kya bandhu aur dusra?", scrollval)
    imageShow([0,1,2])
    }
    else if (scrollval >= 13 && scrollval <16 ) {
      console.log("pehla dikha kya bandhu aur dusra?", scrollval)
    imageShow([0,1,2,3])
    }

  }


  return (
    <div className="w-full  ">
      <div className=" relative max-w-screen-xl mx-auto text-center  ">
        <h1 className="text-[30vw] mx-auto leading-none font-medium select-none">
          work
        </h1>
        <div className="absolute  top-[0vh] w-full h-full">
          {images.map(
            (elem, index) =>
              elem.isActive && (
                <img
                  key={index}
                  className="absolute   w-[18vw] rounded-lg -translate-x-[50%] -translate-y-[50%]"
                  style={{ top: elem.top, left: elem.left }}
                  src={elem.url}
                  alt=""
                />
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default Work;
