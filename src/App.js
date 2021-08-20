import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import LoginPage from "./routes/LoginPage/LoginPage";
import HomePage from "./routes/HomePage/HomePage";
import PrivateRoute from "./routes/PrivateRoute/PrivateRoute";
import CrudPage from "./routes/CrudPage/CrudPAge";
import { useSelector } from "react-redux";
import { selectUser } from "./features/user/userSlice";
import "antd/dist/antd.css";
import MainPage from "./routes/MainPage/MainPage";

function App() {
  const user = useSelector(selectUser);

  return (
    <div className="App">
      {!user ? (
        <Switch>
          <Route exact path={"/"}>
            <LoginPage />
          </Route>
          <PrivateRoute component={MainPage} path={"/main"} />
          <PrivateRoute path={"/"}/>
        </Switch>
      ) : (
        <MainPage />
      )}
    </div>
  );
}

export default App;
