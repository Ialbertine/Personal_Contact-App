import React from 'react'
import { AiOutlineEdit } from "react-icons/ai";

const ViewContact = () => {
  return (
    <div className="flex flex-col items-center justify-between w-[26rem] h-[70%] bg-gray-200 rounded-lg p-6">
      <div className="">
        <h2>View Contact</h2>
        <p className="w-[80%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum rem
          voluptatem dicta consectetur, iste doloremque incidunt commodi
          eligendi magnam nihil libero impedit corporis magni aperiam ut. Autem
          nostrum fugiat dolore.
        </p>
      </div>
      <div className="text-2xl pb-5">
        <div>
          <img
            alt="Blackgirl"
            src="./src/assets/Blackgirl.png"
            className="size-16 rounded-lg object-cover shadow-sm"
          />
        </div>
        <h2>Name: {contact.fullName}</h2>
        <h2>Email: {contact.phone}</h2>
        <h2>Phone: {contact.email}</h2>
      </div>
      <div>
        <Link to={`/contacts/edit/${contact.id}`} className="mr-2">
          <AiOutlineEdit className="text-[#794eb8] text-3xl" />
        </Link>
      </div>
    </div>
  );
}

export default ViewContact