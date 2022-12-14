import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
//React router
import { NavLink } from "react-router-dom";
//icons
import { BsBookmarkPlus } from "react-icons/bs";
import { RiShoppingBasketLine } from "react-icons/ri";
import { BsEye } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
//hooks
import { useBookMarkContext } from "../hooks/useBookMarkContext";
import { useBookShopContext } from "../hooks/useBookShopContext";
const variants = {
  hover: {
    x: 0,

    opacity: [0.5, 1],
  },
  initial: {
    x: 0,
    scale: 1,
    opacity: [0.5, 1],
  },
};

const BookCardUI = ({ book: { attributes, id }, book }) => {
  const { books, handleBookMarkAdd, handleBookMarkDelete } =
    useBookMarkContext();
  const { handleBookCount, handleBookCart } = useBookShopContext();
  const [isBookMark, setIsBookMark] = useState(false);
  const [isBuy, setIsBuy] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const bookHover = useRef(null);
  const bookLeave = useRef(null);

  const markedBook = books.filter((book) => {
    return book.id === id;
  });

  const {
    title,
    price,
    discount,
    image: { data },
    // categories,
  } = attributes;
  // const category = categories.data[0].attributes.name;
  const url = `https://book-library-backend-production.up.railway.app${data[0].attributes.url}`;

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
  const bookMark = () => {
    setIsBookMark(true);
    setTimeout(() => {
      setIsBookMark(false);
    }, 2000);
  };
  const buying = () => {
    setIsBuy(true);
    setTimeout(() => {
      setIsBuy(false);
    }, 2000);
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
        className=" relative  "
      >
        <img src={url} className=" w-full object-cover min-h-16 " alt="" />
        <div className=" bg-primary absolute top-0 left-0 p-2">
          <span className=" text-sm">discount</span>{" "}
          <span>{!discount ? 0 : discount}%</span>
        </div>
        {isBookMark && (
          <div className=" bg-primary absolute top-0 right-0 p-2">
            <span className=" text-sm">
              {markedBook.length === 0
                ? "removed from bookmark"
                : "added to bookmark"}
            </span>{" "}
          </div>
        )}
        {isBuy && (
          <div className=" bg-primary absolute top-0 right-0 p-2">
            <span className=" text-sm">ready to checkout</span>{" "}
          </div>
        )}
      </motion.div>
      <motion.div
        variants={variants}
        animate={isHovered ? "hover" : "initial"}
        ref={bookHover}
      >
        <p className=" text-center text-primary mt-3 text-md md:text-lg ">
          {title}
        </p>
        <div className=" flex justify-center gap-5 md:gap-10 my-2 text-sm md:text-lg">
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
          {/* For view Btn start */}
          <NavLink
            // to={
            //   location.pathname == "/"
            //     ? `shop/${category}/${id}`
            //     : location.pathname == "/shop"
            //     ? `${id}`
            //     : `${(location.pathname = `/shop/${category}/${id}`)}`
            // }
            to={`/details/${id}`}
          >
            <button className=" btn btn-circle btn-secondary btn-sm btn-outline">
              <BsEye className=" text-xl" />
            </button>
          </NavLink>
          {/* for view btn end */}
          {/* for bookmark btn start */}
          <button
            onClick={() => {
              markedBook.length === 0
                ? handleBookMarkAdd(id)
                : handleBookMarkDelete(id);
              bookMark();
            }}
            className={`btn btn-circle btn-secondary btn-sm ${
              markedBook.length > 0 ? "btn-primary" : "btn-outline"
            }`}
          >
            <BsBookmarkPlus className=" text-xl" />
          </button>
          {/* for bookmark btn end */}
          <button
            className=" btn btn-circle btn-secondary btn-sm btn-outline"
            onClick={() => {
              handleBookCount();
              handleBookCart(book);
              buying();
            }}
          >
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
      {isBookMark && (
        <div className="toast   z-20">
          <div
            className={`alert alert-info ${
              markedBook.length === 0 ? "bg-text_color" : "bg-primary"
            } text-background_color`}
          >
            <div>
              <span>
                {markedBook.length === 0
                  ? `you unbookmark ${title}`
                  : `you bookmark ${title}`}
              </span>
            </div>
          </div>
        </div>
      )}
      {isBuy && (
        <div className="toast  z-20">
          <div className={`alert alert-info bg-primary text-background_color`}>
            <div>
              <span>you are buying {title}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookCardUI;
