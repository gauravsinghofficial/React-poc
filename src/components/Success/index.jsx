import React from "react";
import "./styles.scss";

const Success = () => {
  return (
    <div className="success_card_container">
      <div className="success_card">
        <div>
          <i className="success_card_checkmark">✓</i>
        </div>
        <h1>Booked Successfully</h1>
        <p>
          Congratulations! Your movie ticket has been booked successfully. Sit
          back, relax, and get ready to enjoy your movie. Don't forget to arrive
          on time and bring your ticket confirmation with you. Enjoy the show!
        </p>
      </div>
    </div>
  );
};

export default Success;
