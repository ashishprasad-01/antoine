import React, { useEffect } from "react";
import img from "../../assests/images/guardians.png";
import header from "../../assests/css/header.module.css";
import { NavLink as Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMagazinesCategory } from "../../store/actions/listingAction";

export default function MegaMenu({setState}) {
  const { category } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMagazinesCategory());
  }, [dispatch]);
  return (
    <>
      <div className={header.megaMenuContainer}>
              <div
                className={header.megaMenu}
                onMouseOut={() => {
                  setState(false);
                }}
              >
                <ul>
                  <p>
                    <span>Top Subjects</span>
                  </p>
                  {category.length > 0 &&
                    category[0].cate.map((item) => {
                      return (
                        <li key={item.id}>
                          <Link>{item.name}</Link>
                        </li>
                      );
                    })}
                </ul>
                <ul>
                  <p>
                    <span>Browse</span>
                  </p>
                  {category.length > 0 &&
                    category[0].browse.map((item) => {
                      return (
                        <li key={item.id}>
                          <Link>{item.name}</Link>
                        </li>
                      );
                    })}
                </ul>
                <ul>
                  <p>
                    <span>Department</span>
                  </p>
                  {category.length > 0 &&
                    category[0].departments.map((item) => {
                      return (
                        <li key={item.id}>
                          <Link>{item.name}</Link>
                        </li>
                      );
                    })}
                </ul>
                <ul id={header.megaMenuImg}>
                  <img src={img} alt="" />
                  <span>50% off the biggest Books & More!</span>
                  <Link>Shop Now</Link>
                </ul> 
              </div>
            </div>
    </>
  );
}
