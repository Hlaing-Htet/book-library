import { BookMarkContext } from "../context/BookMarkContext";
import { useContext } from "react";

export const useBookMarkContext = () => {
  const context = useContext(BookMarkContext);
  return context;
};
