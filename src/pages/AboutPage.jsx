import React from "react";
import Members from "../components/Membercard";
import Footer from "../components/Footer";
//import { useState } from "react";
//import { memberInfodata } from "../memberdata/data";

const AboutPage = () => {
  return (
    <div className=" bg-background_color h-screen pt-16 overflow-auto">
      <div
        className="hero h-96 "
        style={{ backgroundImage: `url("src/assets/aboutpageimage.png") ` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl font-bold font-title text-background_color">
              Read Free Library Books and Download Free.
            </h1>
          </div>
        </div>
      </div>
      <div className="text-center mt-12 h-56">
        <h2 className="text-2xl font-bold font-title text-primary ">
          Our Mission
        </h2>
        <p className="mt-3 p-3 text-lg font-normal font-sans text-text_color opacity-60 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br /> Atque at autem veniam fugiat quos rerum ratione
          <br /> accusantium! Fugit molestias amet autem eligendi <br />
          atque quam optio nulla possimus voluptatem, <br />
          ut ratione.
        </p>
      </div>
      <h1 className="text-center font-title font-bold text-2xl text-primary mt-10">
        Project Members
      </h1>
      <Members />
      <Footer />
    </div>
  );
};

export default AboutPage;
