import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { AiFillCaretDown, AiOutlineMenu, AiOutlineUser } from "react-icons/ai";
import { Popup } from "devextreme-react/popup";
import Signinpopup from "../Siginpopup";
import "devextreme/dist/css/dx.light.css";
import { Button } from "devextreme-react/button";
import Sidebar from "../Sidebar";
import { useContext } from "react";
import { UserCredentialContext } from "../../contexts/UserCredentials";
import "./styles.scss";
import User from "../User";

const Navbar = ({ credentials }) => {
  const [isPopupVisible, setPopupVisibility] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [displayBtn, setDisplayBtn] = useState(false);
  const [user, setUser] = useState(false);

  const { credential } = useContext(UserCredentialContext);
  const { given_name } = credential;
  const handleClick = () => {
    setPopupVisibility(!isPopupVisible);
  };

  const handleUser = () => {
    setUser(!user);
  };
  const handleSidebar = () => {
    setSidebar(!sidebar);
  };

  const handleStatusCall = (data) => {
    console.log(data);
    setDisplayBtn(data);
    setPopupVisibility(false);
  };

  const renderContent = () => {
    return <Signinpopup handleStatusCall={handleStatusCall} />;
  };

  const renderUser = () => {
    return <User />;
  };

  return (
    <>
      <div className="navbar">
        <Link to={"/"}>
          <img
            src={require("../../assets/img/logo.png")}
            className="brand-logo"
            alt=""
          />
        </Link>
        <div className="input">
          &nbsp; &nbsp;
          <FiSearch className="icon" />
          &nbsp; &nbsp;
          <input
            className="search"
            placeholder="Search for Movies, Events, Plays, Sports, and Activities"
          ></input>
        </div>
        <div className="right-container">
          <div>
            <Link className="location" to="/">
              Delhi-NCR <AiFillCaretDown />
            </Link>
          </div>
          <div>
            <Popup
              visible={isPopupVisible}
              hideOnOutsideClick={true}
              onHiding={handleClick}
              contentRender={renderContent}
              width={400}
              height={500}
              resizeEnabled={true}
            />
            <Popup
              visible={user}
              hideOnOutsideClick={true}
              onHiding={handleUser}
              contentRender={renderUser}
              width={400}
              height={500}
              resizeEnabled={true}
            />
            {displayBtn ? (
              <div
                className="user"
                style={{ color: "white" }}
                onClick={handleUser}
              >
                <AiOutlineUser /> Hi {given_name}
              </div>
            ) : (
              <Button className="signin" onClick={handleClick} text="SignIn" />
            )}
          </div>
          <div>
            <Link
              to="/"
              className="open-menu"
              style={{ color: "#c7cacb" }}
              onClick={handleSidebar}
            >
              <AiOutlineMenu />
            </Link>
          </div>
          {sidebar ? (
            <Sidebar
              onClickOutside={() => setSidebar(false)}
              displayStatus={displayBtn}
              handleStatusCall={handleStatusCall}
              setPopupVisibility={setPopupVisibility}
            />
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Navbar;
