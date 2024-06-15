import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img className="logo" src={assets.logo} alt="logo" />
          <p>
            Thank you for visiting! Follow us on social media to join our community of food
            enthusiasts and receive exclusive updates.
          </p>
          <div className="footer-social-icons">
            <ul>
              <li>
                <a href="https://www.facebook.com/">
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com/">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#header">About us</a>
            </li>
            <li>
              <a href="#exploreMenu">Menu</a>
            </li>
            <li>
              <a href="#footer">Contact us</a>
            </li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+994-55-555-55-55</li>
            <li>company@foodia.com</li>
          </ul>
        </div>
      </div>

      <hr />

      <p className="footer-copyright">
        Copyright 2024 © foodia.com - All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
