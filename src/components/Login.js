import React from "react";

const Login = () => {
  return (
    <div className="login-box">
      <h2>Login</h2>
      <form action="/payment">
        <input
          type="text"
          placeholder="Email/Username"
          name="email"
          required
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          required
        />
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
      <h4>
        Don't have an account? <a href="/signup">Sign up</a>
      </h4>
    </div>
  );
};

export default Login;