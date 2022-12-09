import React from "react";
import { useState } from "react";
import { memberInfodata } from "../memberdata/data";
import { CiFacebook } from "react-icons/ci";
import { VscGithub } from "react-icons/vsc";
import { FiTwitter } from "react-icons/fi";
import Modal from "./Modal";

const Membercard = () => {
  const [memberinfo, setMemberinfo] = useState(memberInfodata);
  const [show, setShow] = useState(false);
  const [selectedMember, setSelectedMember] = useState();
  return (
    <>
      <div>
        <div className="container mx-auto flex flex-wrap gap-10 justify-center mt-8 leading-8">
          {memberinfo.map((member) => (
            <div
              className="shadow-xl text-center hover:scale-105 "
              key={member.id}
              onClick={() => {
                setShow(true);
                setSelectedMember(member);
              }}
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
          ))}
        </div>
      </div>

      <Modal
        show={show}
        selectedMember={selectedMember}
        onClose={() => setShow(false)}
      />
    </>
  );
};

export default Membercard;
