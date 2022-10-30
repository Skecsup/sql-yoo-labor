import React, { useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { Styled_Login } from "../styles/Login.style";
const Login = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState([]);

  const register = async (e) => {
    e.preventDefault();
    const response = await fetch("api/register", {
      method: "POST",
      body: JSON.stringify({ name: name, password: password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (data.route === "/welcome") {
      Cookies.set("loggedin", "true");
    }
    router.push(data.route);
  };
  console.log(result);
  return (
    <Styled_Login>
      <form onSubmit={register}>
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
