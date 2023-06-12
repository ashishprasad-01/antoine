import React, { useState } from "react";
import cart from "./cart.module.css";
import { useDispatch } from "react-redux";
import {
  deleteCartItem,
  incDecQuantity,
} from "../../store/actions/cartActions";
import { t } from "i18next";

export default function CartLeft({ cartItem }) {
  let [inc, setInc] = useState(0);
  const dispatch = useDispatch();

  const qty = (id, qty) => {
    dispatch(incDecQuantity({ id, qty, inc }));
  };

  return (
    <>
      <div className={cart.leftCartContainer}>
        <table>
          <thead>
            <tr>
              <th>{t("Product Description")}</th>
              <th>{t("price")}</th>
              <th>{t("QTY")}</th>
              <th>{t("Subtotal")}</th>
            </tr>
          </thead>
          <tbody className={cart.cartbody}>
            {cartItem &&
              cartItem.length > 0 &&
              cartItem.map((item, index) => {
                return (
                  <>
                    <tr key={index}>
                      <td id={cart.description}>
                        <img src={item.img} alt={item.title} />
                        <div id={cart.title}>
                          <span>{t(item.title)}</span>
                          <span>{t(item.author)}</span>
                        </div>
                      </td>
                      <td id={cart.price}>
                        <span> LBP {item.price}</span>
                      </td>
                      <td id={cart.qty}>
                        <div className={cart.qtyBtn}>
                          <button
                            disabled={item.qty > 1 ? false : true}
                            onClick={() => qty(item.id, item.qty, setInc(0))}
                          >
                            -
                          </button>
                          {item.qty}
                          <button
                            disabled={item.qty < 10 ? false : true}
                            onClick={() => qty(item.id, item.qty, setInc(1))}
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td>
                        <div>LBP {item.price * item.qty}</div>
                      </td>
                    </tr>
                    <tr id={cart.cartActionBtn}>
                      <td>
                        <span id={cart.wishlist}>{t("Add To Wishlist")}</span>
                      </td>
                      <td>
                        <svg
                          id={cart.pencil}
                          xmlns="http://www.w3.org/2000/svg"
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                        >
                          <g id="pencil" transform="translate(-1.25 -1.25)">
                            <path
                              id="Line_46"
                              data-name="Line 46"
                              d="M2.564,3.087a.522.522,0,0,1-.37-.153L-.6.143A.523.523,0,0,1-.6-.6a.523.523,0,0,1,.74,0L2.934,2.194a.523.523,0,0,1-.37.893Z"
                              transform="translate(13.163 2)"
                              fill="#72797e"
                            />
                            <path
                              id="Path_6018"
                              data-name="Path 6018"
                              d="M1.773,17.157a.523.523,0,0,1-.5-.661l1.047-3.837a.523.523,0,0,1,.135-.232L10.473,4.4a.523.523,0,0,1,.74,0L14,7.194a.523.523,0,0,1,0,.74L5.98,15.957a.523.523,0,0,1-.232.135L1.911,17.139A.523.523,0,0,1,1.773,17.157Zm1.515-4.089-.769,2.82,2.82-.769,7.555-7.555L10.843,5.513Z"
                              transform="translate(0 -0.907)"
                              fill="#72797e"
                            />
                          </g>
                        </svg>
                      </td>
                      <td onClick={() => dispatch(deleteCartItem(item.id))}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="15"
                          height="15"
                          viewBox="0 0 14 15"
                        >
                          <g id="trash-2" transform="translate(-29 4.998)">
                            <path
                              id="Union_10"
                              data-name="Union 10"
                              d="M3.407,15a1.95,1.95,0,0,1-1.972-1.92V3.84H.541a.543.543,0,0,1-.381-.154A.507.507,0,0,1,0,3.314a.532.532,0,0,1,.539-.521H3.588V1.92A1.952,1.952,0,0,1,5.563,0H8.437a1.949,1.949,0,0,1,1.972,1.92v.873h3.053A.533.533,0,0,1,14,3.314V3.32a.53.53,0,0,1-.539.52h-.9v9.24A1.95,1.95,0,0,1,10.588,15Zm-.892-1.92a.884.884,0,0,0,.892.875h7.181a.888.888,0,0,0,.9-.875V3.84H9.872a.583.583,0,0,1-.06,0H4.186c-.021,0-.039,0-.06,0H2.514ZM9.333,2.793V1.92a.885.885,0,0,0-.9-.871H5.563a.889.889,0,0,0-.9.871v.873ZM7.9,10.988V6.8a.538.538,0,0,1,1.075,0v4.184a.538.538,0,0,1-1.075,0Zm-2.872,0V6.8A.539.539,0,0,1,6.1,6.8v4.184a.539.539,0,0,1-1.077,0Z"
                              transform="translate(29 -4.998)"
                              fill="#72797e"
                            />
                          </g>
                        </svg>
                      </td>
                    </tr>
                  </>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}
