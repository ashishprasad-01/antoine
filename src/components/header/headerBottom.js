import React, { useEffect, useState } from "react";
import header from "../../assests/css/header.module.css";
import { NavLink as Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getMagazinesCategory } from "../../store/actions/listingAction";

import jsCookie from "js-cookie";
import { useTranslation } from "react-i18next";
import MegaMenu from "./megaMenu";

export default function HeaderBottom({ navCategories, language }) {
  const { t } = useTranslation();
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
            <>
              <MegaMenu setState={setState} />
            </>
          ) : (
            <></>
          )}
        </nav>
      </div>
    </>
  );
}
