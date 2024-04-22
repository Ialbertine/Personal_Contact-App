import React from "react";
import { Link } from "react-router-dom";
import { CiViewList } from "react-icons/ci";
import { BsFillTrash3Fill } from "react-icons/bs";

const ContactList = ({ contact, clickDelete }) => {
   const handleDelete = () => {
    clickDelete(contact.id);
   };

  return (
    <div className="w-[90%] lg:w-[70%] bg-[#100d13] text-[white] rounded-lg p-4 justify-center items-center lg:ml-[4rem]">
      {/* Image */}
      <div className="flex justify-center">
        <img
          alt="avatar"
          src="./img/Blackgirl.webp"
          className="w-[120px] h-[120px] rounded-full object-cover shadow-sm"
        />
      </div>

      {/* List */}
      <div className="flex justify-center mt-4">
        <ul className="">
          <li className="text-xl">
            Full-Name: <span>{contact.fullName}</span>
          </li>
          <li className="text-xl">
            Email: <span> {contact.email}</span>
          </li>
          <li className="text-xl">
            Phone: <span> {contact.phone}</span>
          </li>
        </ul>
      </div>

      {/* Icons */}
      <div className="flex justify-evenly pt-4">
        <div className="">
          <Link to={`/contacts/view/${contact.id}`} className="mr-2">
            <CiViewList className="text-[#794eb8] text-3xl" />
          </Link>
        </div>
        <div>
          <button className="" onClick={handleDelete}>
            <BsFillTrash3Fill className="text-[#794eb8] text-3xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactList;
