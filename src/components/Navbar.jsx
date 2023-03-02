import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-scroll";
const Navbar = () => {
  const [menuClicked, setMenuClicked] = useState(false);

  const navItems = [
    {
      to: "home",
      name: "Home",
      offset: 10,
    },
    {
      to: "about",
      name: "About",
      offset: -40,
    },
    {
      to: "support",
      name: "Support",
      offset: -10,
    },
    {
      to: "platforms",
      name: "Platforms",
      offset: 10,
    },
    {
      to: "pricing",
      name: "Pricing",
      offset: -40,
    },
  ];
  return (
    <nav className=" w-screen min-h-[80px] pt-5 md:h-[80] bg-zinc-100 drop-shadow-md shadow-black z-50 fixed">
      <div className=" flex items-center h-full justify-between px-5">
        <Link
          className=" text-4xl font-bold uppercase cursor-pointer"
          to="home"
          smooth={true}>
          Brand.
        </Link>
        <ul className=" hidden md:flex items-center pl-5 w-full h-full justify-between">
          <li>
            <div className=" flex items-center gap-5">
              <div className=" flex items-center gap-5">
                {navItems.map((navItem) => (
                  <Link
                    className=" cursor-pointer"
                    smooth={true}
                    to={`${navItem.to}`}
                    offset={navItem.offset}>
                    {navItem.name}
                  </Link>
                ))}
              </div>
            </div>
            <div></div>
          </li>
          <li>
            <button>Sign In</button>
            <button className=" ml-3 px-7 py-2 bg-purple-600 rounded-lg text-white">
              Sign Up
            </button>
          </li>
        </ul>
        {menuClicked ? (
          <RxCross2
            size={30}
            className=" md:hidden cursor-pointer"
            onClick={() => setMenuClicked(!menuClicked)}
          />
        ) : (
          <AiOutlineMenu
            size={30}
            className=" md:hidden cursor-pointer"
            onClick={() => setMenuClicked(!menuClicked)}
          />
        )}
      </div>
      {menuClicked && (
        <ul className=" md:hidden flex flex-col px-10 w-full h-full justify-start py-5">
          <li>
            <div className=" flex flex-col gap-5">
              <div className=" flex flex-col justify-start gap-5">
                {navItems.map((navItem) => (
                  <Link
                    smooth={true}
                    to={`${navItem.to}`}
                    offset={navItem.offset}
                    className=" pb-3 border-b-2 border-b-slate-300 cursor-pointer"
                    onClick={() => setMenuClicked(!menuClicked)}>
                    {navItem.name}
                  </Link>
                ))}
              </div>
            </div>
          </li>
          <li className="flex flex-col pt-5 gap-5">
            <button className=" border px-7 py-3 rounded-lg text-purple-600 border-purple-400">
              Sign In
            </button>
            <button className=" px-7 py-3 bg-purple-600 rounded-lg text-white">
              Sign Up
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
