import React from "react";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineGoogle } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <footer className=" bg-background_gray_color  mt-auto  ">
        <div className=" h-60 mt-20 ">
          <figure className="flex justify-center w-full">
            <img src="src/assets/Logo.svg" className="w-20" />
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
          <div className="flex justify-center gap-9 my-5 text-text_color text-sm font-sans font-semibold ">
            <span>Trending</span>
            <span>Best Seller</span>
            <span>All Product</span>
            <span>Wishlist</span>
            <span>Blog</span>
            <span>About</span>
          </div>
          <div className=" bg-text_color text-sm  p-3  ">
            <div className="container mx-auto flex justify-between ">
              <p>
                <span className="">@ 2022 All Rights Reserved</span>
                <span className="ml-2 text-primary">Book Library</span>
                <span className="ml-2 ">By</span>
                <span className="text-primary">Team4</span>
              </p>
              <figure className="flex">
                <img src="src/assets/pay.png" />
                <img src="src/assets/Frame.png" />
                <img src="src/assets/Frame19.png" />
                <img src="src/assets/Frame.png" />
                <img src="src/assets/pay.png" />
              </figure>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
