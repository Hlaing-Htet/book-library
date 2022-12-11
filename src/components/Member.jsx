import React from "react";
import { useState } from "react";
import { memberInfodata } from "../memberdata/data";
import { CiFacebook } from "react-icons/ci";
import { VscGithub } from "react-icons/vsc";
import { FiTwitter } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { MdWorkOutline } from "react-icons/md";

const Member = () => {
  //const [memberinfo, setMemberinfo] = useState(memberInfodata);
  const [popup, setPopup] = useState([]);
  const [show, setShow] = useState(false);
  const showdetail = (member) => {
    setPopup([member]);
    setShow(!show);
  };

  return (
    <>
      <div className="container mx-auto flex flex-wrap gap-10 justify-center mt-8 leading-8 ">
        {memberInfodata.map((member) => {
          return (
            <div
              className="shadow-xl text-center hover:scale-105 transition-all "
              key={member.id}
              onClick={() => showdetail(member)}
            >
              <figure className="px-10 pt-10">
                <img src={member.img} className=" rounded-xl h-64 " />
              </figure>
              <p className="mt-3 font-sans font-semibold text-primary">
                {member.name}
              </p>
              <span className="mb-3 text-text_color font-medium font-sans">
                {member.email}
              </span>
              <div className="flex justify-center gap-3 my-3 ">
                <button className="btn-outline">
                  <CiFacebook className="text-2xl text-text_color" />
                </button>
                <button className="btn-outline">
                  <VscGithub className="text-xl text-text_color" />
                </button>
                <button className="btn-outline">
                  <FiTwitter className="text-xl text-text_color" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="fixed top-0  pt-36 container">
        <div>
          {show &&
            popup.map((pop) => {
              return (
                <>
                  <div className="    bg-background_gray_color  m-auto w-2/4  p-5 shadow-xl">
                    {/* <p className="mt-3 font-sans font-semibold text-primary ">
                      Name:{pop.name}
                    </p>
                    <p className="mb-3 text-text_color font-medium font-sans flex ">
                      <HiOutlineMail className="text-2xl text-primary" />:
                      {pop.email}
                    </p>
                    <p className="mb-3 text-text_color font-medium font-sans ">
                      About:{pop.description}
                    </p>
                    <p className="mb-3 text-text_color font-medium font-sans flex">
                      <MdWorkOutline className="text-2xl text-primary" />:
                      {pop.work}
                    </p> */}
                    <div>
                      <div className=" grid grid-cols-8">
                        <div className=" col-span-1 text-primary">Name</div>
                        <div className=" col-span-7 text-text_color font-medium font-sans">
                          {pop.name}
                        </div>
                        <div className=" col-span-1 text-primary">Age</div>
                        <div className=" col-span-7 text-text_color font-medium font-sans">
                          {pop.age}
                        </div>
                        <div className=" col-span-1 text-primary text-3xl">
                          <HiOutlineMail />
                        </div>
                        <div className=" col-span-7 text-text_color font-medium font-sans">
                          {pop.email}
                        </div>
                        <div className=" col-span-1 text-primary ">About</div>
                        <div className=" col-span-7 text-text_color font-sans font-medium">
                          {pop.description}
                        </div>
                        <div className=" col-span-1 text-primary text-3xl">
                          <MdWorkOutline />
                        </div>
                        <div className=" col-span-7 text-text_color font-medium font-sans">
                          {pop.work}
                        </div>
                      </div>
                    </div>
                    <button className="btn btn-secondary mt-5 " onClick={showdetail}>
                      close
                    </button>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Member;
