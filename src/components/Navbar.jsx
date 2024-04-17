import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-6 flex items-center justify-between border-b-[1px] border-zinc-600" >
     <div className="nleft flex items-center">
     <img
        src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
        alt=""
      />
      <div className="links flex gap-10 ml-20 ">
        {["Home", "Work", "Culture", "", "Home"].map((elem, index) =>
          elem.length === 0 ? (
            <span className="h-7 w-[2px] bg-zinc-700 "></span>
          ) : (
            <a className="text-sm flex items-center gap-1">
              {index === 1 && (
                <span className="inline-block w-1 h-1 bg-green-600 rounded-full "></span>
              )}

              {elem}
            </a>
          )
        )}
      </div>
     </div>
     <Button/>
    </div>
  );
};

export default Navbar;
