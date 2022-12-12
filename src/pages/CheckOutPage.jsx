import React, { useContext } from "react";

import { BsFillInboxFill } from "react-icons/bs";
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
            </p>
          </div>
        </div>
      )}

      <div>
        {selectedBook.map((selectedItem) => (
          <div
            key={selectedItem?.id}
            className=" w-1/2 mx-auto grid grid-cols-3 items-center mb-20 p-8 justify-between border relative"
          >
            <figure className=" -top-2/3 left-2  absolute">
              <img
                src={`http://localhost:1337${selectedItem.attributes.image.data[0].attributes.url}`}
                // src = `http://localhost:1337${data[0].attributes.url}`
                alt="a"
                className=" h-24 w-24 object-fill"
              />
            </figure>
            <div className=" col-span-1 text-text_color text-xl">
              {selectedItem.attributes.title}
            </div>
            <div className=" col-span-1 mt-18">
              <button
                className="btn btn-primary ml-10"
                onClick={() => {
                  handleBookCart(selectedItem), handleBookCount();
                }}
              >
                +
              </button>
              <button
                className="btn btn-primary ml-5"
                onClick={() => {
                  handleRemoveBook(selectedItem), handleRemoveBookCount();
                }}
              >
                -
              </button>
            </div>
            <p className=" col-span-1 text-end  text-xl text-secondary ">
              {selectedItem.quantity} * ${selectedItem?.attributes?.price}
            </p>
          </div>
        ))}
        {selectedBook.length !== 0 && (
          <>
            <div className="w-1/2 mx-auto flex justify-end mt-10">
              <h3 className="text-2xl font-bold  text-secondary">Total - </h3>
              <p className="text-right text-2xl  text-secondary">
                ${total.toFixed(2)}
              </p>
            </div>
            <div className="w-1/2 mx-auto flex  justify-end">
              <button className="btn btn-primary my-10">Check Out</button>
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default CheckOutPage;
