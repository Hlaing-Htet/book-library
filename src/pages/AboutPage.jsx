import React from "react";
import Members from "../components/Membercard";
import Footer from "../components/Footer";
//import { useState } from "react";
//import { memberInfodata } from "../memberdata/data";
import heroPhoto from "../assets/aboutpageimage.png";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.02 }}
      className=" bg-background_color h-screen pt-16 overflow-auto"
    >
      <div className=" relative h-96">
        <img src={heroPhoto} alt="" className=" w-full h-full object-cover" />
        <div className="max-w-md absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
          <h1 className="mb-5 text-4xl text-center font-bold font-title text-background_color shadow-lg">
            Read Free Library Books and Download Free.
          </h1>

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
    </motion.div>
  );
};

export default AboutPage;
