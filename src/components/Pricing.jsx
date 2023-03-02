import React from "react";
import { VscCheck } from "react-icons/vsc";
const Pricing = () => {
  return (
    <div
      name="pricing"
      className="min-w-screen min-h-screen flex flex-col items-center py-10 md:py-0 relative">
      <div className=" w-[80%] md:w-[80%] mx-auto text-center z-10 flex flex-col gap-8 pt-10">
        <h2 className=" text-xl md:text-2xl uppercase text-slate-400">
          Pricing
        </h2>
        <h1 className=" text-3xl md:text-4xl font-bold text-white">
          The right price for your research
        </h1>
        <p className=" text-xl md:text-2xl text-slate-400">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis qui
          earum accusantium sunt laboriosam quasi ipsam, repellat reprehenderit.
          Ex ratione, totam pariatur accusamus sunt ad nisi a iusto nulla
          deleniti?
        </p>
      </div>
      <div className=" w-[80%] md:w-[80%] mx-auto flex z-10 gap-10 md:absolute top-[60%] md:top-[40%] mt-10 flex-col md:flex-row">
        <div className=" bg-white p-5 rounded-lg flex-1 shadow-xl">
          <p className=" bg-blue-300 rounded-full px-3 text-blue-700 mb-3 inline-block">
            Standard
          </p>
          <h1>
            <span className=" text-5xl font-bold">$49</span>{" "}
            <span className=" font-medium">/mo</span>
          </h1>
          <p className=" font-light my-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            tenetur!
          </p>
          <div>
            <p className=" font-medium my-4">
              <VscCheck className="inline mr-4" color="green" />
              Lorem, ipsum dolor.
            </p>
            <p className=" my-4">
              <VscCheck className="inline mr-4" color="green" />
              Lorem, ipsum dolor dasil.
            </p>
            <p className=" my-4">
              <VscCheck className="inline mr-4" color="green" />
              Lorem, ipsum dolor dasil.
            </p>
            <p className=" my-4">
              <VscCheck className="inline mr-4" color="green" />
              Lorem, ipsum dolor Lorem, ipsum dolor.
            </p>
            <p className=" my-4">
              <VscCheck className="inline mr-4" color="green" />
              Lorem, ipsum dolor Lorem, ipsum dolor.
            </p>
          </div>
          <button className=" font-medium block w-full mt-5 px-7 py-3 bg-purple-600 rounded-lg text-white  hover:bg-white hover:text-purple-600">
            Get Started
          </button>
        </div>
        <div className=" bg-white p-5 rounded-lg flex-1 shadow-xl">
          <p className=" bg-blue-300 rounded-full px-3 text-blue-700 mb-3 inline-block">
            Enterprise
          </p>
          <h1>
            <span className=" text-5xl font-bold">$89</span>{" "}
            <span className=" font-medium">/mo</span>
          </h1>
          <p className=" font-light my-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            tenetur!
          </p>
          <div>
            <p className=" font-medium my-4">
              <VscCheck className="inline mr-4" color="green" />
              Lorem, ipsum dolor.
            </p>
            <p className=" my-4">
              <VscCheck className="inline mr-4" color="green" />
              Lorem, ipsum dolor dasil.
            </p>
            <p className=" my-4">
              <VscCheck className="inline mr-4" color="green" />
              Lorem, ipsum dolor dasil.
            </p>
            <p className=" my-4">
              <VscCheck className="inline mr-4" color="green" />
              Lorem, ipsum dolor Lorem, ipsum dolor.
            </p>
            <p className=" my-4">
              <VscCheck className="inline mr-4" color="green" />
              Lorem, ipsum dolor Lorem, ipsum dolor.
            </p>
          </div>
          <button className=" font-medium block w-full mt-5 px-7 py-3 bg-purple-600 rounded-lg text-white hover:bg-white hover:text-purple-600">
            Get Started
          </button>
        </div>
      </div>
      <div className=" absolute top-0 left-0 bg-slate-900 w-full h-[70%] z-0"></div>
    </div>
  );
};

export default Pricing;
