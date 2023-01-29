import React, { useState } from "react";
import Link from "next/link";
import { FiCode, FiChevronDown, FiMenu } from "react-icons/fi";
import { HiOutlineFire } from "react-icons/hi";
import { services } from "@/pages/api/services.js";
import ServiceItem from "./ServiceItem";

export default function AppHeader() {
  const [serviceDropdown, setServiceDropdown] = useState(false);
  const Links = [
    { title: "About", to: "about", hasChild: null },
    {
      title: "Services",
      to: "services",
      hasChild: [
        {
          title: "React.js developement",
          to: "",
        },
      ],
    },
    { title: "Projects", to: "#" },
    { title: "Blog", to: "#" },
    { title: "Resources", to: "#" },
    { title: "Careers", to: "#" },
  ];

  return (
    <div className=" w-full">
      <div className=" md:max-w-7xl w-full mx-auto">
        <div className=" flex justify-between items-center p-3">
          <div className=" flex items-center space-x-12">
            <div className="">
              <Link href="/">
                <span className=" text-2xl text-slate-900 font-medium flex items-center font-paprika tracking-tighter">
                  ExaByte
                </span>
              </Link>
            </div>
            <div className=" hidden  md:flex items-center space-x-6 select-none mt-1">
              {Links.map((link) => (
                <div key={link.title}>
                  <div className=" text-slate-400  hover:bg-primary/10 transition duration-150 ease-in-out hover:text-slate-700 py-1 px-2 rounded-lg ">
                    {!link.hasChild ? (
                      <Link href={link.to}> {link.title}</Link>
                    ) : (
                      <div className="group relative">
                        <div
                          className=" flex items-center cursor-pointer "
                          onClick={() => setServiceDropdown(!serviceDropdown)}
                        >
                          <span>{link.title}</span>
                          <FiChevronDown className=" w-5 h-5" />
                        </div>
                        {serviceDropdown && (
                          <div className="grid  grid-cols-2 space-y-2 absolute -right-[500px] top-10  bg-white z-30 w-[800px] p-4 rounded-lg border border-slate-100 shadow">
                            {services.map(
                              ({ id, title, description, icon }) => (
                                <ServiceItem
                                  key={id}
                                  Icon={icon}
                                  description={description}
                                  title={title}
                                />
                              )
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <button
              className="  w-40 md:w-auto
               btn btn-outline text-slate-600 hover:bg-slate-900 hover:text-white rounded-full hover:border-slate-900 btn-sm h-10 text-sm font-bold capitalize"
            >
              <HiOutlineFire className=" w-4 h-4 mr-1" />
              Launch your product
            </button>
          </div>
          <div className="flex md:hidden">
            <FiMenu className=" w-7 h-7 text-slate-900" />
          </div>
        </div>
      </div>
    </div>
  );
}
