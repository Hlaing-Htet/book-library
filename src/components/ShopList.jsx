import React, { useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import BookCardUI from "../components/BookCardUI";
//services
import GetBooks from "../services/GetBooks";
import NoBookUI from "./NoBookUI";

const ShopList = () => {
  const { response, loading } = GetBooks();
  const [searchBook, setSearchBook] = useState("");

  const { name } = useParams();
  if (loading) return <Loading />;
  const handleSearch = (e) => {
    console.log(e.target.value);
    setSearchBook(e.target.value);
  };

  const fitData =
    response &&
    response.filter(
      (book) => book.attributes.categories.data[0].attributes.name == name
    );
  const searchingBook = fitData.filter((book) => {
    return book.attributes.title
      .toLowerCase()
      .includes(searchBook.toLowerCase());
  });

  return (
    <div>
      <div className=" text-center sticky top-0 z-10 py-5 bg-background_color">
        <input
          type="text"
          placeholder="Search book by title"
          className="input input-bordered text-text_color input-primary w-full max-w-xs"
          value={searchBook}
          onChange={handleSearch}
        />
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mx-0 md:m-5  ">
        {searchingBook.length > 0 ? (
          searchingBook.map((book) => <BookCardUI key={book.id} book={book} />)
        ) : (
          <NoBookUI />
        )}
      </div>
    </div>
  );
};

export default ShopList;
