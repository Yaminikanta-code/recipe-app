import React from "react";
import { MenuBar, Avatar } from "../common";
import Logo from "./Logo";

function Header() {
  return (
    <MenuBar className="justify-between">
      <Logo />
      <div className="flex items-center">
        {user && (
          <Avatar className="mr-2">
            {user.name.slice(0, 2).toUpperCase()}
          </Avatar>
        )}
      </div>
    </MenuBar>
  );
}

export default Header;
