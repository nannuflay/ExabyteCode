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
    <div className="relative  w-full min-h-[60vh] md:max-w-6xl mx-auto flex justify-center p-4 flex-wrap ">
      <div className="w-full">
        <Image
          src={"hero.svg"}
          height="400"
          width={600}
          alt="hero"
          className=" hi absolute top-[220px] -left-20 select-none hidden lg:flex"
        />
      </div>
      <div className=" md:text-center flex flex-col space-y-10 items-center  w-full md:w-4/5 mt-10">
        <span className=" text-[49px] md:text-[70px] font-black text-slate-900  leading-snug">
          Build & ship your next digital product.
        </span>
        <div className="mockup-code hidden sm:block bg-slate-900 text-start w mx-auto select-none ">
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
        <div className="flex sm:hidden leading-9 text-slate-600 text-lg">
          <p>
            {" "}
            Finding great software developers is hard. Creating great software
            development teams is even harder. Our already established team can
            help you build and ship digital products from the ground up.{" "}
          </p>
        </div>
        <button className="btn bg-slate-900  hover:bg-slate-900 rounded-full text-white text-sm font-bold capitalize">
          Estimate project
        </button>
      </div>
      <div className="flex flex-col  space-y-10 mt-20 select-none">
        <p className=" text-slate-600 md:text-center tracking-wide text-lg">
          Trusted by multiple companies from all around the world
        </p>

        <div className="flex items-center  justify-between  flex-wrap  ">
          {companies.map((logo) => (
            <Image
              key={logo}
              src={`companies/${logo}`}
              width={130}
              height={20}
              alt="sss"
              className="opacity-50 mr-4 mb-8 hover:scale-105 hover:opacity-100 transform duration-200 ease-out cursor-pointer "
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AppHero;
