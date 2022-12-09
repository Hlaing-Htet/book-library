import React from "react";
import { NavLink } from "react-router-dom";
//image
import Logo from "../assets/Logo.svg";
//icons
import { BiSearchAlt2 } from "react-icons/bi";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
const NavBar = () => {
  return (
    <nav className=" fixed w-full top-0 bg-background_gray_color z-10">
      <div className=" container mx-auto">
        <div className=" flex items-center justify-between">
          <div className="">
            <NavLink to={"/"}>
              <img src={Logo} alt="logo" className=" h-16" />
            </NavLink>
          </div>
          <div className=" w-1/4 flex justify-between">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? " text-primary" : " text-text_color"
              }
            >
              Home
            </NavLink>
            <NavLink
              to={"/shop"}
              className={({ isActive }) =>
                isActive ? " text-primary" : " text-text_color"
              }
            >
              Shop
            </NavLink>
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                isActive ? " text-primary" : " text-text_color"
              }
            >
              About
            </NavLink>
          </div>
          <div className="flex items-center  gap-5">
            {/* Search Btn */}
            <div>
              <BiSearchAlt2 className=" text-text_color text-2xl" />
            </div>
            {/* BookMark Btn */}
            <div className="indicator ">
              <NavLink to={"/bookmark"} className="h-6">
                <span className="indicator-item  badge-primary"></span>
                <button className=" text-text_color">
                  <BsFillBookmarkHeartFill className=" text-2xl" />
                </button>
              </NavLink>
            </div>

            {/* Shopping Btn */}
            <div className="indicator">
              <NavLink to={"/checkout"} className="h-6">
                <span className="indicator-item badge badge-primary">2</span>
                <button className=" text-text_color">
                  <FaShoppingCart className=" text-2xl" />
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
