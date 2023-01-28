import React from "react";
import Link from "next/link";
import { FiCode, FiChevronDown, FiMenu } from "react-icons/fi";
import { HiOutlineFire } from "react-icons/hi";
import { BsDot, BsMenuApp } from "react-icons/bs";

export default function AppHeader() {
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
                <span className=" text-2xl text-slate-900 font-medium flex items-center">
                  <FiCode className=" w-7 h-7 text-primary mr-1 mt-1" />
                  ExaByte
                </span>
              </Link>
            </div>
            <div className=" hidden  md:flex items-center space-x-6 ">
              {Links.map((link) => (
                <div key={link.title}>
                  <div className=" text-gray-400 hover:bg-red-50 transition duration-150 ease-in-out hover:text-gray-600 py-1 px-2 rounded-lg ">
                    {!link.hasChild ? (
                      <Link href={link.to}> {link.title}</Link>
                    ) : (
                      <div className=" flex items-center cursor-pointer">
                        <span>{link.title}</span>
                        <FiChevronDown className=" mt-1" />
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
               btn btn-outline text-slate-900 hover:bg-slate-900 hover:text-white rounded-full hover:border-slate-900"
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
