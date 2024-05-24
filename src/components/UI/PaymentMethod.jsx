import React from "react";

import masterCard from "../../assets/all-images/master-card.jpg";
import paypal from "../../assets/all-images/paypal.jpg";
import "../../styles/payment-method.css";

const PaymentMethod = () => {
  return (
    <>
      <div className="payment">
        <label for="payment_option" htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" name="payment_option" /> Direct Bank Transfer
        </label>
      </div>

      <div className="payment mt-3">
        <label for="payment_option" htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" name="payment_option" /> Cheque Payment
        </label>
      </div>

      <div className="payment mt-3 d-flex align-items-center justify-content-between">
        <label for="payment_option" htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" name="payment_option" /> Master Card
        </label>

        <img src={masterCard} alt="" />
      </div>

      <div className="payment mt-3 d-flex align-items-center justify-content-between">
        <label for="payment_option" htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" name="payment_option" /> Paypal
        </label>

        <img src={paypal} alt="" />
      </div>
      <div className="payment text-end mt-5">
        <button>Reserve Now</button>
      </div>
    </>
  );
};

export default PaymentMethod;