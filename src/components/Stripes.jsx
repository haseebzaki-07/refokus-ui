import React from "react";
import Stripe from "./Stripe";

const Stripes = () => {
  const data = [
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg",
      number: 11,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg ",
      number: 2,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg",
      number: 48,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg",
      number: 11,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg",
      number: 2,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg",
      number: 11,
    },
  ];
  return (
    <div className="flex mt-[8vh] ">
      {data.map((elem, index) => (
        <div className="flex w-[16.66vw] h-[10vh] border items-center justify-between p-4">
          <span >
            <img
              className=" object-cover "
              src={elem.url}
              alt=""
            />
          </span>
          <span className="font-semibold">{elem.number}</span>
        </div>
      ))}
    </div>
  );
};

export default Stripes;
