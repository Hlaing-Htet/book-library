import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
//icons
import { BsBookmarkPlus } from "react-icons/bs";
import { RiShoppingBasketLine } from "react-icons/ri";
import { BsEye } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";

const variants = {
  hover: {
    x: 0,
    scale: [1.1, 1],
    opacity: [0, 1],
  },
  initial: {
    x: 0,
    scale: 1,
    opacity: [0, 1],
  },
};

const BookCardUI = ({ book: { image, title, price, discount } }) => {
  const [isHovered, setIsHovered] = useState(false);
  const bookHover = useRef(null);
  const bookLeave = useRef(null);
  const discountPrice = price - (price * discount) / 100;
  const handleMouseEnter = () => {
    bookHover.current.className = "hidden";
    bookLeave.current.className = "block";
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    bookHover.current.className = "block";
    bookLeave.current.className = "hidden";
    setIsHovered(false);
  };
  return (
    <div
      className=" col-span-1 bg-background_color"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className=" relative">
        <img src={image} className=" w-full" alt="" />
        <div className=" bg-primary absolute top-0 left-0 p-2">
          <span className=" text-sm">discount</span> <span>{discount}%</span>
        </div>
      </div>
      <motion.div
        variants={variants}
        animate={isHovered ? "hover" : "initial"}
        ref={bookHover}
      >
        <p className=" text-center text-primary mt-3">{title}</p>
        <div className=" flex justify-center gap-10 my-2">
          <span className=" text-primary">${discountPrice}</span>
          <span className=" text-text_color line-through">${price}</span>
        </div>
      </motion.div>
      {/* While Hover */}
      <motion.div
        variants={variants}
        animate={isHovered ? "hover" : "initial"}
        ref={bookLeave}
        className="hidden"
      >
        <div className=" flex justify-center gap-2 my-3">
          <button className=" btn btn-circle btn-secondary btn-sm btn-outline">
            <BsEye className=" text-xl" />
          </button>
          <button className=" btn btn-circle btn-secondary btn-sm btn-outline">
            <BsBookmarkPlus className=" text-xl" />
          </button>
          <button className=" btn btn-circle btn-secondary btn-sm btn-outline">
            <RiShoppingBasketLine className=" text-xl" />
          </button>
        </div>
        <div className=" flex justify-center gap-1 mb-2">
          <AiOutlineStar className=" text-primary " />
          <AiOutlineStar className=" text-primary " />
          <AiOutlineStar className=" text-primary " />
          <AiOutlineStar className=" text-primary " />
          <AiOutlineStar className=" text-primary " />
        </div>
      </motion.div>
    </div>
  );
};

export default BookCardUI;
