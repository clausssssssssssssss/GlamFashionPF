import React from "react";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const { pathname } = useLocation();

  return (
    <nav className="w-full flex justify-end items-center px-8 py-4 bg-white">
      <ul className="flex gap-10 text-xs font-semibold tracking-widest uppercase text-black">
      </ul>
    </nav>
  );
};

export default Nav;
