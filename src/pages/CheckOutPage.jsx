import React, { useContext } from "react";
import { BookContext } from "../App";
import { BsFillInboxFill } from "react-icons/bs";
import Footer from "../components/Footer";

const CheckOutPage = () => {
	const {
		response,
		selectedBook,
		handleBookCart,
		handleRemoveBook,
		bookCount,
	} = useContext(BookContext);

	const total = selectedBook.reduce(
		(accumulator, currentValue) =>
			accumulator + currentValue?.attributes?.price * currentValue.quantity,
		0
	);
	console.log("total", total);
	console.log("Selected", selectedBook);
	return (
		<>
			<div>
				<h3 className="text-2xl font-bold text-center text-secondary mt-5 mb-5">
					My Cart
				</h3>

				{selectedBook.length === 0 && (
					<div className="card justify-center w-auto min-h-screen">
						<div className="card-body items-center text-center">
							<h2 className="card-title">
								<BsFillInboxFill size={100} className="text-primary" />
							</h2>
							<p className="text-bold text-2xl text-secondary">
								There is no book related with your cart!
							</p>
						</div>
					</div>
				)}

				<div>
					{selectedBook.map((selectedItem) => (
						<div
							key={selectedItem?.id}
							className="container flex justify-between mt-10">
							<figure className="basis-36 container max-h-48 max-w-24 ml-5">
								<img
									src={
										selectedItem?.attributes?.image?.data[0]?.attributes?.url
									}
									// src = `http://localhost:1337${data[0].attributes.url}`
									alt="book"
								/>
							</figure>
							<div className="basis-48 mt-18">
								<button
									className="btn btn-primary ml-10"
									onClick={() => handleBookCart(selectedItem)}>
									+
								</button>
								<button
									className="btn btn-primary ml-5"
									onClick={() => handleRemoveBook(selectedItem)}>
									-
								</button>
							</div>
							<p className="basis-20 mt-18 text-secondary">
								{selectedItem.quantity} * ${selectedItem?.attributes?.price}
							</p>
						</div>
					))}
					{selectedBook.length !== 0 && (
						<>
							<div className="container flex justify-end mt-10">
								<h3 className="text-2xl font-bold mr-5 text-secondary">
									Total -{" "}
								</h3>
								<p className="text-right text-2xl mr-5 text-secondary">
									${total}
								</p>
							</div>
							<div className="flex  justify-center">
								<button className="btn btn-primary mt-10">Check Out</button>
							</div>
						</>
					)}
				</div>
			</div>
			<Footer />
		</>
	);
};

export default CheckOutPage;
