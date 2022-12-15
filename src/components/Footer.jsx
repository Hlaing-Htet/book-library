import React from "react";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineGoogle } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";

import { Link } from "react-router-dom";

import Img from "../assets/Logo.svg";

const Footer = () => {
  return (
    <>
      <footer className=" flex flex-col mt-auto bg-background_gray_color  ">
        <figure className="flex justify-center w-full">
          <img src={Img} className="w-20 m-3" />
        </figure>
        <p className="font-sans text-center text-text_color opacity-60">
          There are many variations of passages of Lorem Ipsum available, but
          the majority <br /> have suffered duskam alteration variations of
          passages
        </p>
        <div className="flex justify-center gap-7 my-3">
          <BsFacebook className="text-2xl text-text_color hover:text-primary" />
          <AiOutlineTwitter className="text-2xl text-text_color hover:text-primary" />
          <AiFillInstagram className="text-2xl text-text_color hover:text-primary" />
          <AiOutlineGoogle className="text-2xl text-text_color hover:text-primary" />
          <AiFillYoutube className="text-2xl text-text_color hover:text-primary" />
        </div>
        <div className="flex justify-center gap-2 md:gap-9 my-5 text-text_color text-sm font-sans font-semibold">
          <a href="#tranding">
            <span className="hover:text-primary">Trending</span>
          </a>

          <a href="#bestSeller">
            <span className="hover:text-primary">Best Seller</span>
          </a>
          <Link to={"/shop"}>
            <span className="hover:text-primary">All Products</span>
          </Link>
          <Link to={"/bookmark"}>
            <span className="hover:text-primary">Wishlist</span>
          </Link>

          <Link to={"/about"}>
            <span className="hover:text-primary">About</span>
          </Link>
        </div>
        <div className=" mt-auto bg-text_color p-3 text-sm  ">
          <p className=" container  text-primary ">
            <span className="">@ 2022 All Rights Reserved</span>
            <span className="ml-2 ">Book Library</span>
            <span className="ml-2 ">By</span>
            <span className="">Team4</span>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
