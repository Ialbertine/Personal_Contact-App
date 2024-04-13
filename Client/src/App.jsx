import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./Pages/Home";
import CreateContact from "./Pages/CreateContact";
import UpdateContact from "./Pages/UpdateContact";
import ViewContact from "./Pages/ViewContact";

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Create" element={<CreateContact />} />
          <Route path="/Edit" element={<UpdateContact />} />
          <Route path="/View" element={<ViewContact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
