import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./Pages/Home";
import CreateContact from "./Pages/CreateContact";
import UpdateContact from "./Pages/UpdateContact";
import ViewContact from "./Pages/ViewContact";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Create" element={<CreateContact />} />
        <Route path="/Edit/:id" element={<UpdateContact />} />
        <Route path="/view/:id" element={<ViewContact />} />
      </Routes>
    </BrowserRouter>
  );
};


export default App;
