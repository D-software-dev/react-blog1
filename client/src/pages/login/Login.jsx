import { Link } from "react-router-dom";
import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form action="" className="loginForm">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          className="loginInput"
          placeholder="Enter your email..."
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          className="loginInput"
          placeholder="Enter your password..."
        />
        <button className="loginButton">Login</button>
      </form>
      <button className="loginRegisterButton">
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
    </div>
  );
}
