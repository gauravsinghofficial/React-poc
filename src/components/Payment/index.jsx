// import notify from "devextreme/ui/notify";
import React from "react";
// import { useState } from "react";
import { useNavigate } from "react-router-dom/dist";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "devextreme/dist/css/dx.light.css";

import {
  Form,
  SimpleItem,
  ButtonItem,
  EmailRule,
  NumericRule,
} from "devextreme-react/form";
import "./styles.scss";



const Payment = () => {
  // const [payment, setPayment] = useState({
  //   fullname: "",
  //   email: "",
  //   address: "",
  //   city: "",
  //   state: "",
  //   zipCode: "",
  //   creditCard: "",
  //   expMonth: "",
  //   expYear: "",
  //   cvv: "",
  // });
  // const handleFormValue = (e) => {
  //   setPayment({ ...payment, [e.target.name]: e.target.value });
  //   console.log(payment);
  // };
  // function checkProperties(payment) {
  //   for (var key in payment) {
  //     if (payment[key] !== null && payment[key] === "") {
  //       notify("Please fill all the fields");
  //       return false;
  //     }
  //   }
  //   toast.success("Payment Done !", {
  //     position: toast.POSITION.TOP_RIGHT,
  //     autoClose: 1000,
  //     onClose: () => navigate("/"),
  //   });
  // }
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    toast.success("Payment Done !", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 1000,
      onClose: () => navigate("/"),
    });
    // checkProperties(payment);
  };
  const submitButtonOptions = {
    text: "Proceed to Checkout",
    useSubmitBehavior: true,
  };
  return (
    <header>
      <div className="container">
        <form onSubmit={handleClick}>
          <Form colCount={2} labelLocation="top">
            <SimpleItem dataField="Full Name" isRequired={true} />
            <SimpleItem dataField="Credit Card number" isRequired={true}>
              <NumericRule />
            </SimpleItem>
            <SimpleItem dataField="email" isRequired={true}>
              <EmailRule />
            </SimpleItem>
            <SimpleItem dataField="exp month" isRequired={true}>
              <NumericRule />
            </SimpleItem>
            <SimpleItem dataField="address" isRequired={true} />
            <SimpleItem dataField="exp year" isRequired={true}>
              <NumericRule />
            </SimpleItem>
            <SimpleItem dataField="city" isRequired={true} />
            <SimpleItem dataField="CVV" isRequired={true}>
              <NumericRule />
            </SimpleItem>
            <SimpleItem dataField="state" isRequired={true} />
            <SimpleItem dataField="zip Code" isRequired={true}>
              <NumericRule />
            </SimpleItem>
            <ButtonItem
              buttonOptions={submitButtonOptions}
              onClose={handleClick}
              // colSpan={2}
            />
          </Form>
        </form>
        <ToastContainer />
      </div>
    </header>
  );
};

export default Payment;
