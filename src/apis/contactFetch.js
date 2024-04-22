import axios from "axios";
const API = "https://contact-app-server-nxgi.onrender.com/api/v1/contactapp";

export const FetchContacts = async () => {
  try {
    const response = await axios.get(`${API}/contact/list`);
    return response.data.contacts;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const FetchContactById = async (id) => {
  try {
    const response = await axios.get(`${API}/contact/findById?id=${id}`);
    return response.data.contact;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const UpdateContact = async (updatedContact) => {
  try {
    const response = await axios.put(`${API}/contact/update`, updatedContact);
    console.log(response.data.message);
    return response.data.message;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const addContact = async (contact) => {
  // Changed function name to follow camelCase convention
  try {
    const response = await axios.post(`${API}/contact/add`, contact);
    console.log(response.data.message);
    return response.data.message;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const DeleteContact = async (id) => {
  try {
    const response = await axios.delete(`${API}/contact/delete?id=${id}`);
    console.log(response.data.message);
    return response.data.message;
  } catch (err) {
    console.log(err);
    throw err;
  }
};