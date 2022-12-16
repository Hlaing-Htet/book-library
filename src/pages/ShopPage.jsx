import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { motion } from "framer-motion";
//service
import GetCategories from "../services/GetCategories";
import Loading from "../components/Loading";

const ShopPage = () => {
  const { response, loading } = GetCategories();
  if (loading) return <Loading />;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.02 }}
      className=" bg-background_color h-screen pt-16 overflow-auto"
    >
      <div className=" h-full grid grid-cols-5">
        <div className="  col-span-1 h-full bg-background_color border-r">
          <div className=" sticky top-0">
            <h1 className=" hidden md:block text-center uppercase text-xl pt-5 font-bold text-text_color font-title">
              categories
            </h1>
            <div className=" md:p-2">
              <div className=" border-b p-0 sm:p-1 hover:bg-background_gray_color ">
                <NavLink
                  to={`all`}
                  className={({ isActive }) =>
                    isActive
                      ? " text-primary block text-center text-sm md:text-md"
                      : " text-text_color block text-center text-sm md:text-md"
                  }
                >
                  All
                </NavLink>
              </div>
              {response.map((category) => (
                <div
                  className=" border-b p-0 sm:p-1 hover:bg-background_gray_color "
                  key={category.id}
                >
                  <NavLink
                    to={`${category.attributes.name}`}
                    className={({ isActive }) =>
                      isActive
                        ? " text-primary block text-center text-sm md:text-md"
                        : " text-text_color block text-center text-sm md:text-md"
                    }
                  >
                    {category.attributes.name}
                  </NavLink>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className=" col-span-4 h-full bg-background_color">
          <Outlet />
        </div>
      </div>
    </motion.div>
  );
};

export default ShopPage;
