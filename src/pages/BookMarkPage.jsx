import React from "react";
//hook
import { useBookMarkContext } from "../hooks/useBookMarkContext";

const BookMarkPage = () => {
  const { books } = useBookMarkContext();
  console.log(books);
  return <div className=" bg-text_color">BookMarkPage</div>;
};

export default BookMarkPage;
