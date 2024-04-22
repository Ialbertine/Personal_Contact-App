import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import UpdateContact from "../Pages/UpdateContact";
import ViewContact from "../Pages/ViewContact";
import CreateContact from "../Pages/CreateContact";

const MainRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route>
          <Route path="" element={<Home />} />
          <Route path="/Create" element={<CreateContact />} />
          <Route path="View/:contactId" element={<ViewContact />} />
          <Route path="/update/:contactId" element={<UpdateContact />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default MainRoutes;
