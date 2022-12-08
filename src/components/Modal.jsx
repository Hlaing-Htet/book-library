import React from "react";
import { memberInfodata } from "../memberdata/data";
import { useState } from "react";
const Modal = ({ show,  onClose }) => {
    const [memberinfo, setMemberinfo] = useState(memberInfodata);
  if (!show) {
    return null;
  }
  
  return (
    <>
      <div >
        <div >
          <button className="close" onClick={onClose}>
            close
          </button>
          <div className="inner-box">
            {memberinfo.map((member) => (
              <div className="shadow-xl text-center hover:scale-105 ">
                <figure className="px-10 pt-10">
                  <img src={member.img} className=" rounded-xl h-64 " />
                </figure>
                <p className="mt-3 font-sans font-semibold text-primary">
                  {member.name}
                </p>
                <span className="mb-3 text-text_color font-medium font-sans">
                  {member.email}
                </span>
                <span className="mb-3 text-text_color font-medium font-sans">
                  {member.description}
                </span>
                <span className="mb-3 text-text_color font-medium font-sans">
                  {member.work}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Modal;
