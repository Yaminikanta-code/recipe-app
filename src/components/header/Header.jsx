import React from "react";
import { MenuBar, Avatar } from "../common";
import Logo from "./Logo";

function Header() {
  return (
    <MenuBar className="justify-between">
      <Logo />
      <div className="flex items-center">
        <Avatar className="mx-4">UF</Avatar>
      </div>
    </MenuBar>
  );
}

export default Header;
