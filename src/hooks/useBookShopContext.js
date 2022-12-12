import { BookShopContext } from "../context/BookShopContext";
import { useContext } from "react";

export const useBookShopContext = () => {
  const context = useContext(BookShopContext);
  return context;
};
