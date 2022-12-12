import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BookMarkContextProvider } from "./context/BookMarkContext";
import { BookShopContextProvider } from "./context/BookShopContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BookShopContextProvider>
    <BookMarkContextProvider>
      <App />
    </BookMarkContextProvider>
  </BookShopContextProvider>
);
