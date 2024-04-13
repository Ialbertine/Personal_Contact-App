import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FetchContacts } from "../apis/contactFetch"; // Import FetchContacts function
import ContactList from "../components/ContactList";

const Home = () => {
  const [query, setQuery] = useState({ text: "" }); // Define the query state

  const searchContacts = (event) => {
    setQuery({ text: event.target.value });
    // Update the query state based on user input
  };

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    FetchContacts()
      .then((response) => {
        setContacts(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="p-10 bg-[gray]">
      <div className="flex justify-between px-[5rem]">
        <h1 className="text-3xl">Contact List</h1>
        <Link to="/Create">
          <button className="bg-[#8549ba] hover:bg-[#3e0c78] text-white font-bold py-2 px-4 rounded">
            Add Contact
          </button>
        </Link>
      </div>
      <div className="mt-[20px] pl-[5rem]">
        <p className="w-[80%] ">
          Welcome to contact list manager application. Please navigate thorugh
          different areas and acknowledge yourself.
        </p>
      </div>
      <div className="flex mt-4 pl-[5rem] gap-2">
        <input
          type="text"
          value={query.text}
          onChange={searchContacts}
          className="border border-black px-3 py-1 rounded-md mr-2 focus:outline-none hover:border-2"
          placeholder="Search Names"
        />
        <Link to="/Search">
          <button className="bg-[#8549ba] hover:bg-[#3e0c78] text-white font-bold py-2 px-4 rounded">
            Search
          </button>
        </Link>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
        {contacts &&
          contacts.map((contact) => (
            <ContactList key={contact._id} contact={contact} />
          ))}
      </div>
    </div>
  );
};

export default Home;
