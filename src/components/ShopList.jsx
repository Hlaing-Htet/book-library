import React from "react";
import { Outlet, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import BookCardUI from "../components/BookCardUI";
//services
import GetBooks from "../services/GetBooks";

const ShopList = () => {
  const { response, loading } = GetBooks();
  if (loading) return <Loading />;

  const { name } = useParams();

  const fitData =
    response &&
    response.filter(
      (book) => book.attributes.categories.data[0].attributes.name == name
    );

  return (
    <div>
      <Outlet />

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mx-0 md:mx-5  p-1 sm:p-5">
        {fitData &&
          fitData.map((book) => <BookCardUI key={book.id} book={book} />)}
      </div>
    </div>
  );
};

export default ShopList;
