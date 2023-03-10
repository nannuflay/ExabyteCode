import React, { useState } from "react";
import Link from "next/link";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import { BsBezier2 } from "react-icons/bs";

import { HiOutlineFire } from "react-icons/hi";
import { services } from "@/pages/api/services.js";
import ServiceItem from "./ServiceItem";
import useSticky from "@/hooks/useSticky";
import Router from "next/router";

export default function AppHeader() {
  const [menu, setMenu] = useState(false);
  const [serviceDropdown, setServiceDropdown] = useState(false);
  const { sticky, stickyRef } = useSticky();

  const closeMenu = () => {
    setMenu(false);
  };
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

  function navigateToEstimateProject() {
    Router.push("/estimate-project");
  }
  return (
    <>
      <div
        ref={stickyRef}
        className={` px-4 py-2  z-40 ${
          sticky
            ? "sticky top-0 border-b border-slate-200 backdrop-blur-3xl"
            : ""
        }`}
      >
        <div className="flex justify-between items-center md:max-w-6xl mx-auto">
          <div className=" flex items-center space-x-12">
            <div className="">
              <Link href="/">
                <span className=" text-xl text-slate-900 italic font-lobster flex items-center  select-none">
                  <BsBezier2 className="   w-6 h-6 text-primary rotate-45" />
                  Arch23
                </span>
              </Link>
            </div>
            <div className=" hidden  md:flex items-center md:space-x-2 lg:space-x-4 select-none mt-1">
              {Links.map((link) => (
                <div key={link.title}>
                  <div className=" text-gray-500  hover:bg-primary/10 sm:text-[15px] font-medium  transition duration-150 ease-in-out hover:text-slate-700 p-2 rounded-lg ">
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
          <div className=" flex items-center space-x-3">
            <button
              onClick={navigateToEstimateProject}
              className="  w-54 md:w-auto
               btn btn-outline text-slate-600 hover:bg-slate-900 hover:text-white rounded-full hover:border-slate-900 btn-sm h-10 text-sm font-bold capitalize"
            >
              <HiOutlineFire className=" w-4 h-4 mr-1" />
              Launch your product
            </button>
            <div
              className="flex md:hidden  w-7 h-7"
              onClick={() => setMenu(!menu)}
            >
              {!menu && <FiMenu className=" w-7 h-7 text-slate-900" />}
            </div>
          </div>
        </div>
        {menu && (
          <div>
            <div onClick={closeMenu} className=" absolute top-5 right-3">
              <FiX className=" w-7 h-7 text-slate-700" />
            </div>
            <div className="bg-white h-fit absolute p-4  left-0  top-16 right-0 bottom-0  mx-4 shadow-lg z-40 rounded-lg border border-slate-300">
              <div className="    items-center space-y-6 select-none mt-1">
                {Links.map((link) => (
                  <div key={link.title}>
                    <div className=" text-slate-700/80  hover:bg-primary/10 sm:text-sm lg:text-base transition duration-150 ease-in-out hover:text-slate-700 py-1 px-2 rounded-lg ">
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
          </div>
        )}
      </div>
    </>
  );
}
