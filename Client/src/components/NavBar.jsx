import React from "react";
import { GiNotebook } from "react-icons/gi";
const NavBar = () => {
  return (
    <nav className="py-6 bg-black text-white w-full">
      <div className="flex pl-[10rem] text-3xl">
        <GiNotebook className="text-yellow-300 text-3xl mr-2" />
        Contact <span className="text-yellow-300">-APP</span>
      </div>
    </nav>
  );
};

export default NavBar;
