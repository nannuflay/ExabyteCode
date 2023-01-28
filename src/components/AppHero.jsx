import React from "react";
import Image from "next/image";

function AppHero() {
  return (
    <div className=" w-full min-h-[60vh] flex justify-center relative  ">
      <Image
        src={"hero.svg"}
        height="400"
        width={600}
        alt="hero"
        className="opacity-10 absolute top-[220px] left-64 select-none"
      />
      <Image
        src={"hero-dev.svg"}
        height="300"
        width={300}
        alt="hero"
        className="opacity-10 absolute -bottom-32 right-[300px]"
      />
      <div className=" text-center md:max-w-5xl px-10 mt-20">
        <span className=" text-[70px] font-black text-slate-900 leading-tight">
          Build & ship your next digital product.
        </span>
        <div className="mockup-code bg-slate-900 text-start w-3/5 mx-auto mt-16">
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
      </div>
    </div>
  );
}

export default AppHero;
