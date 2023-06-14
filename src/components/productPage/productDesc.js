import React, { useState } from "react";
import style from "../../assests/css/detail.module.css";
import DescriptionPage from "./descriptionPage";
import ReviewPage from "./reviewPage";
import { useTranslation } from "react-i18next";

export default function DesktopProductDesc() {
  let [state, setState] = useState(1);
  const { t } = useTranslation();

  return (
    <>
      <div className={style.desktopDetailContainer}>
        <div className={style.heading}>
          <ul className={style.items}>
            <li
              className={`${style.item} ${state === 1 ? style.item1 : ""}`}
              onClick={() => {
                setState(1);
              }}
            >
              {t("Product Description")}
            </li>
            <li
              className={`${style.item} ${state === 2 ? style.item1 : ""}`}
              onClick={() => {
                setState(2);
              }}
            >
              {t("Additional Information")}
            </li>
            <li
              className={`${style.item} ${state === 3 ? style.item1 : ""}`}
              onClick={() => {
                setState(3);
              }}
            >
              {t("Reviews")}
            </li>
          </ul>
        </div>
        {state === 1 ? <DescriptionPage /> : <ReviewPage />}
      </div>
    </>
  );
}
