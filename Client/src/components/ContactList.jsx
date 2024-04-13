import React from "react";
import { Link } from "react-router-dom";
import { CiViewList } from "react-icons/ci";

import { BsFillTrash3Fill } from "react-icons/bs";

const ContactList = ({ contact, clickDelete }) => {
  return (
    <div className="w-[90%] lg:w-[70%] bg-[#100d13] text-[white] rounded-lg p-4 justify-center items-center lg:ml-[4rem]">
        {/* Image */}
        <div className="flex justify-center">
            <img
                alt="avatar"
                src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.iconfinder.com%2Ficons%2F334414%2Favatar_contact_face_people_user_female_girl_icon&psig=AOvVaw32PvwvnjtwrPU7XAvQnCGy&ust=1713129552586000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLid4IqPwIUDFQAAAAAdAAAAABAE"
                className="w-16 h-16 rounded-lg object-cover shadow-sm"
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
                <button className="" onClick={() => clickDelete(contact.id)}>
                    <BsFillTrash3Fill className="text-[#794eb8] text-3xl" />
                </button>
            </div>
        </div>
    </div>
    
  );
};

export default ContactList;
