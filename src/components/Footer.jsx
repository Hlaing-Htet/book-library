import React from "react";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineGoogle } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import Img from "../assets/Logo.svg";

const Footer = () => {
  return (
    <>
      <footer className=" flex flex-col mt-auto bg-background_gray_color  ">
        <figure className="flex justify-center w-full">
          <img src={Img} className="w-20" />
        </figure>
        <p className="font-sans text-center text-text_color opacity-60">
          There are many variations of passages of Lorem Ipsum available, but
          the majority <br /> have suffered duskam alteration variations of
          passages
        </p>
        <div className="flex justify-center gap-7 my-3">
          <BsFacebook className="text-2xl text-text_color" />
          <AiOutlineTwitter className="text-2xl text-text_color" />
          <AiFillInstagram className="text-2xl text-text_color" />
          <AiOutlineGoogle className="text-2xl text-text_color" />
          <AiFillYoutube className="text-2xl text-text_color" />
        </div>
        <div className="flex justify-center gap-2 md:gap-9 my-5 text-text_color text-sm font-sans font-semibold">
          <span>Trending</span>
          <span>Best Seller</span>
          <span>All Product</span>
          <span>Wishlist</span>
          <span>Blog</span>
          <span>About</span>
        </div>
        <div className=" mt-auto bg-text_color p-3 text-sm  ">
          <p className=" container mx-auto text-primary ">
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
