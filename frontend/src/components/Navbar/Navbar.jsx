import { useState } from "react";
import { assets } from "../../assets/assets";
import "./Navbar.css";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      <a href="">
        <img src={assets.logo} alt="" className="logo" />
      </a>
      <ul className="navbar-menu">
        <li
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </li>
        <li
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </li>
        <li
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          Mobile-app
        </li>
        <li
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          Contact-us
        </li>
      </ul>
      <div className="navbar-right">
        <button>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
        <div className="navbar-basket-icon">
          <button>
            <i className="fa-solid fa-basket-shopping"></i>
          </button>
          <div className="dot"></div>
        </div>
        <button className="sign-in-btn">SIGN IN</button>
      </div>
    </div>
  );
};

export default Navbar;
