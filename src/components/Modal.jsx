
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
      <div className="shadow-xl  " key={selectedMember.id}>
        <div className="flex">
          <figure className="px-10 pt-10">
            <img src={selectedMember.img} className=" rounded-xl h-64 " />
          </figure>
          <div>
            <p className="mt-3 font-sans font-semibold text-primary">
              {selectedMember.name}
            </p>
            <span className="mb-3 text-text_color font-medium font-sans">
              {selectedMember.email}
            </span>
            <span className="mb-3 text-text_color font-medium font-sans">
              {selectedMember.description}
            </span>
            <span className="mb-3 text-text_color font-medium font-sans">
              {selectedMember.work}
            </span>
          </div>
        </div>
      </div>
      <div className="card-actions justify-end">
        <button className=" btn btn-primary" onClick={onClose}>
          close
        </button>
      </div>
    </>
  );
};
export default Modal;
