import React, { useEffect, useState } from "react";
import header from "../../assests/css/header.module.css";
import { NavLink as Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMagazinesCategory } from "../../store/actions/listingAction";
import img from "../../assests/images/guardians.png";
import jsCookie from "js-cookie";
import { useTranslation } from "react-i18next";

export default function HeaderBottom({ navCategories, language }) {
  const { t } = useTranslation();
  const { category } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  let [state, setState] = useState(false);

  const currentlancode = jsCookie.get("i18next") || "en";

  let code = currentlancode.split("-");
  const currentlan = language.find((lan) => lan.code === code[0]);

  useEffect(() => {
    dispatch(getMagazinesCategory());

    if (currentlan.code === "lab") {
      document.dir = "rtl";
      document.documentElement.lang = "ar";
    } else if (currentlan.code === "en") {
      document.dir = "ltr";
      document.documentElement.lang = "en";
    }
    document.title = t("ANTOINE");
  }, [dispatch, currentlan, t]);

  return (
    <>
      <div className={header.container}>
        <nav>
          <ul className={header.navigation}>
            {navCategories &&
              navCategories?.map((navItem, index) => {
                return (
                  <li
                    key={index}
                    className={header.navList}
                    onMouseOver={() => {
                      setState(true);
                    }}
                  >
                    <Link to={navItem} id={header.navlistLink}>
                      {t(navItem)}
                    </Link>
                  </li>
                );
              })}
          </ul>

          {state ? (
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
          ) : (
            <></>
          )}
        </nav>
      </div>
    </>
  );
}
