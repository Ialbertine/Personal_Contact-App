import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



const UpdateContact = () => {
  const { contactId } = useParams();
      const navigate = useNavigate();
      const [loading, setLoading] = useState(false);
      const [contact, setContact] = useState({
        fullName: "",
        phone: "",
        email: "",
      });

      useEffect(() => {
        fetchContact(); 
      }, []);

      const fetchContact = () => {
        axios
          .get(
            `${import.meta.env.VITE_BASE_API}/contact/findById?id=CONTACT_ID`
          )
          .then((response) => {
            setContact(response.data.contact);
          })
          .catch((error) => {
            console.error("Error fetching contact:", error);
          });
      };

      const handleSubmitContact = (event) => {
        event.preventDefault();

        if (
          contact.fullName === "" ||
          contact.email === "" ||
          contact.phone === ""
        ) {
          setMessage({
            type: "error",
            content: "Please fill out all fields",
          });
          return;
        }

        setLoading(true);

        updateContactAPI(contact)
          .then((response) => {
            setLoading(false);
            setMessage({
              type: "success",
              content: "Contact updated successfully",
            });

            setTimeout(() => {
              navigate("/");
            }, 2000);
          })
          .catch((error) => {
            setLoading(false);
            setMessage({
              type: "error",
              content: "Failed to update contact",
            });
          });
      };

      const handleInput = (event) => {
        setContact({ ...contact, [event.target.name]: event.target.value });
      };
  return (
    <div className="flex flex-col h-screen bg-[gray]">
      <div className="pl-[10rem] mt-[5rem] lg:ml-[10rem]">
        <h2 className="text-3xl font-bold">
          Edit <span className="text-[#9034e6]">Contact</span>
        </h2>
        <p class="w-[80%] pt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum rem
          voluptatem dicta consectetur.
        </p>
      </div>
      <form
        onSubmit={handleSubmitContact}
        class="mx-auto mt-8 mb-8 w-[60%] space-y-4 items-center justify-between"
      >
        <div class="relative">
          <input
            type="text"
            name="fullName"
            value={contact.fullName}
            onChange={handleInput}
            class="w-full rounded-lg border-black p-4 pe-12 text-sm shadow-sm border hover:border-[2px]"
            placeholder="Enter full name"
          />
        </div>
        <div class="relative">
          <input
            type="email"
            name="email"
            value={contact.email}
            onChange={handleInput}
            class="w-full rounded-lg border-black p-4 pe-12 text-sm shadow-sm border hover:border-[2px]"
            placeholder="Enter email"
          />
        </div>
        <div class="relative">
          <input
            type="tel"
            name="phone"
            value={contact.phone}
            onChange={handleInput}
            class="w-full rounded-lg border-black p-4 pe-12 text-sm shadow-sm border hover:border-[2px]"
            placeholder="Enter phone number"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            disabled={loading}
            className="inline-block rounded-lg bg-[#8549ba] hover:bg-[#3e0c78] px-5 py-3 text-sm font-medium text-white"
          >
            {loading && "loading..."}
            {!loading && "Update"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateContact;