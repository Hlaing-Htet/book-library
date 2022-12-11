import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";
import { useBookMarkContext } from "../hooks/useBookMarkContext";
//icons
import { BsBookmarkPlus } from "react-icons/bs";
import { RiShoppingBasketLine } from "react-icons/ri";
import { BsEye } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";

const variants = {
  hover: {
    x: 0,
    scale: [1, 1.1, 1],
    // rotateZ: [10, -10, 0],
    opacity: [0.5, 1],
  },
  initial: {
    x: 0,
    scale: 1,
    // rotateZ: [10, -10, 0],
    opacity: [0.5, 1],
  },
};

const BookCardUI = ({ book: { attributes, id } }) => {
  const { books, handleBookMarkAdd } = useBookMarkContext();

  const markedBook = books.filter((book) => {
    return book.id === id;
  });

  const location = useLocation();

  const {
    title,
    price,
    discount,
    image: { data },
    categories,
  } = attributes;
  const category = categories.data[0].attributes.name;
  const url = `http://localhost:1337${data[0].attributes.url}`;

  const [isHovered, setIsHovered] = useState(false);
  const bookHover = useRef(null);
  const bookLeave = useRef(null);
  const discountPrice = (price - (price * discount) / 100).toFixed(2);
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
      className=" col-span-1 bg-background_color "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        variants={variants}
        animate={isHovered ? "hover" : "initial"}
        className=" relative"
      >
        <img src={url} className=" w-full object-cover h-96" alt="" />
        <div className=" bg-primary absolute top-0 left-0 p-2">
          <span className=" text-sm">discount</span>{" "}
          <span>{!discount ? 0 : discount}%</span>
        </div>
      </motion.div>
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
          <NavLink
            to={location.pathname == "/" ? `shop/${category}/${id}` : `${id}`}
          >
            <button className=" btn btn-circle btn-secondary btn-sm btn-outline">
              <BsEye className=" text-xl" />
            </button>
          </NavLink>

          <button
            onClick={() => {
              markedBook.length === 0 && handleBookMarkAdd(id);
            }}
            className={`btn btn-circle btn-secondary btn-sm ${
              markedBook.length > 0 ? "btn-primary" : "btn-outline"
            }`}
          >
            <BsBookmarkPlus className=" text-xl" />
          </button>

          <button className=" btn btn-circle btn-secondary btn-sm btn-outline">
            <RiShoppingBasketLine className=" text-xl" />
          </button>
        </div>
        <div className=" flex justify-center gap-1 ">
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
