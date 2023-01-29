import React from "react";
import Image from "next/image";

function AppHero() {
  const companies = [
    "logoCreativeTim.svg",
    "logoJobboost.svg",
    "logoJuice.svg",
    "logoLegacy.svg",
    "logoLicenseware.svg",
    "logoRunecast.svg",
  ];
  return (
    <div className=" w-full min-h-[60vh] flex justify-center relative flex-wrap ">
      <div className="relative w-full">
        <Image
          src={"hero.svg"}
          height="400"
          width={600}
          alt="hero"
          className="opacity-10 absolute top-[220px] left-64 select-none hidden md:flex"
        />
        <Image
          src={"hero-dev.svg"}
          height="300"
          width={300}
          alt="hero"
          className="opacity-10 absolute top-[390px] right-[300px] hidden md:flex"
        />
      </div>
      <div className=" md:text-center flex flex-col space-y-10 items-center  w-full md:max-w-5xl p-4 md:px-10 mt-10">
        <span className=" text-[49px] md:text-[70px] font-black text-slate-900 tracking-[-5px] leading-snug">
          Build & ship your next digital product.
        </span>
        <div className="mockup-code bg-slate-900 text-start w-3/5 mx-auto ">
          <pre data-prefix=">" className="text-white">
            <code>Finding great software developers is hard.</code>
          </pre>
          <pre data-prefix=">" className="text-white">
            <code>
              Creating great software development teams is even harder.
            </code>
          </pre>
          <pre data-prefix=">" className="text-white">
            <code>
              Our team can help you{" "}
              <span className=" text-primary">build & ship</span> digital
              products.!
            </code>
          </pre>
        </div>
        <button className="btn bg-slate-900  hover:bg-slate-900 rounded-full text-white text-sm font-bold capitalize">
          Estimate project
        </button>
      </div>
      <div className=" w-full flex  flex-col text-center space-y-10 mt-20 select-none md:max-w-7xl p-4">
        <p className=" text-black tracking-wide text-lg">
          Trusted by multiple companies from all around the world
        </p>
        <div className="flex justify-between place-items-center  ">
          {companies.map((logo) => (
            <Image
              key={logo}
              src={`companies/${logo}`}
              width={130}
              height={20}
              alt="sss"
              className="  opacity-50 hover:scale-105 hover:opacity-100 transform duration-200 ease-out cursor-pointer "
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AppHero;
