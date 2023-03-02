import React from "react";
import bgImg from "../assets/people.jpg";
import { MdPointOfSale } from "react-icons/md";
import { GrTechnology } from "react-icons/gr";
import { TfiLayoutMediaCenter } from "react-icons/tfi";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaDigitalOcean } from "react-icons/fa";
const Support = () => {
  return (
    <div
      name="support"
      className=" min-w-screen min-h-screen flex flex-col py-10 md:py-0 relative">
      <div className=" absolute bg-black/75 w-full h-[80%]">
        <img
          src={bgImg}
          className="w-full h-full object-cover mix-blend-overlay"
          alt=""
        />
      </div>
      <div className=" px-10 py-14 text-white relative z-0 flex flex-col gap-5 md:gap-10 max-w-[800px] mx-auto my-10">
        <h2 className=" uppercase text-center text-2xl">Support</h2>
        <h1 className=" text-4xl font-bold text-center">
          Finding the right team
        </h1>
        <p className=" text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
          distinctio sint aliquam et numquam non perferendis provident incidunt
          molestias, saepe, neque consequatur labore, tempore eaque quos autem
          accusamus quod laboriosam.
        </p>
      </div>
      <div className="relative z-40 px-10 flex flex-col gap-20 md:gap-5 md:flex-row md:absolute bottom-7 lg:px-32">
        <div className=" bg-white rounded-lg relative shadow-2xl ">
          <div className="bg-purple-600 absolute top-[-40px] p-5 left-[20px]  rounded-md">
            <MdPointOfSale className=" text-white  " size={30} />
          </div>
          <h3 className="pt-10 text-2xl font-bold px-5">Sales</h3>
          <p className="my-5 px-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            veritatis reprehenderit rem molestiae cum pariatur!
          </p>
          <button className="w-full text-start text-purple-600 bg-zinc-100 rounded-b-lg p-5 font-bold">
            Contact Us <AiOutlineArrowRight className="inline-block" />
          </button>
        </div>
        <div className=" bg-white rounded-lg relative shadow-2xl ">
          <div className="bg-purple-600 absolute top-[-40px] p-5 left-[20px]  rounded-md">
            <FaDigitalOcean className=" text-white  " size={30} />
          </div>
          <h3 className="pt-10 text-2xl font-bold px-5">Technical Support</h3>
          <p className="my-5 px-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
            dolores molestiae perferendis. Corrupti, quidem explicabo.
          </p>
          <button className="w-full text-start text-purple-600 bg-zinc-100 rounded-b-lg p-5 font-bold">
            Contact Us <AiOutlineArrowRight className="inline-block" />
          </button>
        </div>
        <div className=" bg-white rounded-lg relative shadow-2xl ">
          <div className="bg-purple-600 absolute top-[-40px] p-5 left-[20px]  rounded-md">
            <TfiLayoutMediaCenter
              className=" text-white  "
              color="white"
              size={30}
            />
          </div>
          <h3 className="pt-10 text-2xl font-bold px-5">Media Inquiries</h3>
          <p className="my-5 px-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            perferendis sequi quaerat consectetur sed repellendus!
          </p>
          <button className="w-full text-start text-purple-600 bg-zinc-100 rounded-b-lg p-5 font-bold">
            Contact Us <AiOutlineArrowRight className="inline-block" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Support;
