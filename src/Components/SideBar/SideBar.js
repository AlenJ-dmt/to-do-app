import React from "react";
import "./SideBar.css";

import { useHistory, useLocation, Link } from "react-router-dom";

import { IoHomeOutline, IoHome } from "react-icons/io5";
import { BsPlusSquareFill, BsPlusSquare } from "react-icons/bs";
import { RiSearchEyeLine, RiSearchEyeFill } from "react-icons/ri";
import { AiOutlineSetting, AiFillSetting } from "react-icons/ai";
import { RiFileListLine, RiFileListFill } from "react-icons/ri";

const SideBar = () => {
  const location = useLocation();
  const history = useHistory();

  const { pathname } = location;

  return (
    <div className="side__menu__container">
      <h1 className="side__menu__title">Menu</h1>
      <div
        onClick={() => history.push("/home")}
        className="side__menu__option__container"
        style={{
          backgroundColor: pathname === "/home" ? "#3a3b3c" : "",
        }}
      >
        <div className="side__menu__icon__container">
          {pathname === "/home" ? (
            <IoHome size={25} color="white" />
          ) : (
            <IoHomeOutline size={25} color="white" />
          )}
        </div>
        <Link className="side__menu__link" to={"/home"}>
          Home
        </Link>
      </div>

      <div
        onClick={() => history.push("/to-do")}
        className="side__menu__option__container"
        style={{
          backgroundColor: pathname === "/to-do" ? "#3a3b3c" : "",
        }}
      >
        <div className="side__menu__icon__container">
          {pathname === "/to-do" ? (
            <RiFileListFill size={25} color="white" />
          ) : (
            <RiFileListLine size={25} color="white" />
          )}
        </div>
        <Link className="side__menu__link" to={"/to-do"}>
          To-do
        </Link>
      </div>
      <div
        onClick={() => history.push("/addTask")}
        className="side__menu__option__container"
        style={{
          backgroundColor: pathname === "/addTask" ? "#3a3b3c" : "",
        }}
      >
        <div className="side__menu__icon__container">
          {pathname === "/addTask" ? (
            <BsPlusSquareFill size={25} color="white" />
          ) : (
            <BsPlusSquare size={25} color="white" />
          )}
        </div>
        <Link className="side__menu__link" to={"/addTask"}>
          Add Task
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
