import React, { useState } from "react";

import checkout from "./checkout.module.css";
import PaymentForm from "./paymentForm";

const PaymentLeft = () => {
  const [paymentMethod, setPaymentMethod] = useState(true);
  return (
    <>
      <div className={checkout.PaymentleftContainer}>
        <div className={checkout.leftSideHeader}>
          <strong>Reviews & Payment</strong>
        </div>

        <div className={checkout.PaymentleftSideBody}>
          <div className={checkout.payment}>
            <input
              type="radio"
              name="payment"
              id="payment"
              onChange={() => setPaymentMethod(false)}
            />{" "}
            <label htmlFor="payment">Cash On Delivery</label>
          </div>
          <div className={checkout.payment}>
            <input
              type="radio"
              name="payment"
              id="payment"
              onChange={() => setPaymentMethod(false)}
            />{" "}
            <label htmlFor="payment">Cash On Delivery</label>
          </div>
          <div className={checkout.payment}>
            <input
              type="radio"
              name="payment"
              id="payment"
              defaultChecked
              onChange={() => setPaymentMethod(true)}
            />{" "}
            <label htmlFor="payment">Credit / Debit Card</label>
          </div>
          {paymentMethod ? (
            <PaymentForm />
          ) : (
            <div className={checkout.paymentAddressFooter}>
              <button>Place Order</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PaymentLeft;
