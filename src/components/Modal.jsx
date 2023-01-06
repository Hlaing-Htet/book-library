import React from "react";
//import { memberInfodata } from "../memberdata/data";
//import { useState } from "react";
const Modal = ({ show, onClose, selectedMember }) => {
  //const [memberinfo, setMemberinfo] = useState(memberInfodata);
  if (!show) {
    return null;
  }

  return (
    <>
      <div
        className=" z-20 w-5/6 md:w-1/2 h-3/4 overflow-auto fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background_color"
        key={selectedMember.id}
      >
        <div className="flex flex-col md:flex-row gap-5 p-5">
          <figure className="">
            <img
              src={selectedMember.img}
              className=" rounded-xl h-full object-cover  "
            />
          </figure>
          <div>
            <p className="mt-3 text-text_color">
              <span className=" text-primary  text-lg">Name : </span>
              {selectedMember.name}
            </p>
            <div className="mb-3 text-text_color font-medium font-sans">
              <span className=" text-primary  text-lg">Email : </span>
              {selectedMember.email}
            </div>
            <div className="mb-3 text-text_color ">
              <div className=" text-primary text-lg">About :</div>
              <span className=" opacity-60">{selectedMember.description}</span>
            </div>
            <div className="mb-3 text-text_color font-medium font-sans">
              <span className=" text-primary text-lg">Work :</span>

              {selectedMember.work}
            </div>
            <div className="absolute top-3 right-3">
              <button
                className=" btn btn-primary btn-sm btn-square"
                onClick={onClose}
              >
                x
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Modal;
