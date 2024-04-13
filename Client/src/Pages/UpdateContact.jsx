import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const UpdateContact = () => {
      const navigate = useNavigate(); // Initialize useNavigate hook
      const [contact, setContact] = useState({
        fullName: "",
        email: "",
        phone: "",
      });
      const [loading, setLoading] = useState(false);

      const handleInput = (e) => {
        const { name, value } = e.target;
        setContact((prevContact) => ({
          ...prevContact,
          [name]: value,
        }));
      };

      const handleSubmitContact = (e) => {
        e.preventDefault();
        setLoading(true); // Set loading state to true while processing

        // Simulating an API call (remove this in your actual code)
        setTimeout(() => {
          setLoading(false); // Set loading state to false after processing
          // Redirect to another page after updating the contact
          navigate("/updated"); // Use navigate instead of history.push
        }, 2000); // Simulating a delay of 2 seconds
      };
  return (
    <div className="flex flex-col h-screen">
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
            {loading && "loading...🐥"}
            {!loading && "Update"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateContact;