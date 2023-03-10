import React from "react";
import { Outlet } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="ui fixed menu">
        <div className="ui container center">
          <h2>FakeShop</h2>
        </div>
      </div>
      <Outlet />
    </div>
  );
};
export default Header;
