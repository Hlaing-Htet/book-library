import React from "react";
import BookCardUI from "../components/BookCardUI";

//service
import GetBooks from "../services/GetBooks";
const HomePage = () => {
  const { response, loading } = GetBooks();
  // console.log(response);
  if (loading) return null;

  return (
    <div className=" bg-background_color h-screen pt-16 overflow-auto">
      <div className=" grid grid-cols-4 gap-5 w-3/4 mx-auto">
        {/* <BookCardUI book={book} /> */}
        {response.map((book) => (
          <BookCardUI key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
