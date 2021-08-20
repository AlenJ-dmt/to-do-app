import React from "react";
import SideBar from "../../Components/SideBar/SideBar";
import Header from "../../Components/Header/Header";
import TokenService from "../../services/token-service";
import { useHistory } from "react-router";
import Content from "../../Components/Content/Content";
import { useDispatch } from "react-redux";
import { logOut } from "../../features/user/userSlice";
import "./MainPage.css"

const MainPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const onLogOut = () => {
    TokenService.clearAuthToken();
    dispatch(logOut());

    history.push("/");
  };

  return (
    <div className="main__page__container">
      <Header logOut={onLogOut} />
      <div className="main__app__side__menu__container ">
        <SideBar />
      </div>
      <Content />
    </div>
  );
};

export default MainPage;
