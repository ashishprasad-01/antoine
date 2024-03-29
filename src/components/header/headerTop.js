import React from "react";
import header from "../../assests/css/header.module.css";
import { path } from "../../constants/path";
import { NavLink as Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

export default function HeaderTop({ country, language, onChange }) {
  const { t } = useTranslation();

  return (
    <>
      <div className={header.container}>
        <div className={header.topContainer}>
          <ul className={header.topLeft}>
            <li>
              <select
                name="country"
                id="country"
                className={header.topHeaderCountry}
                onChange={onChange}
                value={i18n.language}
              >
                {language.map(({ name, code }) => (
                  <option value={code} key={code}>{t(name)}</option>
                ))}
              </select>
            </li>
            <li>
              <select>
                {country &&
                  country?.map((item, index) => {
                    return <option key={index}>{t(item.currency)}</option>;
                  })}
              </select>
            </li>
            <li>{t("Store Locator")}</li>
          </ul>
          <ul className={header.topRight}>
            <li>
              <select>
                <option>{t("My Account")}</option>
              </select>
            </li>
            <li className={header.wishlist}>
              <Link to={path.wishlist}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 12">
                  <path
                    id="ic_wish-list"
                    d="M4.779,1.992A3.775,3.775,0,0,1,7.456,3.121l.036.037.034-.035a3.738,3.738,0,0,1,5.356,0,3.863,3.863,0,0,1,1.109,2.828,4.6,4.6,0,0,1-1.354,3.066l0,0-4.724,4.8a.584.584,0,0,1-.835,0l-4.724-4.8,0,0A4.6,4.6,0,0,1,.993,5.949,3.863,3.863,0,0,1,2.1,3.12,3.775,3.775,0,0,1,4.779,1.992Zm2.713,2.62a.586.586,0,0,1-.42-.178l-.455-.468a2.57,2.57,0,0,0-3.679,0A2.665,2.665,0,0,0,2.174,5.92,3.357,3.357,0,0,0,3.188,8.172l4.3,4.372,4.3-4.372A3.357,3.357,0,0,0,12.81,5.92a2.665,2.665,0,0,0-.764-1.951,2.57,2.57,0,0,0-3.681,0l-.453.466A.586.586,0,0,1,7.492,4.612Z"
                    transform="translate(-0.992 -1.992)"
                    fill="#ffff"
                  />
                </svg>
                {t("Wishlist")}
              </Link>
            </li>
          </ul>
        </div>
        <div className={header.offer}>
          <p>50% Off Hundreds of The Biggest Books</p>
        </div>
      </div>
    </>
  );
}
