import React from "react";
import { Link } from "react-router-dom";
// import { AiOutlineMail } from "react-icons/ai";
import { GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import "devextreme/dist/css/dx.light.css";
import "./styles.scss";
import { UserCredentialContext } from "../../contexts/UserCredentials";
import { useContext } from "react";

const Signinpopup = ({ handleStatusCall }) => {
  const { setCredential } = useContext(UserCredentialContext);
  const responseMessage = (response) => {
    console.log("Login Successful", response);
    localStorage.setItem("token", response.credential);
    const credentials = jwtDecode(response.credential);
    setCredential(credentials);
    console.log(credentials);
    handleStatusCall(true);
  };
  const errorMessage = (error) => {
    console.error("Error----------", error);
  };
  return (
    <>
      <div className="container1">
        <Link to="/" className="button">
          <div className="text">
            <GoogleLogin
              onSuccess={responseMessage}
              onError={errorMessage}
              useOneTap
            />
          </div>
        </Link>
      </div>
      <h4>OR</h4>

      <div className="phone1">
        <img
          className="indian-flag"
          alt="indian flag"
          src={require("../../assets/img/indianflag.svg").default}
        />
        <div className="code1">+91</div>
        <input
          id="mobileNo"
          type="tel"
          pattern="[0-9]*"
          placeholder="Continue with mobile number"
          className="mobileNo"
        />
      </div>

      <div className="terms1">
        I agree to the <u>Terms & Conditions </u>&<u> Privacy Policy</u>
      </div>
    </>
  );
};
export default Signinpopup;
