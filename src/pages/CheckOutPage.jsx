import React from "react";

import { BsFillInboxFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
//hooks
import { useBookShopContext } from "../hooks/useBookShopContext";

const CheckOutPage = () => {
  const {
    selectedBook,
    handleBookCart,
    handleRemoveBook,
    handleBookCount,
    handleRemoveBookCount,
  } = useBookShopContext();
  console.log(selectedBook);

  const total = selectedBook.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue?.attributes?.price * currentValue.quantity,
    0
  );

  const handleClick = () => {
    alert("Check Out Page is coming soon !!!! ");
  };

  return (
    <div className="flex flex-col bg-background_color h-screen pt-16 overflow-auto">
      <h3 className="text-2xl font-bold text-center text-secondary mt-5 mb-20">
        My Cart
      </h3>

      {selectedBook.length === 0 && (
        <div className="card justify-center w-auto">
          <div className="card-body items-center text-center">
            <h2 className="card-title">
              <BsFillInboxFill size={100} className="text-primary" />
            </h2>
            <p className="text-bold text-2xl text-secondary">
              There is no book related with your cart!
              <Link to={"/shop"}>
                <button className=" btn btn-primary ml-3">Go to Shop</button>
              </Link>
            </p>
          </div>
        </div>
      )}

      <div>
        {selectedBook.map((selectedItem) => (
          <div
            key={selectedItem?.id}
            className=" md:w-2/3 lg:w-1/2 mx-auto grid grid-cols-3 items-center mb-20 md:mb-24 md:p-5 lg:p-8 justify-between border relative"
          >
            <figure className=" bottom-full left-1/2 -translate-x-1/2 md:translate-x-0  md:-top-20 md:left-2  absolute">
              <img
                src={`https://book-library-backend-production.up.railway.app${selectedItem.attributes.image.data[0].attributes.url}`}
                // src = `http://localhost:1337${data[0].attributes.url}`
                alt="a"
                className="h-16 md:h-24 w-16 md:w-24 object-fill"
              />
            </figure>
            <div className=" col-span-1 text-text_color md:text-xl p-3">
              {selectedItem.attributes.title}
            </div>
            <div className=" col-span-1 p-3 flex gap-5 justify-center">
              <button
                className="btn btn-primary"
                onClick={() => {
                  handleBookCart(selectedItem), handleBookCount();
                }}
              >
                +
              </button>
              <button
                className="btn btn-primary "
                onClick={() => {
                  handleRemoveBook(selectedItem), handleRemoveBookCount();
                }}
              >
                -
              </button>
            </div>
            <p className=" col-span-1 text-end  p-3 md:text-xl text-secondary ">
              {selectedItem.quantity} * ${selectedItem?.attributes?.price}
            </p>
          </div>
        ))}
        {selectedBook.length !== 0 && (
          <>
            <div className="md:w-2/3 lg:w-1/2 p-3 mx-auto flex justify-end md:mt-10">
              <h3 className="text-2xl font-bold  text-secondary">Total - </h3>
              <p className="text-right text-2xl  text-secondary">
                ${total.toFixed(2)}
              </p>
            </div>
            <div className="md:w-2/3 lg:w-1/2 p-3 mx-auto flex  justify-end">
              <button
                onClick={handleClick}
                className="btn btn-primary md:my-10"
              >
                Check Out
              </button>
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default CheckOutPage;
