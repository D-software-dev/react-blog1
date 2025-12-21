import { Link } from "react-router-dom";
import "./register.css";
import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      const res = await axios.post("/api/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
      console.log(res);
    } catch (error) {
      console.log(error);
      setError(true);
      setLoading(false);
    } finally {
      setLoading(false);
      setUsername("");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form action="" className="registerForm" onSubmit={handleSubmit}>
        <label htmlFor="">Username</label>
        <input
          type="text"
          name=""
          id=""
          className="registerInput"
          placeholder="Enter your username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          className="registerInput"
          placeholder="Enter your email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          className="registerInput"
          placeholder="Enter your password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="registerButton" type="submit">
          {loading ? "Loading..." : "Register"}
        </button>
      </form>
      <button className="registerLoginButton">
        <Link to="/login" className="link">
          Login
        </Link>
      </button>
      {error && (
        <span
          style={{
            color: "hsl(0, 100%, 63.53%)",
            marginTop: "10px",
            backgroundColor: "hsla(0, 100%, 90.97%, 0.73)",
            padding: "1em",
          }}
        >
          Something went wrong!
        </span>
      )}
    </div>
  );
}
