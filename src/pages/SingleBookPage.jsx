import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

//service
import GetSingleBook from "../services/GetSingleBook";
import GetBooks from "../services/GetBooks";

//icons
import { BsBookmarkPlus } from "react-icons/bs";
import { RiShoppingBasketLine } from "react-icons/ri";
//hooks
import { useBookShopContext } from "../hooks/useBookShopContext";
import { useBookMarkContext } from "../hooks/useBookMarkContext";
import Loading from "../components/Loading";
import BookCardUI from "../components/BookCardUI";

const SingleBookPage = () => {
  const [isBookMark, setIsBookMark] = useState(false);
  const [isBuy, setIsBuy] = useState(false);
  // to get all books
  const { response: booksResponse, loading: booksLoading } = GetBooks();
  const { books, handleBookMarkAdd, handleBookMarkDelete } =
    useBookMarkContext();

  const { id } = useParams();
  const { response, loading } = GetSingleBook({ id });

  const { handleBookCount, handleBookCart } = useBookShopContext();
  if (booksLoading) return <Loading />;
  if (loading) return <Loading />;

  const imgLink = `https://book-library-backend-production.up.railway.app${response.attributes.image.data[0].attributes.url}`;

  const { price, discount, title, description } = response.attributes;

  const discountPrice = (price - (price * discount) / 100).toFixed(2);

  const markedBook = books.filter((book) => book.id === response.id);

  const fitBooks =
    booksResponse &&
    booksResponse
      .filter(
        (book) =>
          book.attributes.categories.data[0].attributes.name ===
          response.attributes.categories.data[0].attributes.name
      )
      .filter((bo) => bo.id !== response.id);
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className=" h-screen overflow-auto md:overflow-hidden  pt-16"
    >
      <div className="h-full bg-background_color border-b p-5">
        <div className="h-full  grid grid-cols-1   md:grid-cols-4 gap-5">
          <div className=" col-span-1 md:col-span-3 h-full">
            <div className=" h-full grid grid-cols-3 bg-background_gray_color p-5">
              <div className=" col-span-3 md:col-span-1 flex flex-col justify-center ">
                <img
                  src={imgLink}
                  alt=""
                  className="h-full md:h-2/3 object-cover "
                />
              </div>
              <div className=" col-span-3 md:col-span-2 flex flex-col justify-center ">
                <h1 className="w-full md:w-4/5 mx-auto text-2xl  text-primary font-title font-semibold mt-5 md:mt-0">
                  <span className="   text-text_color">Title : </span> {title}
                </h1>
                <div className=" md:w-4/5 mx-auto">
                  <h2 className=" mt-5 mb-2 text-text_color text-xl">
                    Description
                  </h2>
                  <p className=" text-text_color text-justify  opacity-70">
                    {description}
                  </p>
                </div>
                <div className="w-full md:w-4/5 mx-auto mt-5">
                  <span className=" text-text_color">Price : </span>
                  <span className=" text-primary">${discountPrice}</span>
                  <span className=" text-text_color line-through ml-2">
                    ${price}
                  </span>
                  <span className=" mx-2 text-text_color">
                    (Discount {!discount ? 0 + " %" : discount + " %"})
                  </span>
                </div>
                <div className=" w-full md:w-4/5 mx-auto my-5 flex  items-center sm:flex-row gap-5">
                  <button
                    onClick={() => {
                      markedBook.length === 0
                        ? handleBookMarkAdd(Number(id))
                        : handleBookMarkDelete(Number(id));
                      bookMark();
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
                      buying();
                    }}
                  >
                    Buy Now <RiShoppingBasketLine className=" text-lg" />
                  </button>
                </div>
                <div className=" w-full md:w-4/5 mx-auto my-5">
                  <a className="link link-primary">Read Free For 3 days</a>
                </div>
              </div>
            </div>
          </div>
          <div className="  col-span-1 md:overflow-auto h-full ">
            <h1 className=" w-full z-10 text-center sticky top-0 p-1 text-lg bg-primary">
              Similar Books
            </h1>
            <div className=" grid grid-cols-2 gap-2 mt-2">
              {fitBooks &&
                fitBooks.map((book) => (
                  <BookCardUI key={book.id} book={book} />
                ))}
            </div>
          </div>
        </div>
      </div>
      {isBookMark && (
        <div className="toast  z-20">
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
    </motion.div>
  );
};

export default SingleBookPage;
