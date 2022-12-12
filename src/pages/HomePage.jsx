import React from "react";
import BookCardUI from "../components/BookCardUI";

import Img from "../assets/homepageimage.png";
//Slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//service
import GetBooks from "../services/GetBooks";
import Footer from "../components/Footer";
//hooks
import { useBookShopContext } from "../hooks/useBookShopContext";
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
  const { bookCount, handleBookCount, handleBookCart } = useBookShopContext();

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
    <div className=" bg-background_color overflow-auto h-screen pt-16">
      <section className=" bg-background_gray_color h-2/3">
        <div className=" container mx-auto grid grid-cols-2 h-full">
          <div className=" col-span-1 text-text_color text-6xl flex flex-col justify-center">
            <div className=" mb-5">
              The Best <span className="text-primary ml-3">Online</span>
            </div>
            <div className=" mb-5">
              Books <span className="text-primary ml-3">Library</span>
            </div>
            <p className="text-sm opacity-60 mt-5">
              Everybody can buy books freely.
            </p>
            <button className="btn btn-primary mt-10 w-32">Buy Now</button>
          </div>
          <div className=" col-span-1 overflow-hidden ">
            <img src={Img} alt="" className=" h-full block ml-auto" />
          </div>
        </div>
      </section>

      <section>
        <h3 className="mt-10 text-center text-secondary text-2xl">
          New <span className="text-primary">Books</span>
        </h3>
        <p className="mt-10 text-center text-secondary mb-10">
          There are many books , but there are the newest books
        </p>

        <div className="relative w-3/5 mx-auto">
          <Slider {...settings}>
            {/* <BookCardUI book={book} /> */}
            {response.slice(31, 35).map((book) => (
              <div className=" p-5 " key={book.id}>
                <BookCardUI
                  book={book}
                  bookCount={bookCount}
                  handleBookCount={handleBookCount}
                  handleBookCart={handleBookCart}
                />
              </div>
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

        <div className="w-3/5 mx-auto mb-20">
          <Slider {...settings}>
            {/* <BookCardUI book={book} /> */}
            {response.slice(4, 8).map((book) => (
              <div className=" p-5" key={book.id}>
                <BookCardUI
                  book={book}
                  bookCount={bookCount}
                  handleBookCount={handleBookCount}
                  handleBookCart={handleBookCart}
                />
              </div>
            ))}
          </Slider>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
