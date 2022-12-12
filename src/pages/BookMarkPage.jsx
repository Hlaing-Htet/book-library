import React from "react";
import { BsFillInboxFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import BookCardUI from "../components/BookCardUI";
import Footer from "../components/Footer";
//hook
import { useBookMarkContext } from "../hooks/useBookMarkContext";
//services
import GetBooks from "../services/GetBooks";

const BookMarkPage = () => {
  const { books } = useBookMarkContext();
  const { response, loading } = GetBooks();
  if (loading) return null;
  let markedBook = books.map((book) =>
    response.filter((res) => res.id === book.id)
  );

  console.log(markedBook);

  console.log(books);
  return (
    <div className=" flex flex-col bg-background_color h-screen pt-16 overflow-auto">
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
        <div className=" grid grid-cols-4 gap-5 w-3/4 mx-auto p-5">
          {markedBook.map((book) => (
            <BookCardUI key={book[0].id} book={book[0]} />
          ))}
        </div>
      )}
      <Footer />
    </div>
  );
};

export default BookMarkPage;
