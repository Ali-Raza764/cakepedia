import React from "react";
import { Link } from "react-router-dom";
import CakeIcon from '../assets/cake-icon.png'

const Header = () => {
  return (
    <div
      className="flex justify-center items-center sticky bg-white
    top-0 w-full z-50 border-b-2 border-gray-400 p-2"
    >
      <Link to={'/'}>
        <div className="flex items-center text-xl text-gray-900 font-semibold">
          <img src={CakeIcon} className="h-9" alt="CakePedia" />
          <p className="mx-5">CakePedia</p>
        </div>
      </Link>
    </div>
  );
};

export default Header;
