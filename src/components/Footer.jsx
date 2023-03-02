import React from "react";
import { FaReact } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className=" bg-slate-900 py-16">
      <div className=" w-[80%] mx-auto border-b-slate-500 border-b-2 flex gap-5 justify-between pb-10 flex-wrap">
        <div className=" text-end text-white flex flex-col gap-3">
          <h3 className=" uppercase text-lg font-medium">solutions</h3>
          <p className="font-light">Marketing</p>
          <p className="font-light">Analytics</p>
          <p className="font-light">Commerce</p>
          <p className="font-light">Data</p>
          <p className="font-light">Cloud</p>
        </div>
        <div className=" text-end text-white flex flex-col gap-3">
          <h3 className=" uppercase text-lg font-medium">support</h3>
          <p className="font-light">Pricing</p>
          <p className="font-light">Documentation</p>
          <p className="font-light">Guides</p>
          <p className="font-light">API Status</p>
        </div>
        <div className=" text-end text-white flex flex-col gap-3">
          <h3 className=" uppercase text-lg font-medium">company</h3>
          <p className="font-light">About</p>
          <p className="font-light">Blog</p>
          <p className="font-light">Jobs</p>
          <p className="font-light">Press</p>
          <p className="font-light">Partners</p>
        </div>
        <div className=" text-end text-white flex flex-col gap-3">
          <h3 className=" uppercase text-lg font-medium">legal</h3>
          <p className="font-light">Chain</p>
          <p className="font-light">Private</p>
          <p className="font-light">Policies</p>
          <p className="font-light">Terms</p>
        </div>
        <div className=" text-white flex flex-col gap-7 mt-5 lg:mt-0">
          <h3 className=" uppercase text-lg font-medium">
            subscribe to our newsletter
          </h3>
          <p className="font-light">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <div className="flex gap-3 items-end">
            <input
              type="text"
              className=" flex-1 rounded text-slate-800 outline-none pl-5 h-full"
              placeholder="Enter your email"
            />
            <button className=" font-medium block w-full mt-4 px-7 py-2 md:w-auto h-full bg-purple-600 rounded-lg text-white">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div className=" w-[90%] md:w-[80%] mx-auto flex justify-between pt-10 text-slate-500 items-center flex-col md:flex-row">
        <p className=" text-xl">2022 Workflow LLC All rights reserved</p>
        <p className=" mt-5 md:mt-0">
          <span>Developed by Swam Htet Aung with React</span>
          <FaReact size={30} className="inline-block ml-3" />
        </p>
      </div>
    </footer>
  );
};

export default Footer;
