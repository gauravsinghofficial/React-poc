import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import "./styles.scss";

const Bookticket = () => {
  const ref = useRef(null);
  const navigate = useNavigate();
  console.log(ref);
  const [count, setCount] = useState(0);
  const [Price, setPrice] = useState(0);
  function changecolor(e) {
    if (e.target.className !== "row") {
      if (e.target.style.background !== "green") {
        e.target.style.background = "green";
        setCount(count + 1);
        setPrice(Price + 150);
      } else {
        e.target.style.background = " #ad1025";
        setCount(count - 1);
        setPrice(Price - 150);
      }
    }
  }
  const payment = () => {
    navigate("/bookticket/success");
    // if (Price <= 0) {
    //   notify("Select Minimun One Seat");
    // } else {
    //   navigate("/bookticket/payment");
    // }
  };
  const onToken = (token) => {
    console.log(token);
    payment();
  };
  return (
    <>
      <div className="body1">
        <ul className="showcase">
          <li>
            <div className="seat selected"></div>
            <small>Selected</small>
          </li>
          <li>
            <div className="seat occupied"></div>
            <small>Vacant</small>
          </li>
        </ul>

        <div className="container">
          <div className="movie-screen">
            <img src={require("../../assets/img/logo.png")} alt="screen" />
          </div>

          <div className="row-container">
            <div onClick={changecolor} className="row">
              <div className="seat"></div>
              <div className="seat"></div>
              <div className="seat"></div>
              <div className="seat"></div>
              <div className="seat"></div>
              <div className="seat"></div>
              <div className="seat"></div>
              <div className="seat"></div>
            </div>
            <div onClick={changecolor} className="row">
              <div className="seat"></div>
              <div className="seat"></div>
              <div className="seat"></div>
              <div className="seat "></div>
              <div className="seat "></div>
              <div className="seat"></div>
              <div className="seat"></div>
              <div className="seat"></div>
            </div>
            <div onClick={changecolor} className="row">
              <div className="seat"></div>
              <div className="seat"></div>
              <div className="seat"></div>
              <div className="seat"></div>
              <div className="seat"></div>
              <div className="seat"></div>
              <div className="seat "></div>
              <div className="seat "></div>
            </div>
            <div onClick={changecolor} className="row">
              <div className="seat"></div>
              <div className="seat"></div>
              <div className="seat"></div>
              <div className="seat"></div>
              <div className="seat"></div>
              <div className="seat"></div>
              <div className="seat"></div>
              <div className="seat"></div>
            </div>
            <div onClick={changecolor} className="row">
              <div className="seat"></div>
              <div className="seat"></div>
              <div className="seat"></div>
              <div className="seat "></div>
              <div className="seat "></div>
              <div className="seat"></div>
              <div className="seat"></div>
              <div className="seat"></div>
            </div>
            <div onClick={changecolor} className="row">
              <div className="seat"></div>
              <div className="seat"></div>
              <div className="seat"></div>
              <div className="seat"></div>
              <div className="seat"></div>
              <div className="seat"></div>
              <div className="seat"></div>
              <div className="seat"></div>
            </div>
            <div onClick={changecolor} className="row">
              <div className="seat"></div>
              <div className="seat"></div>
              <div className="seat"></div>
              <div className="seat"></div>
              <div className="seat "></div>
              <div className="seat "></div>
              <div className="seat "></div>
              <div className="seat"></div>
            </div>
            <h5 className="subtitle"> ₹150</h5>

            <div className="text-wrapper">
              <p className="text">
                Selected Seats <span id="count">{count}</span>
              </p>
              <p className="text">
                Total Price ₹<span id="total">{Price}</span>
              </p>
              <div
                className="body2"
                // onClick={payment}
              >
                {/* <div id="button">
                  <span id="text">Book ✓</span>
                </div> */}
                {Price ? (
                  <StripeCheckout
                    image={require("../../assets/img/fav.png")}
                    name="BookMyShow Clone"
                    ComponentClass="button"
                    description="Movie Ticket Booking Application"
                    currency="INR"
                    token={onToken}
                    amount={Price * 100}
                    billingAddress={true}
                    zipCode={true}
                    stripeKey="pk_test_51MwIgJSHbZy7a7xpNLVrcNsFRakDlHuHswys6anOZz015MVyyXltNKHGrUMWcR4c7XLSn49E4SV0O4CR20WFKKJh00DqKUhUjA"
                  />
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bookticket;
