import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import "./styles.scss";

const Footer = () => {
  return (
    <div className="footer">
      <img src={require("../../assets/img/logo.png")} alt="" />
      <div className="icon">
        <Link to={"https://www.facebook.com"}>
          <FaFacebook className="i" />
        </Link>

        <Link to={"https://www.instagram.com"}>
          <FaInstagram className="i" />
        </Link>

        <Link to={"https://www.twitter.com"}>
          <FaTwitter className="i" />
        </Link>

        <Link to={"https://www.youtube.com"}>
          <FaYoutube className="i" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
