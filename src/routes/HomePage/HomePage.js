import React from "react";
import { useHistory } from "react-router";
import "./HomePage.css";

const HomePage = () => {
  const history = useHistory();

  return (
    <div className="home__page__container">
      <h1 style={{ color: "#fff" }}>Welcome to the To-do app</h1>
      <p style={{ color: "#fff" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <button onClick={() => history.push("/to-do")}>Go to todo page</button>
    </div>
  );
};

export default HomePage;
