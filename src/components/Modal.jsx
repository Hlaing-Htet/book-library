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
        className=" fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background_color"
        key={selectedMember.id}
      >
        <div className="flex gap-5 p-5">
          <figure className="">
            <img src={selectedMember.img} className=" rounded-xl h-full  " />
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
            <div className="card-actions justify-end">
              <button className=" btn btn-primary" onClick={onClose}>
                close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Modal;
