import React from "react";
import Menu from "./Menu";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="border-b p-3 flex justify-between item-center">
      {/* Here we are using tailwind classes*/}
      <Link to="/">
        <span className="font-bold"> SimpleReactApp</span>
      </Link>
      <Menu />
    </header>
  );
}

export default Header;
