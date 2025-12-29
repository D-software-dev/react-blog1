import { useEffect, useState } from "react";
import "./sidebar.css";
import axios from "axios";
import { Link } from "react-router-dom";
export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const fetchCats = async () => {
      try {
        const res = await axios.get("/api/categories");
        console.log(res.data);
        setCats(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCats();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span> <br />
        <img
          // src="https://i.pinimg.com/236x/1e/3f/58/1e3f587572a7a7b20bbf1828595a1786--holiday-party-themes-holiday-gift-guide.jpg"
          src={"http://localhost:5000/images/8-guy-studying3.jpg"}
          alt="About Me"
        />
        <p>
          {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. */}
          Welcome to my blog! I'm passionate about sharing insights, stories,
          and tips on various topics. Register, so you can do the same.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((cat, index) => {
            return (
              <li key={index} className="sidebarListItem">
                <Link to={`/?cat=${cat.name}`} className="link">
                  {cat.name}
                </Link>
              </li>
            );
          })}
          {/* <li className='sidebarListItem'>Life</li>
          <li className='sidebarListItem'>Music</li>
          <li className='sidebarListItem'>Style</li>
          <li className='sidebarListItem'>Sport</li>
          <li className='sidebarListItem'>Tech</li>
          <li className='sidebarListItem'>Cinema</li> */}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-facebook-square"></i>
          <i className="sidebarIcon fa-brands fa-twitter-square"></i>
          <i className="sidebarIcon fa-brands fa-pinterest-square"></i>
          <i className="sidebarIcon fa-brands fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}
