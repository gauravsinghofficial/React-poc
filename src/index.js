import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { PosterContextProvider } from "./contexts/PosterContext";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { UserCredentialProvider } from "./contexts/UserCredentials";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <GoogleOAuthProvider clientId="457748536643-711htsg5j9tod42qi0d0m8foun74qkdl.apps.googleusercontent.com">
    <PosterContextProvider>
      <UserCredentialProvider>
        <Router>
          <App />
        </Router>
      </UserCredentialProvider>
    </PosterContextProvider>
  </GoogleOAuthProvider>
  // </React.StrictMode>
);
