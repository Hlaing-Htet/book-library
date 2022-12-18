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
			className=" bg-background_color h-screen pt-16 overflow-auto">
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
				<p className="mt-3 p-3 text-lg text-semibold font-normal font-sans text-text_color ">
					Our Book Library was established in 2022 with the vision to provide an
					extensive library of books <br /> in digital format for free to every
					one on the Internet. With our Book Library you have <br />
					access to all motivation, educational and various kind of book. Over
					this years
					<br />
					we are still going strong in our mission to provide a valuable service{" "}
					<br />
					to readers. So, come and join our book library today!
				</p>
			</div>
			<h1 className="text-center font-title font-bold text-2xl text-primary mt-40 md:mt-10 ">
				Project Members
			</h1>
			<Members />
			<Footer />
		</motion.div>
	);
};

export default AboutPage;
