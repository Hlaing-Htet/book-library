import React from "react";
import { BsFillInboxFill } from "react-icons/bs";

const NoBookUI = () => {
  return (
    <div className=" col-span-4">
      <div className="card justify-center w-auto">
        <div className="card-body items-center text-center">
          <h2 className="card-title">
            <BsFillInboxFill size={100} className="text-primary" />
          </h2>
          <p className="text-bold text-2xl text-secondary">
            There is no book related with your search !
          </p>
        </div>
      </div>
    </div>
  );
};

export default NoBookUI;
