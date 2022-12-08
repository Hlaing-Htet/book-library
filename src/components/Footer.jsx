import React from "react";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineGoogle } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
const Footer = () => {
  return (
    <footer className=" bg-background_gray_color h-52 mt-20">
      <figure className="flex justify-center w-full">
        <img src="src/assets/Logo.svg" className="w-20"/>
      </figure>
      <p className="font-sans text-center text-text_color">
        There are many variations of passages of Lorem Ipsum available, but the
        majority <br /> have suffered duskam alteration variations of passages
      </p>
      <div className="flex justify-center gap-7 my-3">
        <BsFacebook className="text-2xl text-text_color" />
        <AiOutlineTwitter className="text-2xl text-text_color" />
        <AiFillInstagram className="text-2xl text-text_color" />
        <AiOutlineGoogle className="text-2xl text-text_color" />
        <AiFillYoutube className="text-2xl text-text_color" />
      </div>
      <div className="bg-text_color mt-10 h-6">
        <h1>hello</h1>

      </div>
    </footer>
  );
};

export default Footer;
