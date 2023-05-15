import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  IoChevronForwardOutline,
  IoNotificationsOutline,
  IoTicketOutline,
  IoTvOutline,
  IoSettingsOutline,
  IoGiftOutline,
  IoLockClosedOutline,
  IoChatbubbleEllipsesOutline,
} from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
// import { GoogleLogout } from "react-google-login";
import { googleLogout } from "@react-oauth/google";
import "react-toastify/dist/ReactToastify.css";
import notify from "devextreme/ui/notify";
import "./styles.scss";

const Sidebar = (props) => {
  const { onClickOutside } = props;
  const [sidebar, setSidebar] = useState(true);
  const ref = useRef(null);
  useEffect(() => {
    let handler = (e) => {
      if (!ref.current.contains(e.target)) {
        setSidebar(true);
        onClickOutside();
      }
    };
    document.addEventListener("mousedown", handler, true);
    return () => {
      document.removeEventListener("mousedown", handler, true);
    };
  }, [onClickOutside, sidebar]);

  const handleLogoutClick = () => {
    props.handleStatusCall(false);
    console.log("logging out...");
    googleLogout();
    localStorage.removeItem("token");
    notify("Logout Successfully");
    console.log("logged out");
  };
  const handleLogin = () => {
    props.setPopupVisibility(true);
  };

  return (
    <div className="sidebar" ref={ref}>
      <nav className="sidenavbar">
        <h1>Hey!</h1>
      </nav>

      <nav className="sidesubnavbar">
        <img src={require("../../assets/img/rewards.webp")} alt="Reward Img" />
        <p>Unlock special offers & great benifits</p>
        {props?.displayStatus ? (
          <Link to="/" className="Link">
            <button className="login">Hi User!</button>
          </Link>
        ) : (
          <button className="login" onClick={handleLogin}>
            Login / Register
          </button>
        )}
      </nav>

      <Link to="/" className="Link">
        <div className="lefticon">
          <IoNotificationsOutline />
        </div>
        <div className="text">Notifications</div>
        <div className="righticon">
          <IoChevronForwardOutline />
        </div>
      </Link>
      <Link className="btn-disabled Link" to="/">
        <div className="lefticon">
          <IoTicketOutline />
        </div>
        <div className="text">
          Purchase History
          <br />
          <div className="subtext">View all your bookings & Purchases</div>
        </div>
        <div className="righticon">
          <IoLockClosedOutline />
        </div>
      </Link>
      <Link className="btn-disabled Link" to="/">
        <div className="lefticon">
          <IoTvOutline />
        </div>
        <div className="text">
          Stream Library
          <br />
          <div className="subtext">Rented & Purchased Movies</div>
        </div>
        <div className="righticon">
          <IoLockClosedOutline />
        </div>
      </Link>
      <Link to="/" className="Link">
        <div className="lefticon">
          <IoChatbubbleEllipsesOutline />
        </div>
        <div className="text">
          Help & Support
          <br />
          <div className="subtext">View commonly asked queries and Chat</div>
        </div>
        <div className="righticon">
          <IoChevronForwardOutline />
        </div>
      </Link>
      <Link className="btn-disabled Link" to="/">
        <div className="lefticon">
          <IoSettingsOutline />
        </div>
        <div className="text">
          Accounts & Settings
          <br />
          <div className="subtext">Location, Payments, Addresses & More</div>
        </div>
        <div className="righticon">
          <IoLockClosedOutline />
        </div>
      </Link>
      <Link to="/" className="Link">
        <div className="lefticon">
          <IoGiftOutline />
        </div>
        <div className="text">
          Rewards
          <br />
          <div className="subtext">View your rewards & unlock new ones</div>
        </div>
        <div className="righticon">
          <IoChevronForwardOutline />
        </div>
      </Link>
      <Link to="/" className="Link">
        <div className="lefticon">
          <IoMdHeartEmpty />
        </div>
        <div className="text">BookASmile</div>
        <div className="righticon">
          <IoChevronForwardOutline />
        </div>
      </Link>
      {props?.displayStatus ? (
        <Link to="/" className="Link">
          <button className="login" onClick={handleLogoutClick}>
            Logout
          </button>
        </Link>
      ) : null}
    </div>
  );
};

export default Sidebar;
