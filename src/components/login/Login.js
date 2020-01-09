import React, { useState, useEffect } from "react";
import useForm from "react-hook-form";
import * as yup from "yup";
import useLocalStorage from "react-use-localstorage";
import { useHistory } from "react-router-dom";
import "./Form.scss";

export default function Login() {
  const defaultUsername = "user";
  const defaultPassword = "password";
  const [username, setUsername] = useLocalStorage("username", defaultUsername);
  const [password, setPassword] = useLocalStorage("password", defaultPassword);
  const history = useHistory();
  const [loginError, setLoginError] = useState(null);

  useEffect(() => {
    setUsername(defaultUsername);
    setPassword(defaultPassword);
  });

  const schema = yup.object().shape({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required")
  });

  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema
  });

  function onSubmit(data) {
    if (data.username === username && data.password === password) {
      history.push("/home");
      setLoginError(null);
    } else {
      setLoginError("Username or password is invalid");
    }
  }

  return (
    <div className="wrapper">
      <div className="form-container">
        <h2>Login to view card game</h2>
        <p>
          username: user <br /> password: password
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="username">
            <b>Username</b>
          </label>
          <input
            type="text"
            name="username"
            placeholder="Enter username"
            ref={register({ required: true })}
          />
          {errors.username && <p>{errors.username.message}</p>}

          <label htmlFor="password">
            <b>Password</b>
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            ref={register({ required: true })}
          />
          {errors.password && <p>{errors.password.message}</p>}
          <button type="submit">Submit</button>
          {loginError && <p>{loginError}</p>}
        </form>
      </div>
    </div>
  );
}
