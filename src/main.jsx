import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BookMarkContextProvider } from "./context/BookMarkContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BookMarkContextProvider>
    <App />
  </BookMarkContextProvider>
);
