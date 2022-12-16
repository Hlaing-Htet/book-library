import React from "react";
import { NavLink } from "react-router-dom";
//image
import Logo from "../assets/Logo.svg";

//icons
import { BsPersonFill } from "react-icons/bs";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
//hook
import { useBookShopContext } from "../hooks/useBookShopContext";
const NavBar = () => {
  const { bookCount } = useBookShopContext();

  return (
    <nav className=" fixed w-full top-0 md:px-4 bg-background_gray_color z-10">
      <div className=" container mx-auto">
        <div className=" flex items-center justify-evenly md:justify-between">
          <div className="">
            <NavLink to={"/"}>
              <img src={Logo} alt="logo" className=" w-16 p-2" />
            </NavLink>
          </div>
          <div className=" w-2/5 md:w-1/4  flex justify-between">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? " text-primary font-bold" : " text-text_color"
              }
            >
              Home
            </NavLink>
            <NavLink
              to={"/shop"}
              className={({ isActive }) =>
                isActive ? " text-primary font-bold" : " text-text_color"
              }
            >
              Shop
            </NavLink>
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                isActive ? " text-primary font-bold" : " text-text_color"
              }
            >
              About
            </NavLink>
          </div>
          <div className="flex items-center  gap-2 md:gap-5">
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
                <span className="indicator-item badge badge-primary">
                  {bookCount}
                </span>
                <button className=" text-text_color">
                  <FaShoppingCart className=" text-2xl" />
                </button>
              </NavLink>
            </div>
            <div className="indicator">
              <NavLink to={"/profile"} className="h-6">
                <button className=" text-text_color">
                  <BsPersonFill className=" text-2xl" />
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
