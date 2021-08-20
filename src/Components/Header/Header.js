import React from "react";
import "./Header.css";
import { HiOutlineLogout } from "react-icons/hi";

const Header = (props) => {

  return (
    <div className="top__bar__container">
      <HiOutlineLogout
        onClick={() => props.logOut()}
        className="top__bar__logout"
        size={35}
      />
    </div>
  );
};

export default Header;