import React, { useState } from "react";

import { Styled_Login } from "../styles/Login.style";
import { useAppContext } from "../context/appContext";
const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const { loginHandler } = useAppContext();

  return (
    <Styled_Login>
      <form onSubmit={(e) => loginHandler(e, name, password)}>
        <label htmlFor="">Username</label>
        <input
          type="text"
          autoComplete="username"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          minLength={6}
          required
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </Styled_Login>
  );
};

export default Login;
