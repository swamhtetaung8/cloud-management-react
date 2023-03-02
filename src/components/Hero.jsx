import React from "react";
import heroImg from "../assets/cyber-bg.png";
import { MdOutlineSecurity, MdDashboard, MdSecurity } from "react-icons/md";
import { TbApi } from "react-icons/tb";
import { AiOutlineCloudUpload } from "react-icons/ai";
const Hero = () => {
  return (
    <div
      name="home"
      className=" w-screen h-screen relative flex justify-center">
      <div className=" w-full h-full px-5 md:px-10 flex flex-col md:flex-row md:items-center justify-center md:justify-between gap-10">
        <div className=" md:flex-1">
          <p className=" mt-5 md:mt-0">Unique Sequencing & Production</p>
          <h1 className=" text-4xl md:text-6xl font-bold my-3">
            Cloud Management
          </h1>
          <p>This is our Tech brand.</p>
          <button className=" font-medium block w-full mt-4 px-7 py-2 md:w-auto bg-purple-600 rounded-lg text-white">
            Get Started
          </button>
        </div>
        <div className=" md:flex-1">
          <img src={heroImg} className=" w-full" alt="" />
        </div>
      </div>
      <div className=" absolute border shadow-xl bottom-[5%] p-8 bg-white rounded-lg w-[350px] sm:w-[380px] md:w-[600px] lg:w-[800px]">
        <p className=" text-center mb-5">Data Services</p>
        <div className="flex justify-between items-center gap-5 flex-wrap">
          <p className=" flex items-center gap-2">
            <MdSecurity className=" text-purple-600" />
            <span className=" text-slate-500">App Security</span>
          </p>
          <p className=" flex items-center gap-2">
            <MdDashboard className=" text-purple-600" />
            <span className=" text-slate-500">Dashboard Design</span>
          </p>
          <p className=" flex items-center gap-2">
            <AiOutlineCloudUpload className=" text-purple-600" />
            <span className=" text-slate-500">Cloud Data</span>
          </p>
          <p className=" flex items-center gap-2">
            <TbApi className=" text-purple-600" />
            <span className=" text-slate-500">API</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
