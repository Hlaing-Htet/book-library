import React from "react";
import { NavLink, Outlet } from "react-router-dom";
//service
import GetCategories from "../services/GetCategories";

const ShopPage = () => {
  const { response, loading } = GetCategories();
  console.log(response);
  return (
    <div className=" bg-background_color h-screen pt-16">
      <div className=" h-full grid grid-cols-5">
        <div className=" col-span-1 h-full bg-background_color border-r">
          <h1 className=" text-center uppercase text-xl p-3 underline text-text_color font-title">
            categories
          </h1>
          <div className=" p-2">
            <NavLink to={"horror"}>
              <div className=" border-b p-1 hover:bg-background_gray_color ">
                <p className=" text-text_color text-center hover:text-primary">
                  horror
                </p>
              </div>
            </NavLink>
            <div className=" border-b p-1 hover:bg-background_gray_color ">
              <p className=" text-text_color text-center hover:text-primary">
                horror
              </p>
            </div>
            <div className=" border-b p-1 hover:bg-background_gray_color ">
              <p className=" text-text_color text-center hover:text-primary">
                horror
              </p>
            </div>
            <div className=" border-b p-1 hover:bg-background_gray_color ">
              <p className=" text-text_color text-center hover:text-primary">
                horror
              </p>
            </div>
          </div>
        </div>
        <div className=" col-span-4 h-full bg-background_color">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
