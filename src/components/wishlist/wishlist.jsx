import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteWishlistItem,
  getWishlist,
} from "../../store/actions/wishlistActios";
import style from "./wishlist.module.css";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useState } from "react";

export default function Wishlist() {
  const { wishlist } = useSelector((state) => state.wishlist);

  let [active, setActive] = useState(0);
  console.log(active);

  const notify = () => toast.success("Product Added to Cart");

  const dispatch = useDispatch();

  const addToCart = async (title, author, img, price) => {
    await axios.post(`${process.env.REACT_APP_API_BASE_URL}/cart`, {
      title,
      author,
      img,
      price,
      qty: 1,
    });
    setActive(1);

    notify();
  };

  useEffect(() => {
    dispatch(getWishlist());
  }, [dispatch]);

  return (
    <div className={style.mainContent}>
      {/* <div className={style.columnMain}> */}
      <div className={style.pageTitleWrapper}>
        <h1 className={style.pageTitle}>
          <span>WishList</span>
        </h1>
      </div>
      <div className={style.toolbar}>
        <p className={style.toolbarAmount}>
          <span className={style.itemCount}>{wishlist.length} Item</span>
        </p>
      </div>
      {/* </div> */}
      <div className={style.productGrid}>
        <ul className={style.productItems}>
          {wishlist.length > 0 &&
            wishlist.map((item) => (
              <li className={style.productItem} key={item.id}>
                <div className={style.productImg}>
                  <img src={item.img} alt="fdghskal" />
                </div>
                <div className={style.productInfo}>
                  <div className={style.productTitle}>
                    <strong>{item.title}</strong>
                  </div>
                  <div className={style.productAuthor}>
                    <span>{item.author}</span>
                  </div>
                  <div className={style.productPrice}>
                    <strong>LBP {item.price}</strong>
                  </div>
                </div>
                <div className={style.productBtn}>
                  <button
                    className={style.cartBtn}
                    onClick={() => {
                      addToCart(item.title, item.author, item.img, item.price);
                    }}
                    disabled={active === 0 ? false : true}
                  >
                    Add To Cart
                  </button>
                  <svg
                    onClick={() => {
                      dispatch(deleteWishlistItem(item.id));
                      setActive(0);
                    }}
                    className={style.deleteBtn}
                    xmlns="http://www.w3.org/2000/svg"
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
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
