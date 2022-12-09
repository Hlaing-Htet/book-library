import React from "react";
import Members from "../components/Membercard";
import Footer from "../components/Footer";
import Heroimage from "../assets/aboutpageimage.png";

//import { useState } from "react";
//import { memberInfodata } from "../memberdata/data";

const AboutPage = () => {
  return (
    <>
      <div className="h-screen pt-16 overflow-auto ">
        <div className="relative ">
          <figure>
            <img src={Heroimage} />
          </figure>
          <p className="absolute top-1/2 left-1/2 -translate-x-1/2 text-background_color font-title text-2xl font-bold ">
            Read Free Library Books and Download Free.
          </p>
        </div>
        <div className="text-center mt-12 h-56">
          <h2 className="text-2xl font-bold font-title text-primary ">
            Our Mission
          </h2>
          <p className="mt-3 text-lg font-semibold font-sans text-text_color">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br /> Atque at autem veniam fugiat quos rerum ratione
            <br /> accusantium! Fugit molestias amet autem eligendi <br />
            atque quam optio nulla possimus voluptatem, <br />
            ut ratione.
          </p>
        </div>
        <h1 className="text-center font-title font-bold text-2xl text-primary">
          Project Members
        </h1>
        <Members />
        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
