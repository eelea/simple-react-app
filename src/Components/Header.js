import React from "react";
import Menu from "./Menu";

function Header() {
  return (
    <header className="border-b p-3 flex justify-between item-center">
      {/* Here we are using tailwind classes*/}
      <span className="font-bold"> SimpleReactApp</span>
      <Menu />
    </header>
  );
}

export default Header;
