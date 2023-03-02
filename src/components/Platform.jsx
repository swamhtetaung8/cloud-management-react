import React from "react";
import { GrNotification } from "react-icons/gr";
const Platform = () => {
  const noti = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div name="platforms" className=" md:py-40 md:px-20 px-10 py-20">
      <h1 className=" text-center text-4xl font-bold">All-In-One Platform</h1>
      <p className=" text-black/60 max-w-4xl mx-auto my-16">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum itaque
        atque quaerat, molestias voluptate tempore
      </p>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:w-[90%] lg:w-[80%] mx-auto">
        {noti.map((indi) => (
          <div className="flex gap-5 items-start">
            <GrNotification size={40} className="text-green-500" />
            <div>
              <h3 className=" font-bold text-2xl mb-3">Notifications</h3>
              <p className=" font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                recusandae excepturi repudiandae veritatis sequi laborum aut
                ipsa doloremque, alias fugiat?
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Platform;
