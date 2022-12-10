import React, { useContext } from "react";
import BookCardUI from "../components/BookCardUI";
import { BookContext } from "../App";
//service
import GetBooks from "../services/GetBooks";

const HomePage = () => {
	const { bookCount, handleBookCount, handleBookCart } =
		useContext(BookContext);

	const { response, loading } = GetBooks();
	console.log(response);
	if (loading) return null;

	return (
		<div className=" bg-background_color h-screen pt-16 overflow-auto">
			<div className=" grid grid-cols-4 gap-5 w-3/4 mx-auto">
				{/* <BookCardUI book={book} /> */}
				{response.map((book) => (
					<BookCardUI
						key={book.id}
						book={book}
						bookCount={bookCount}
						handleBookCount={handleBookCount}
						handleBookCart={handleBookCart}
					/>
				))}
			</div>
		</div>
	);
};

export default HomePage;
