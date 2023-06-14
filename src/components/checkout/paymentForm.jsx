import React from "react";

import checkout from "./checkout.module.css";
import amex from "../../assests/images/amex.png";
import mastercard from "../../assests/images/mastercard.png";
import visa from "../../assests/images/visa.png";
import paypal from "../../assests/images/paypal.png";

const PaymentForm = () => {
  return (
    <>
      <div className={checkout.paymentFormContainer}>
        <div className={checkout.paymentFormWrapper}>
          <div className={checkout.paymentFormHeader}>
            <input type="checkbox" name="address" id="address" defaultChecked />
            <label htmlFor="address">
              My billing and shipping address are the same
            </label>
          </div>

          <div className={checkout.PaymentFormBody}>
            <div className={checkout.paymentAddressBody}>
              <span>Veronica Costello</span>
              <p className={checkout.paymentAddress}>
                6146 Honey Bluff Parkway <br /> Calder, Michigan 49628-7978{" "}
                <span>(555) 229-3326</span>
              </p>
            </div>

            <div className={checkout.cardContainer}>
              <div className={checkout.paymentCards}>
                <img src={paypal} alt="paypal-img" width={52} height={32} />
                <img
                  src={mastercard}
                  alt="mastercard-img"
                  width={52}
                  height={32}
                />
                <img src={visa} alt="visacard-img" width={52} height={32} />
                <img src={amex} alt="amexcard-img" width={52} height={32} />
              </div>
            </div>

            <div className={checkout.paymentFormContent}>
              <form action="#">
                <div className={checkout.paymentFormFeild}>
                  <label htmlFor="card-type">Credit Card Type</label>
                  <select name="card-type" id="card-type">
                    <option value="select-card">Select a card</option>
                    <option value="master">Master Card</option>
                    <option value="visa">Visa</option>
                  </select>
                </div>

                <div className={checkout.paymentFormFeild}>
                  <label htmlFor="card-name">Card Holder’s Name</label>
                  <input type="text" id="card-name" />
                </div>

                <div className={checkout.paymentFormFeild}>
                  <label htmlFor="card-number">Credit Card Number</label>
                  <input type="text" id="card-number" />
                </div>

                <div
                  className={checkout.paymentFormFeild}
                  id={checkout.cardExpiry}
                >
                  <label htmlFor="months">Expiration Date</label>
                  <div className={checkout.selectContainer}>
                    <select name="month" id="months">
                      <option value="montth">Month</option>
                      <option value="jan">Jan</option>
                      <option value="feb">Feb</option>
                      <option value="march">March</option>
                      <option value="april">April</option>
                      <option value="may">May</option>
                      <option value="june">June</option>
                      <option value="july">July</option>
                      <option value="aug">Aug</option>
                      <option value="sep">Sep</option>
                      <option value="oct">Oct</option>
                      <option value="nov">Nov</option>
                      <option value="dec">Dec</option>
                    </select>
                    <select name="years" id="years">
                      <option value="years">Year</option>
                      <option value="2023">2023</option>
                      <option value="2024">2024</option>
                      <option value="2025">2025</option>
                      <option value="2026">2026</option>
                    </select>
                  </div>
                </div>

                <div
                  className={checkout.paymentFormFeild}
                  id={checkout.cardVeify}
                >
                  <label htmlFor="card-vefiy-number">Credit Card Number</label>
                  <input type="text" id="card-verify-number" />
                </div>

                <div className={checkout.paymentAddressFooter}>
                  <button>Place Order</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentForm;
