import Layout from "@/components/Layout";
import React, { useState } from "react";
import { BsCode } from "react-icons/bs";

function EstimateProject() {
  const [question, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQustion] = useState(1);
  return (
    <Layout>
      <div className="md:max-w-6xl mx-auto p-4">
        <div className=" mt-16 md:w-4/6 mx-auto space-y-10 ">
          <h1 className="text-[44px] md:text-[62px] font-black text-slate-900  leading-snug text-start  ">
            Book a free discovery call with us{" "}
          </h1>
          <p className="text-start  leading-9 text-[19px] text-slate-500">
            We will review your submission and get back to you in order to
            schedule a call.
          </p>
        </div>
        <div className=" space-y-9 mt-20 md:w-4/6 mx-auto">
          <span className=" text-2xl ">What is the scope of your project</span>
          <div className=" flex justify-between">
            {[1, 2, 3, 4].map((item) => (
              <div key={item}>
                <label className="form-control relative ">
                  <input
                    type="checkbox"
                    className="checkbox peer absolute top-3 right-3"
                  />
                  <div
                    className="label cursor-pointer w-40 h-40  shadow-md rounded-lg border-2 border-transparent
                     peer-checked:border-primary hover:border-primary peer-checked:text-primary text-center "
                  >
                    <div className=" flex flex-col mx-auto text-slate-600">
                      <BsCode className=" w-16 h-16 mx-auto" />
                      <h1
                        className=" text-lg font-medium
                      "
                      >
                        Development
                      </h1>
                    </div>
                  </div>
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default EstimateProject;
