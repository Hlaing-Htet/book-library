import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AllBookList from "./components/AllBookList";
import NavBar from "./components/NavBar";
import ShopList from "./components/ShopList";
import AboutPage from "./pages/AboutPage";
import BookMarkPage from "./pages/BookMarkPage";
import CheckOutPage from "./pages/CheckOutPage";
import DetailsPage from "./pages/DetailsPage";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import SingleBookPage from "./pages/SingleBookPage";
import ProfilePage from "./pages/ProfilePage";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/shop" element={<ShopPage />}>
          <Route path="all" element={<AllBookList />} />
          <Route path="" element={<Navigate to={"/shop/all"} />} />
          <Route path=":name" element={<ShopList />}>
            <Route path=":id" element={<SingleBookPage />} />
          </Route>
        </Route>
        <Route path="/details" element={<DetailsPage />}>
          <Route path=":id" element={<SingleBookPage />} />
        </Route>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/bookmark" element={<BookMarkPage />} />
        <Route path="/checkout" element={<CheckOutPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
