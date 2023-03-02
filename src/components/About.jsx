import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className=" flex flex-col justify-center items-center p-10 gap-10 text-center">
      <h1 className=" text-3xl md:text-4xl font-bold my-3">
        Trusted by developers across the world
      </h1>
      <p className=" text-xl md:text-2xl text-black/50">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi error
        inventore enim aut. Unde animi beatae pariatur dolor quas nam.
      </p>
      <div className=" flex gap-5 flex-wrap justify-center">
        <div className="border rounded-md w-full md:w-[230px] lg:w-[450px] py-3 shadow-lg">
          <h1 className="text-3xl md:text-5xl font-bold my-3 text-purple-600 ">
            100%
          </h1>
          <p className=" text-lg  text-black/50">Completion</p>
        </div>
        <div className="border rounded-md w-full md:w-[230px] lg:w-[450px] py-3 shadow-lg">
          <h1 className="text-3xl md:text-5xl font-bold my-3 text-purple-600 ">
            24/7
          </h1>
          <p className=" text-lg  text-black/50">Delivery</p>
        </div>
        <div className="border rounded-md w-full md:w-[230px] lg:w-[450px] py-3 shadow-lg">
          <h1 className="text-3xl md:text-5xl font-bold my-3 text-purple-600 ">
            100K
          </h1>
          <p className=" text-lg  text-black/50">Transactions</p>
        </div>
      </div>
    </div>
  );
};

export default About;
