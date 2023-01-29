import React, { useState } from "react";

function ServiceItem({ Icon, title, description }) {
  const [hover, setHover] = useState(false);

  const mouseOver = (event) => {
    setHover(true);
  };

  const mouseOut = (event) => {
    setHover(false);
  };
  return (
    <div
      onMouseOut={mouseOut}
      onMouseOver={mouseOver}
      className={`flex items-start justify-center w-full space-x-6 cursor-pointer hover:bg-gray-50 p-4 rounded`}
    >
      <div className=" w-16 h-16 bg-slate-100 flex justify-center items-center rounded-lg group ">
        <Icon
          className={` w-7 h-7 transition-all transform  duration-300 ${
            hover ? " scale-125 text-red-500" : "text-slate-400"
          }`}
        />
      </div>
      <div className=" w-5/6">
        <h1 className=" text-lg font-bold text-slate-800">{title}</h1>
        <p className=" text-gray-400  text-sm">{description}</p>
      </div>
    </div>
  );
}

export default ServiceItem;
