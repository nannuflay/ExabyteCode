import Layout from "@/components/Layout";
import Image from "next/image";
import React from "react";
import { timeline } from "./api/timeline";

export default function about() {
  return (
    <Layout title={"About"}>
      <div className="md:max-w-6xl mx-auto p-4">
        <div className=" mt-16 md:w-3/5 mx-auto space-y-10 ">
          <h1 className="text-[44px] md:text-[70px] font-black text-slate-900  leading-snug text-start md:text-center ">
            Meet Our Team
          </h1>
          <p className="text-start md:text-center leading-9 text-[19px] text-slate-500">
            When we started in 2021, we were just 2 dedicated developers with a
            lot of passion for coding. Our attitude hasn`t changed—but since
            then, we`ve grown to be a team of 15+ team members, 50+ projects,
            capable to handle all sorts of technical and non-technical
            challenges. From the first concept to the production-ready release.
          </p>
        </div>
        <div className=" w-full  md:bg-gradient-to-tr from-slate-50 via-slate-50 to-slate-100 rounded-xl p-1">
          <div>
            {timeline.map((item) => (
              <div
                key={item.step}
                className={`flex justify-between items-start md:mt-32 mt-10 md:px-6 flex-wrap ${
                  item.step == 2 || item.step == 4
                    ? "flex-row-reverse"
                    : "flex-row"
                }`}
              >
                <div className=" md:w-[450px] my-20 md:mb-0  w-5/6 relative h-72 mx-auto md:mx-0 md:h-[450px]">
                  <Image src={item.imagePath} alt={item.title} fill />
                </div>
                <div className=" md:w-5/12  ">
                  <div
                    className={`w-10 h-10 rounded-full flex justify-center items-center text-white text-lg font-bold ${
                      item.step !== 4 ? "bg-primary " : "bg-slate-900"
                    }`}
                  >
                    <span>{item.step}</span>
                  </div>
                  <div className=" space-y-10 mt-2">
                    <h1 className="  text-4xl font-bold text-slate-900">
                      {item.title}
                    </h1>
                    <div
                      className=" text-[19px] text-slate-700 leading-9 tracking-wider"
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
