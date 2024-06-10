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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum non
            corrupti totam, ab ex quas numquam tempore libero dolores pariatur
            dolore corporis, cupiditate impedit qui! Nisi iure nihil reiciendis
            dolorem?
          </p>
          <div className="footer-social-icons">
            <ul>
              <li>
                <i className="fa-brands fa-facebook"></i>
              </li>
              <li>
                <i className="fa-brands fa-linkedin"></i>
              </li>
              <li>
                <i className="fa-brands fa-twitter"></i>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-223-556-7878</li>
            <li>company@foodtogo.com</li>
          </ul>
        </div>
      </div>

      <hr />

      <p className="footer-copyright">Copyright 2024 © foodtogo.com - All rights reserved.</p>
    </div>
  );
};

export default Footer;
