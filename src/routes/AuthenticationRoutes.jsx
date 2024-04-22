import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import UpdateContact from "../Pages/UpdateContact";
import ViewContact from "../Pages/ViewContact";

const AuthenticationRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route>
          <Route path="" element={<Home />} />
          <Route path="/:contactId" element={<ViewContact />} />
          <Route path="/update/:contactId" element={<UpdateContact />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AuthenticationRoutes;
