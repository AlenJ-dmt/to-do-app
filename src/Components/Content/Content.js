import React from "react";
import "./Content.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "../../routes/HomePage/HomePage";
import CrudPage from "../../routes/CrudPage/CrudPAge";
import PrivateRoute from "../../routes/PrivateRoute/PrivateRoute";
import AddTaskPage from "../../routes/AddTaskPage/AddTaskPage";
import DetailPage from "../../routes/DetailPage/DetailPage";

const Content = () => {
  return (
    <div className="content__container">
      <Switch>
        <PrivateRoute component={HomePage} path={"/home"} />
        <PrivateRoute component={CrudPage} path={"/to-do"} />
        <PrivateRoute component={AddTaskPage} path={"/addTask"} />
        <PrivateRoute component={DetailPage} path={"/details/:taskId"} />
        <PrivateRoute component={AddTaskPage} path={"/edit/:taskId"} />

      </Switch>
    </div>
  );
};

export default Content;
