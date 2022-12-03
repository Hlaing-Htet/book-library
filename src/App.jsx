import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SliteBtn from "./components/SliteBtn";

const App = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div>
      <h2> Single Item</h2>
      <div className=" w-2/3 mx-auto">
        <Slider {...settings}>
          <div className=" bg-orange-500  h-52 text-center  p-5">
            <div className=" bg-slate-300 h-full">
              <h1>1</h1>
            </div>
          </div>
          <div className=" bg-orange-500 h-52 text-center  p-5">
            <h3>2</h3>
          </div>
          <div className=" bg-orange-500 h-52 text-center  p-5">
            <h3>3</h3>
          </div>
          <div className=" bg-orange-500 h-52 text-center  p-5">
            <h3>4</h3>
          </div>
          <div className=" bg-orange-500 h-52 text-center  p-5">
            <h3>5</h3>
          </div>
          <div className=" bg-orange-500 h-52 text-center  p-5">
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default App;

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "red",
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
        display: "block",
        background: "green",
      }}
      onClick={onClick}
    />
  );
}
