import React from "react";
import { Outlet, useParams } from "react-router-dom";
import BookCardUI from "../components/BookCardUI";
//services
import GetBooks from "../services/GetBooks";

const ShopList = () => {
  const { response, loading } = GetBooks();
  // if (loading) return null;

  const { name } = useParams();
  // console.log(name);

  const fitData =
    response &&
    response.filter(
      (book) => book.attributes.categories.data[0].attributes.name == name
    );
  const handleClick = () => {
    console.log("h");
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <Outlet />

      <div className=" grid grid-cols-4 gap-5 mx-5 p-5">
        {fitData &&
          fitData.map((book) => (
            <BookCardUI key={book.id} book={book} handleClick={handleClick} />
          ))}
      </div>
    </div>
  );
};

export default ShopList;
