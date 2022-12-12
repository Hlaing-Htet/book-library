import React, { useState, createContext } from "react";
export const BookShopContext = createContext();
export const BookShopContextProvider = ({ children }) => {
  const [bookCount, setBookCount] = useState(0);
  const [selectedBook, setSelectedBook] = useState([]);
  const handleBookCount = () => {
    setBookCount(bookCount + 1);
  };
  const handleRemoveBookCount = () => {
    setBookCount(bookCount - 1);
  };
  const handleBookCart = (item) => {
    const remainingProduct = selectedBook.find(
      (selectedItem) => selectedItem.id === item.id
    );
    if (remainingProduct) {
      setSelectedBook(
        selectedBook.map((selectedItem) =>
          selectedItem.id === item.id
            ? { ...remainingProduct, quantity: remainingProduct.quantity + 1 }
            : selectedItem
        )
      );
    } else {
      setSelectedBook([...selectedBook, { ...item, quantity: 1 }]);
    }
  };

  const handleRemoveBook = (item) => {
    const remainingProduct = selectedBook.find(
      (selectedItem) => selectedItem.id === item.id
    );
    if (remainingProduct.quantity === 1) {
      setSelectedBook(
        selectedBook.filter((selectedItem) => selectedItem.id !== item.id)
      );
    } else {
      setSelectedBook(
        selectedBook.map((selectedItem) =>
          selectedItem.id === item.id
            ? { ...remainingProduct, quantity: remainingProduct.quantity - 1 }
            : selectedItem
        )
      );
    }
  };
  return (
    <BookShopContext.Provider
      value={{
        selectedBook,
        handleBookCount,
        handleBookCart,
        handleRemoveBook,
        handleRemoveBookCount,
        bookCount,
      }}
    >
      {children}
    </BookShopContext.Provider>
  );
};

export default BookShopContextProvider;
