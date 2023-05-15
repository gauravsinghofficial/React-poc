import React from "react";
import { useContext } from "react";
import { UserCredentialContext } from "../../contexts/UserCredentials";
import './styles.scss'

const User = ({ credentials }) => {
  const { credential } = useContext(UserCredentialContext);
  const { name, email, picture } = credential;
  console.log("This is credentials", credential);
  return (
    <>
      <div className="card">
        <img src={picture} alt="User" className="image"  />
        <h1>{name}</h1>
        <p>{email}</p>
      </div>
    </>
  );
};

export default User;
