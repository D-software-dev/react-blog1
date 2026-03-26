import { Link } from "react-router-dom";
import "./topbar.css";
import { Context } from "../../context/Context";
import { useContext, useState } from "react";

export default function TopBar() {
  const [navOpen, setNavOpen] = useState(false);
  const { user, dispatch } = useContext(Context);
  // const PF = "http://localhost:5000/images/";

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  console.log("TopBar user: ", user);

  return (
    <div className="clipper">
      <div className="top">
        <div className="topLeft">
          <i className="topIcon fa-brands fa-square-facebook"></i>
          <i className="topIcon fa-brands fa-square-twitter"></i>
          <i className="topIcon fa-brands fa-square-pinterest"></i>
          <i className="topIcon fa-brands fa-square-instagram"></i>
        </div>
        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">
              <Link to="/" className="link">
                HOME
              </Link>
            </li>
            <li className="topListItem">
              <Link to="/" className="link">
                ABOUT
              </Link>
            </li>
            <li className="topListItem">
              <Link to="/" className="link">
                CONTACT
              </Link>
            </li>
            <li className="topListItem">
              <Link to="/write" className="link">
                WRITE
              </Link>
            </li>
            <li className="topListItem">
              <Link to="/" className="link" onClick={handleLogout}>
                {user && "LOGOUT"}
              </Link>
            </li>
          </ul>
        </div>
        <div className="topRight">
          {user ? (
            <Link to="/settings">
              <img
                className="topImg"
                src={user.profilePic ? user.profilePic : "avatar.jpg"}
                alt="Profile"
              />
            </Link>
          ) : (
            <ul className="topList">
              <li className="topListItem">
                <Link className="link" to="/login">
                  LOGIN
                </Link>
              </li>
              <li className="topListItem">
                <Link className="link" to="/register">
                  REGISTER
                </Link>
              </li>
            </ul>
          )}
          <div className="searchIcon">
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
          </div>
          <div
            className={`hamburgerIcon ${navOpen ? "open" : ""}`}
            onClick={() => setNavOpen(!navOpen)}
          >
            {navOpen ? (
              <i className="fa-solid fa-xmark"></i>
            ) : (
              <i className="fa-solid fa-bars"></i>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
