import React from "react";
import { BsFillInboxFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import BookCardUI from "../components/BookCardUI";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
//hook
import { useBookMarkContext } from "../hooks/useBookMarkContext";
//services
import GetBooks from "../services/GetBooks";
import Loading from "../components/Loading";

const BookMarkPage = () => {
  const { books } = useBookMarkContext();
  const { response, loading } = GetBooks();
  if (loading) return <Loading />;
  let markedBook = books.map((book) =>
    response.filter((res) => res.id === book.id)
  );

  console.log(markedBook);

  console.log(books);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.02 }}
      className=" flex flex-col bg-background_color h-screen pt-16 overflow-auto"
    >
      <h3 className="text-2xl font-bold text-center text-secondary mt-5 mb-10">
        My BookMark
      </h3>
      {books.length === 0 ? (
        <div className="card justify-center w-auto ">
          <div className="card-body items-center text-center">
            <h2 className="card-title">
              <BsFillInboxFill size={100} className="text-primary" />
            </h2>
            <p className="text-bold text-2xl text-secondary">
              There is no bookmark related with your cart!
              <Link to={"/shop"}>
                <button className=" btn btn-primary ml-3">Go to Shop</button>
              </Link>
            </p>
          </div>
        </div>
      ) : (
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 w-full  md:w-3/4 mx-auto p-5">
          {markedBook.map((book) => (
            <BookCardUI key={book[0].id} book={book[0]} />
          ))}
        </div>
      )}
      <Footer />
    </motion.div>
  );
};

export default BookMarkPage;
