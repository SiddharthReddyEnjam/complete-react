import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="login">
      <h2>Login</h2>
      <form className="form">
        <label>Username</label>
        <br></br>
        <input type="text" placeholder="Enter user name" />
        <br></br>
        <label>Password</label>
        <br></br>
        <input type="password" placeholder="Enter password" />
        <br></br>
        <button>login</button>
      </form>
      <Link to="/home" className="path-home">
        Proceed to Home without Login{`>>`}
      </Link>
    </div>
  );
}
