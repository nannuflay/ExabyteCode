import { services } from "@/pages/api/services";
import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

function AppFooter() {
  return (
    <div className=" md:max-w-6xl mx-auto w-full pb-10 space-y-6">
      <footer className="footer  bg-slate-50 text-base-content">
        <div>
          <span className=" text-[16px] uppercase font-bold tracking-wider font-sans text-gray-500 mb-4 ">
            Services
          </span>
          <div className="  space-y-6 flex flex-col text-[17px] text-gray-500">
            {services.map((service) => (
              <a key={service.id} className="link link-hover">
                {service.title}
              </a>
            ))}
          </div>
        </div>
        <div>
          <span className="text-[16px] uppercase font-bold tracking-wider font-sans text-gray-500 mb-4">
            Company
          </span>
          <div className=" space-y-6 flex flex-col text-[17px] text-gray-500">
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </div>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
        <div>
          <span className="footer-title">Newsletter</span>
          <div className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16"
              />
              <button className="btn  bg-secondary absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>
      <div className=" border-b w-full" />
      <div className=" flex items-center justify-between">
        <span className=" text-gray-500 text-sm">
          © 2023 Arch23. All rights reserved.
        </span>
        <div className=" flex items-center space-x-3 text-gray-500">
          <FaInstagram className=" w-5 h-5 hover:text-secondary cursor-pointer transition-all" />
          <FaLinkedin className=" w-5 h-5 hover:text-secondary cursor-pointer transition-all" />
          <FaGithub className=" w-5 h-5 hover:text-secondary cursor-pointer transition-all" />
          <FaTwitter className=" w-5 h-5 hover:text-secondary cursor-pointer transition-all" />
        </div>
      </div>
    </div>
  );
}

export default AppFooter;
