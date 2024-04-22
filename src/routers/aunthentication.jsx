import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import ViewContact from "../Pages/ViewContact";
import UpdateContact from "../Pages/UpdateContact";
import ErrorPage from "../pages/ErrorPage";

const authentication = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="" element={<Home />} />
          <Route path="/:contactId" element={<ViewContact/>} />
          <Route path="/update/:contactId" element={<UpdateContact />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default authentication;
