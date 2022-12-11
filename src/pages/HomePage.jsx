import React, { useContext } from "react";
import BookCardUI from "../components/BookCardUI";
import { BookContext } from "../App";
//Slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//service
import GetBooks from "../services/GetBooks";
import Footer from "../components/Footer";
function SampleNextArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{
				...style,
				position: "absolute",
				display: "block",
				background: "black",
				top: "50%",
				right: "-10%",
				borderRadius: "15px",
				transform: "translateY(-50px)",
			}}
			onClick={onClick}
		/>
	);
}

function SamplePrevArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{
				...style,
				position: "absolute",
				display: "block",
				background: "black",
				top: "50%",
				left: "-10%",
				borderRadius: "15px",
				transform: "translateY(-50px)",
			}}
			onClick={onClick}
		/>
	);
}
const HomePage = () => {
	const { bookCount, handleBookCount, handleBookCart } =
		useContext(BookContext);

	const { response, loading } = GetBooks();
	console.log(response);
	if (loading) return null;

	const settings = {
		dots: false,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
	};

	return (
		<div className=" bg-background_color h-screen pt-16 overflow-auto">
			<section className=" grid grid-cols-2 h-96 items-center bg-background_gray_color">
				<div className="col-span-1 mx-auto text-5xl text-secondary font-bold mt-20">
					<div>
						The Best <span className="text-primary ml-3">Online</span>
					</div>
					<div>
						Books <span className="text-primary ml-3">Library</span>
					</div>
					<p className="text-sm opacity-60 mt-5">
						Everybody can buy books freely.
					</p>
					<button className="btn btn-primary mt-10">Buy Now</button>
				</div>
				<figure className="col-span-1">
					<img src="./src/assets/homepageimage.png" className="h-96" />
				</figure>
			</section>
			<section>
				<h3 className="mt-10 text-center text-secondary text-2xl">
					New <span className="text-primary">Books</span>
				</h3>
				<p className="mt-10 text-center text-secondary mb-10">
					There are many books , but there are the newest books
				</p>

				<div className="relative w-3/4 mx-auto">
					<Slider {...settings}>
						{/* <BookCardUI book={book} /> */}
						{response.slice(31, 35).map((book) => (
							<BookCardUI
								key={book.id}
								book={book}
								bookCount={bookCount}
								handleBookCount={handleBookCount}
								handleBookCart={handleBookCart}
							/>
						))}
					</Slider>
				</div>
			</section>
			<section>
				<h3 className="mt-10 text-center text-secondary text-2xl">
					Best <span className="text-primary">Seller Books</span>
				</h3>
				<p className="mt-10 text-center text-secondary mb-10">
					There are many books , but there are the best seller books
				</p>

				<div className="w-3/4 mx-auto mb-20">
					<Slider {...settings}>
						{/* <BookCardUI book={book} /> */}
						{response.slice(4, 8).map((book) => (
							<BookCardUI
								key={book.id}
								book={book}
								bookCount={bookCount}
								handleBookCount={handleBookCount}
								handleBookCart={handleBookCart}
							/>
						))}
					</Slider>
				</div>
			</section>

			<Footer />
		</div>
	);
};

export default HomePage;
