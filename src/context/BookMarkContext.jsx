import { createContext, useState, useEffect } from "react";

export const BookMarkContext = createContext();
const STORE_KEY = "bookmarks";
export const BookMarkContextProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    let productsJSON = localStorage.getItem(STORE_KEY);
    if (productsJSON !== null) {
      setBooks(JSON.parse(productsJSON));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem(STORE_KEY, JSON.stringify(books));
  }, [books]);
  function handleBookMarkAdd(id) {
    const newBook = { id };
    setBooks([...books, newBook]);
  }
  function handleBookMarkDelete(id) {
    setBooks(books.filter((book) => book.id !== id));
  }

  return (
    <BookMarkContext.Provider
      value={{ books, handleBookMarkAdd, handleBookMarkDelete }}
    >
      {children}
    </BookMarkContext.Provider>
  );
};
