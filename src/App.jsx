import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import ShopList from "./components/ShopList";
import AboutPage from "./pages/AboutPage";
import BookMarkPage from "./pages/BookMarkPage";
import CheckOutPage from "./pages/CheckOutPage";
import HomePage from "./pages/HomePage";

import ShopPage from "./pages/ShopPage";
import SingleBookPage from "./pages/SingleBookPage";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/shop" element={<ShopPage />}>
          <Route path="" element={<Navigate to={"/shop/Horror"} />} />
          <Route path=":name" element={<ShopList />}>
            <Route path=":id" element={<SingleBookPage />} />
          </Route>
        </Route>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/bookmark" element={<BookMarkPage />} />
        <Route path="/checkout" element={<CheckOutPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
