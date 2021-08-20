import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../../features/user/userSlice";
import TokenService from "../../services/token-service";
import { useHistory } from "react-router";

const LoginPage = () => {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (ev) => {
    ev.preventDefault();

    console.log("ping");

    dispatch(
      logIn({
        email: email,
        password: password,
        isUserAuth: true,
      })
    );

    TokenService.saveAuthToken(`${email}${password}`);

    setEmail("");
    setPassword("");

    console.log(TokenService.hasAuthToken());

    if (TokenService.hasAuthToken()) {
      history.push("/home");
    }
  };

  return (
    <form onSubmit={handleSubmit} action="submit">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(ev) => setEmail(ev.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(ev) => setPassword(ev.target.value)}
      />
      <button>Login</button>
    </form>
  );
};

export default LoginPage;
