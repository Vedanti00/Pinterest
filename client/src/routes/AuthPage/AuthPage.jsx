import React, { useState } from "react";
import "./authpage.css";
import Images from "../../components/images/Images";

const AuthPage = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState("");
  return (
    <div className="authPage">
      <div className="authContainer">
        <Images src="/general/logo.png" w={36} h={36} alt="log-img" />
        <h1>{isRegister ? "Create your account" : "Login to your account"}</h1>
        {isRegister ? (
          <form key= "registerForm">
            <div className="formGroup">
              <label htmlFor="email">Username</label>
              <input
                type="username"
                name="username"
                id="username"
                placeholder="Username"
                required
              />
            </div>
            <div className="formGroup">
              <label htmlFor="password">Name</label>
              <input
                type="name"
                name="name"
                id="name"
                placeholder="Name"
                required
              />
            </div>
            <div className="formGroup">
              <label htmlFor="password">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="formGroup">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                required
              />
            </div>
            <button type="submit">Register</button>
            <p onClick={() => setIsRegister(false)}>
              Do you have an account? <b>Login</b>
            </p>
            {error && <p className="error">{error}</p>}
          </form>
        ) : (
          <form key="loginForm">
            <div className="formGroup">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="formGroup">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                required
              />
            </div>
            <button type="submit">Login</button>
            <p onClick={() => setIsRegister(true)}>Don't have an account?</p>
            {error && <p className="error">{error}</p>}
          </form>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
