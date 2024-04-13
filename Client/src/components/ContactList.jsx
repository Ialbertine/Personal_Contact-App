import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';



const ContactList = ({ contact, clickDelete }) => {
  return (
    <div className="">
      <div>
        <img
          alt="Blackgirl"
          src="./src/assets/Blackgirl.png"
          className="size-16 rounded-lg object-cover shadow-sm"
        />
      </div>
      <ul>
        <li>
          Full-Name: <span></span>
        </li>
        <li>
          Email: <span></span>
        </li>
        <li>
          Phone: <span></span>
        </li>
      </ul>
      <div className="flex pl-[10rem] text-3xl">
        <Link to={`/contacts/view/${contact.id}`} className="">
          <i className="fa fa-eye" />
        </Link>
        <Link to={`/contacts/edit/${contact.id}`} className="">
          <i className="fa fa-pen" />
        </Link>
        <button className="" onClick={() => clickDelete(contact.id)}>
          <i className="fa fa-trash" />
        </button>
      </div>
    </div>
  );
};

export default ContactList