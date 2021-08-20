import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../../features/user/userSlice";
import TokenService from "../../services/token-service";
import { useHistory } from "react-router";
import "./LoginPage.css";
import ReactLoading from "react-loading";

const LoginPage = () => {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = (ev) => {
    ev.preventDefault();

    setIsLoading(true);

    TokenService.postLogin(email, password)
      .then((response) => {
        dispatch(
          logIn({
            email: email,
            password: password,
            isUserAuth: true,
            authToken: response.data.authToken,
          })
        );
        history.push("/home");
      })
      .catch((err) => {
        setErr(true);
        setIsLoading(false);
      });
  };

  return (
    <div className="login__page__container">
      <form onSubmit={handleSubmit} className="login__form" action="submit">
        <div className="login__header__container">
          <h1 style={{ color: "#fff" }}>Welcome Back!</h1>
          <h2 style={{ color: "#fff" }}>Login</h2>
        </div>
        <input
          required
          className="login__input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
        />
        <input
          required
          className="login__input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        {isLoading ? (
          <ReactLoading height={80} width={80} type="balls" />
        ) : (
          <button
            style={{ width: "90%", marginTop: 25, backgroundColor: "#8ab4f8" }}
            className="btn"
          >
            Login
          </button>
        )}
        {err && (
          <div style={{ marginTop: 20 }} className="err__conatiner">
            <p style={{ color: "#e16a6a" }}>
              Something went wrong try again later!
            </p>
          </div>
        )}
      </form>
    </div>
  );
};

export default LoginPage;
