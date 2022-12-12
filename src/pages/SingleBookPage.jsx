import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

//service
import GetSingleBook from "../services/GetSingleBook";
//icons
import { BsBookmarkPlus } from "react-icons/bs";
import { RiShoppingBasketLine } from "react-icons/ri";
//hooks
import { useBookShopContext } from "../hooks/useBookShopContext";
import { useBookMarkContext } from "../hooks/useBookMarkContext";

const SingleBookPage = () => {
  const { books, handleBookMarkAdd, handleBookMarkDelete } =
    useBookMarkContext();
  console.log(books);
  const { id } = useParams();
  const { response, loading } = GetSingleBook({ id });
  const { handleBookCount, handleBookCart } = useBookShopContext();
  if (loading) return null;
  console.log("response", response);

  const imgLink = `http://localhost:1337${response.attributes.image.data[0].attributes.url}`;
  const { price, discount, title, description } = response.attributes;

  const discountPrice = (price - (price * discount) / 100).toFixed(2);

  const markedBook = books.filter((book) => book.id === response.id);
  console.log("markedbook", markedBook);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className=" py-5 px-1 sm:px-5 md:px-10"
    >
      <div className=" bg-background_color">
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-5">
          <div className=" col-span-1">
            <img src={imgLink} alt="" className=" w-full" />
          </div>
          <div className=" col-span-2 flex flex-col justify-center">
            <h1 className=" text-xl text-primary font-title font-semibold mt-5 md:mt-0">
              <span className=" text-text_color">Title : </span> {title}
            </h1>
            <div>
              <h2 className=" mt-5 mb-2 text-text_color text-lg">
                Description
              </h2>
              <p className=" md:w-3/4 text-text_color  opacity-60">
                {description}
              </p>
            </div>
            <div className=" mt-5">
              <span className=" text-text_color">Price : </span>
              <span className=" text-primary">${discountPrice}</span>
              <span className=" text-text_color line-through ml-2">
                ${price}
              </span>
              <span className=" mx-2 text-text_color">
                (Discount {!discount ? 0 + " %" : discount + " %"})
              </span>
            </div>
            <div className=" my-5 flex sm:gap-5">
              <button
                onClick={() => {
                  markedBook.length === 0
                    ? handleBookMarkAdd(Number(id))
                    : handleBookMarkDelete(Number(id));
                }}
                className=" btn btn-outline btn-primary gap-3"
              >
                {markedBook.length > 0 ? "bookmarked" : "bookmark"}{" "}
                <BsBookmarkPlus className=" text-lg" />
              </button>
              <button
                className=" btn  btn-primary gap-3"
                onClick={() => {
                  handleBookCount(), handleBookCart(response);
                }}
              >
                Buy Now <RiShoppingBasketLine className=" text-lg" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SingleBookPage;
