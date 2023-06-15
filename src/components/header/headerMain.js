import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeaderBottom from "./headerBottom";
import HeaderMiddle from "./headerMiddle";
import HeaderTop from "./headerTop";
import header from "../../assests/css/header.module.css";
import {
  getHeaderCountry,
  getHeaderNav,
} from "../../store/actions/headerNavAction";
import { useLocation } from "react-router-dom";
import CheckOutHeader from "../checkout/checkoutHeader";
import i18next from "i18next";
// import MegaMenu from './megaMenu'

export default function HeaderMain() {
  const { navCategories, country } = useSelector((state) => state.navigation);
  const dispatch = useDispatch();
  const path = useLocation();

  const language = [
    {
      code: "en",
      name: "English",
    },
    {
      code: "lab",
      name: "Lebanon",
      dir: "rtl",
    },
  ];

  useEffect(() => {
    dispatch(getHeaderCountry());
    // dispatch(getHeaderNav({ id: "test" }));
  }, [dispatch]);

  const handleClick = (e) => {
    i18next.changeLanguage(e.target.value);
  };
  return (
    <>
      <header>
        {path.pathname === "/checkout" ? (
          <CheckOutHeader />
        ) : (
          <>
            <div className={header.topHeader}>
              <HeaderTop
                country={country}
                language={language}
                onChange={(e) => handleClick(e)}
              />
            </div>
            <div className={header.headerContainer}>
              <HeaderMiddle />
              {/* <hr/> */}
              <HeaderBottom navCategories={navCategories} language={language} />
            </div>
            {/* <MegaMenu/> */}
          </>
        )}
      </header>
    </>
  );
}
