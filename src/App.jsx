import React, { useState, useEffect, createContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import ShopList from "./components/ShopList";
import AboutPage from "./pages/AboutPage";
import BookMarkPage from "./pages/BookMarkPage";
import CheckOutPage from "./pages/CheckOutPage";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import SingleBookPage from "./pages/SingleBookPage";

export const BookContext = createContext();

import GetBooks from "./services/GetBooks";

const App = () => {
	const [bookCount, setBookCount] = useState(0);
	const [selectedBook, setSelectedBook] = useState([]);

	const { response, loading } = GetBooks();
	console.log(response);
	if (loading) return null;

	const handleBookCount = () => {
		setBookCount(bookCount + 1);
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

	const bookContextValue = {
		response,
		selectedBook,
		handleBookCount,
		handleBookCart,
		handleRemoveBook,
		bookCount,
	};

	return (
		<BookContext.Provider value={bookContextValue}>
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
		</BookContext.Provider>
	);
};

export default App;
