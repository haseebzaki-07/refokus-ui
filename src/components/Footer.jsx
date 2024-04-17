import React from "react";

const Footer = () => {
  return (
    <div className="w-full p-10">
      <div className="max-w-screen-xl mx-auto flex  pl-10  gap-32 ">
        <div className="basis-1/2">
          <h1 className="text-[11rem] font-semibold tracking-tight  leading-none">
            refokus.
          </h1>
        </div>
        <div className="basis-1/2 flex">
            <div className="basis-1/3">
            <h4 className="mb-10 text-zinc-500">socials</h4>
          {["instagram", "twitter (x?)", "linkedin"].map((item, index) => (
            <a className="text-zinc-600 block capitalize">{item}</a>
          ))}
            </div>
            <div className="basis-1/3">
            <h4 className="mb-10 text-zinc-500">socials</h4>
          {["instagram", "twitter (x?)", "linkedin"].map((item, index) => (
            <a className="text-zinc-600 block capitalize">{item}</a>
          ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
