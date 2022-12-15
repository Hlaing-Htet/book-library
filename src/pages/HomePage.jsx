import React from "react";
import BookCardUI from "../components/BookCardUI";
import { motion } from "framer-motion";

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
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
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
        right: "-5%",
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
        left: "-5%",
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

  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   nextArrow: <SampleNextArrow />,
  //   prevArrow: <SamplePrevArrow />,
  // };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    // initialSlide: 0,
    responsive: [
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          // initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.02 }}
      className=" bg-background_color overflow-auto h-screen pt-16"
    >
      <div className="hero min-h-2/3   bg-background_gray_color ">
        <div className="hero-content p-0 px-3 flex-col md:flex-row mt-24 md:mt-0 text-text_color  lg:w-10/12 md:min-w-4/5 justify-between ">
          <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 0.2 }}
            className="md:text-left text-center"
          >
            <h1 className=" md:text-5xl text-3xl font-bold font-title mb-5">
              The Best <span className="text-primary ">Online </span>
            </h1>
            <h1 className=" md:text-5xl text-3xl font-bold font-title mb-2">
              Book <span className="text-primary ">Library</span>
            </h1>

            <p className="py-3 font-sans">Everybody can buy books freely.</p>
            <Link to={"/shop"}>
              <button className="btn btn-primary mt-3">Buy Now</button>
            </Link>
          </motion.div>
          <motion.img
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 0.2 }}
            src={Img}
            className="max-w-xs lg:max-w-md md:max-w-sm "
          />
        </div>
      </div>

      <section id="tranding" className="overflow-auto">
        <h3 className="mt-24 text-center font-bold font-title text-secondary text-2xl">
          New <span className="text-primary">Books</span>
        </h3>
        <p className="mt-5 text-center font-sans text-secondary mb-8">
          There are many books , but there are the newest books
        </p>

        <div className="w-2/3 lg:w-3/5 md:w-5/6 mx-auto    ">
          <Slider {...settings}>
            {/* <BookCardUI book={book} /> */}
            {response ? (
              response.slice(31, 35).map((book) => (
                <div className="p-2 md:p-5" key={book.id}>
                  <BookCardUI
                    book={book}
                    bookCount={bookCount}
                    handleBookCount={handleBookCount}
                    handleBookCart={handleBookCart}
                  />
                </div>
              ))
            ) : (
              <div className=" text-center text-primary text-6xl">....</div>
            )}
          </Slider>
        </div>
      </section>
      <section id="bestSeller">
        <h3 className="mt-24 text-center font-bold font-title text-secondary text-2xl ">
          Best <span className="text-primary">Seller Books</span>
        </h3>
        <p className="mt-10 text-center font-sans text-secondary mb-8">
          There are many books , but there are the best seller books
        </p>

        <div className="w-2/3  lg:w-3/5 md:w-5/6 mx-auto mb-20  ">
          <Slider {...settings}>
            {/* <BookCardUI book={book} /> */}
            {response ? (
              response.slice(4, 8).map((book) => (
                <div className=" p-2 md:p-5" key={book.id}>
                  <BookCardUI
                    book={book}
                    bookCount={bookCount}
                    handleBookCount={handleBookCount}
                    handleBookCart={handleBookCart}
                  />
                </div>
              ))
            ) : (
              <div className=" text-center text-primary text-6xl">....</div>
            )}
          </Slider>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
};

export default HomePage;
