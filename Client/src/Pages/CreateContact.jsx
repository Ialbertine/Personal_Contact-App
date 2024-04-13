import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addcontact } from "../apis/contactFetch"; // Corrected import

const CreateContact = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState({ type: "", content: "" });
  const [loading, setLoading] = useState(false);
  const [contact, setContact] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  const handleInput = (event) => {
    const { name, value } = event.target;
    setContact((prevContact) => ({
      ...prevContact,
      [name]: value,
    }));
  };

  const handleSubmitContact = async (event) => {
    event.preventDefault();

    if (!contact.fullName || !contact.email || !contact.phone) {
      setMessage({ type: "error", content: "All fields are required" });
      return;
    }

    setLoading(true);
    try {
      const response = await addcontact(contact); // Corrected function name
      setLoading(false);
      setMessage({
        type: "success",
        content: response,
      });

      setContact({
        fullName: "",
        phone: "",
        email: "",
      });

      setTimeout(() => {
        // Using react-router-dom
        navigate("/");
      }, 2000);
    } catch (error) {
      setMessage({
        type: "error",
        content: error.message,
      });
      setLoading(false);
    }
  };
  return (
    <div class="flex flex-col h-screen">
      <div className="pl-[10rem] mt-[5rem] lg:ml-[10rem]">
        <h2 className="text-3xl font-bold">
          Add <span className="text-[#9034e6]">Contact</span>
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
        <div class="flex items-center justify-between">
          <button
            type="submit"
            disabled={loading}
            class="inline-block rounded-lg bg-[#8549ba] hover:bg-[#3e0c78] px-5 py-3 text-sm font-medium text-white"
          >
            {loading && "loading...🐥"}
            {!loading && "Add contact"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateContact;
