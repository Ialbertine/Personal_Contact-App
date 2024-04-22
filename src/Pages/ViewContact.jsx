import React, { useState, useEffect } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ViewContact = () => {
  const [contact, setContact] = useState(null); // Initialize contact as null

  const { contactId } = useParams();

  useEffect(() => {
    fetchContact(contactId); // Fetch contact when component mounts
  }, [contactId]);

  const fetchContact = (id) => {
    axios
      .get(
        `https://contact-app-server-nxgi.onrender.com/api/v1/contactapp/contact/findById?id=${id}`
      )
      .then((resp) => {
        if (resp.data && resp.data.contact) {
          setContact(resp.data.contact);
        } else {
          console.error("Invalid response format");
          alert("Failed to fetch contact. Invalid response format");
        }
      })
      .catch((error) => {
        console.error("Failed to fetch contact:", error);
        alert("Failed to fetch contact. Please try again later.");
      });
  };

  return (
    <div className="flex flex-col items-center justify-between w-[26rem] h-[70%] bg-gray-200 rounded-lg p-6">
      <div className="">
        <h2>View Contact</h2>
        <p className="w-[80%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum rem
          voluptatem dicta consectetur,
        </p>
      </div>
      {contact && ( 
        <div className="text-2xl pb-5">
          <div>
            <img
              alt="Blackgirl"
              src="./src/assets/Blackgirl.png"
              className="size-16 rounded-lg object-cover shadow-sm"
            />
          </div>
          <h2>Name: {contact.fullName}</h2>
          <h2>Email: {contact.email}</h2>
          <h2>Phone: {contact.phone}</h2>
        </div>
      )}
      <div>
        <Link to={`/contacts/Edit/${contactId}`} className="mr-2">
          <AiOutlineEdit className="text-[#794eb8] text-3xl" />
        </Link>
      </div>
    </div>
  );
};

export default ViewContact;
