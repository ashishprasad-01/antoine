import React from "react";
import { useForm } from "react-hook-form";

import Modal from "react-modal";

import { NavLink as Link } from "react-router-dom";
import checkout from "./checkout.module.css";

Modal.defaultStyles.overlay.backgroundColor = 'rgba(0, 0, 0, 0.5)';
const AddressForm = ({ modalIsOpen, setIsOpen }) => {
  const { handleSubmit, register } = useForm();

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      boxShadow: "0px 10px 30px #00000033",
      padding: "0px",
      overlayClassName:"Overlay"
    },
  };

  function onSubmit(data) {
    console.log(data);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        className={checkout.modal}
        backgroundColor= 'rgba(0, 0, 0, 0.5)'
      >
        <div className={checkout.newAddressContainer}>
          <div className={checkout.newAddressWrapper}>
            <span className={checkout.newAddressTitle}>Shipping Address</span>
            <span onClick={closeModal}>
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
              >
                <title>cross</title>
                <path d="M31.708 25.708c-0-0-0-0-0-0l-9.708-9.708 9.708-9.708c0-0 0-0 0-0 0.105-0.105 0.18-0.227 0.229-0.357 0.133-0.356 0.057-0.771-0.229-1.057l-4.586-4.586c-0.286-0.286-0.702-0.361-1.057-0.229-0.13 0.048-0.252 0.124-0.357 0.228 0 0-0 0-0 0l-9.708 9.708-9.708-9.708c-0-0-0-0-0-0-0.105-0.104-0.227-0.18-0.357-0.228-0.356-0.133-0.771-0.057-1.057 0.229l-4.586 4.586c-0.286 0.286-0.361 0.702-0.229 1.057 0.049 0.13 0.124 0.252 0.229 0.357 0 0 0 0 0 0l9.708 9.708-9.708 9.708c-0 0-0 0-0 0-0.104 0.105-0.18 0.227-0.229 0.357-0.133 0.355-0.057 0.771 0.229 1.057l4.586 4.586c0.286 0.286 0.702 0.361 1.057 0.229 0.13-0.049 0.252-0.124 0.357-0.229 0-0 0-0 0-0l9.708-9.708 9.708 9.708c0 0 0 0 0 0 0.105 0.105 0.227 0.18 0.357 0.229 0.356 0.133 0.771 0.057 1.057-0.229l4.586-4.586c0.286-0.286 0.362-0.702 0.229-1.057-0.049-0.13-0.124-0.252-0.229-0.357z"></path>
              </svg>
            </span>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={checkout.formWrapper}>
              <div className={checkout.newAddressForm}>
                <div className={checkout.newAddressFormFeild}>
                  <label htmlFor="first name">First Name</label>
                  <input
                    type="text"
                    id="first name"
                    placeholder="Veronica"
                    {...register("first name")}
                  />
                </div>

                <div className={checkout.newAddressFormFeild}>
                  <label htmlFor="last name">Last Name</label>
                  <input
                    type="text"
                    id="last name"
                    placeholder="Costello"
                    {...register("last name")}
                  />
                </div>

                <div className={checkout.newAddressFormFeild}>
                  <label htmlFor="company">Company</label>
                  <input type="text" id="company" {...register("company")} />
                </div>

                <div className={checkout.newAddressFormFeild}>
                  <label htmlFor="address">Street Address</label>
                  <input type="text" id="address" {...register("address")} />
                  <input type="text" id="address" {...register("address")} />
                  <input type="text" id="address" {...register("address")} />
                </div>

                <div className={checkout.newAddressFormFeild}>
                  <label htmlFor="country">Country</label>
                  <select name="country" id="country" {...register("country")}>
                    <option value="US">United States</option>
                  </select>
                </div>

                <div className={checkout.newAddressFormFeild}>
                  <label htmlFor="state">State/Province</label>
                  <select name="country" id="state" {...register("state")}>
                    <option value="region">
                      Please select a Region, State or Province
                    </option>
                  </select>
                </div>

                <div className={checkout.newAddressFormFeild}>
                  <label htmlFor="city">City</label>
                  <select name="country" id="city" {...register("city")}>
                    <option value="region">
                      Please select a City
                    </option>
                  </select>
                </div>

                <div className={checkout.newAddressFormFeild}>
                  <label htmlFor="zip">Zip/Postal Code</label>
                  <input type="text" id="zip" {...register("zip")} />
                </div>

                <div className={checkout.newAddressFormFeild}>
                  <label htmlFor="mno">Phone Number</label>
                  <input type="text" id="mno" {...register("mno")} />
                </div>
              </div>
              <div className={checkout.newAddressFooter}>
                <div className={checkout.footerContainer}>
                  <div className={checkout.footerContent}>
                    <input
                      type="checkbox"
                      name="address"
                      id="address"
                      defaultChecked
                    />
                    <label htmlFor="address">Save in address book</label>
                  </div>

                  <div className={checkout.footerContent}>
                    <Link>Cancel</Link>
                    <button>Ship Here</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default AddressForm;
