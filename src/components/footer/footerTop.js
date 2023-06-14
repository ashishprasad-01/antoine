import React from "react";
import style from "../../assests/css/footer.module.css";
import { NavLink as Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function FooterTop({ footer }) {
  const { t } = useTranslation();
  return (
    <div className={style.footerTop}>
      <div className={style.container}>
        <ul className={style.topFooterLink}>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="32"
              viewBox="0 0 35 32"
            >
              <g id="books" transform="translate(-1.4 -2.4)">
                <path
                  id="Path_6262"
                  data-name="Path 6262"
                  d="M2.391,2.4H12.3a7.639,7.639,0,0,1,7.594,7.667V33.4a.991.991,0,1,1-1.981,0,3.986,3.986,0,0,0-3.962-4H2.391a1,1,0,0,1-.991-1V3.4A1,1,0,0,1,2.391,2.4ZM17.909,28.932V10.067A5.647,5.647,0,0,0,12.3,4.4H3.381v23H13.947A5.888,5.888,0,0,1,17.909,28.932Z"
                  fill="#333f48"
                />
                <path
                  id="Path_6263"
                  data-name="Path 6263"
                  d="M18.994,2.4H28.9a1,1,0,0,1,.991,1v25a1,1,0,0,1-.991,1H17.343a3.986,3.986,0,0,0-3.962,4,.991.991,0,1,1-1.981,0V10.067A7.639,7.639,0,0,1,18.994,2.4Zm8.915,2H18.994a5.647,5.647,0,0,0-5.613,5.667V28.932A5.888,5.888,0,0,1,17.343,27.4H27.909Z"
                  transform="translate(6.509)"
                  fill="#333f48"
                />
              </g>
            </svg>
            <Link>{t("50,000+ Books")}</Link>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="32"
              viewBox="0 0 26 32"
            >
              <g id="Guaranteed-Lowest-Price" transform="translate(-3.4 -1.4)">
                <path
                  id="Path_6262"
                  data-name="Path 6262"
                  d="M16.4,33.4a.908.908,0,0,1-.406-.1,32.81,32.81,0,0,1-6.238-4.279,22.164,22.164,0,0,1-4.332-4.971A12.618,12.618,0,0,1,3.4,17.4V6.834a.906.906,0,0,1,.589-.848L16.082,1.458a.908.908,0,0,1,.637,0L28.811,5.986a.906.906,0,0,1,.589.848V17.4a12.618,12.618,0,0,1-2.024,6.654,22.164,22.164,0,0,1-4.332,4.971A32.81,32.81,0,0,1,16.806,33.3.908.908,0,0,1,16.4,33.4ZM5.214,7.462V17.4c0,7.494,9.134,12.94,11.186,14.068a32.243,32.243,0,0,0,5.479-3.832,20.307,20.307,0,0,0,3.963-4.549A10.833,10.833,0,0,0,27.586,17.4V7.462L16.4,3.273Z"
                  transform="translate(0)"
                  fill="#333f48"
                />
                <path
                  id="Path_6263"
                  data-name="Path 6263"
                  d="M12.33,17.249a.9.9,0,0,1-.641-.265L8.666,13.965a.906.906,0,1,1,1.283-1.281l2.382,2.378,5.405-5.4a.906.906,0,0,1,1.283,1.281l-6.047,6.038A.9.9,0,0,1,12.33,17.249Z"
                  transform="translate(2.558 4.075)"
                  fill="#333f48"
                />
              </g>
            </svg>
            <Link>{t("Guaranted Lowest Price")}</Link>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="29"
              height="32"
              viewBox="0 0 29 32"
            >
              <g id="Free-Shipping" transform="translate(-2.4 -1.402)">
                <path
                  id="Union_5"
                  data-name="Union 5"
                  d="M12.531,31.355,1.964,25.338A3.913,3.913,0,0,1,0,21.953V9.92A3.894,3.894,0,0,1,.434,8.137a.841.841,0,0,1,.094-.229.819.819,0,0,1,.18-.221A3.862,3.862,0,0,1,1.964,6.541l5-2.846a.9.9,0,0,1,.657-.375l4.916-2.8A3.93,3.93,0,0,1,14.5,0a4,4,0,0,1,1.972.523L27.03,6.533A3.959,3.959,0,0,1,28.3,7.688a.949.949,0,0,1,.179.221.822.822,0,0,1,.092.23A3.88,3.88,0,0,1,29,9.92V21.953a3.915,3.915,0,0,1-1.962,3.385L16.463,31.355a4,4,0,0,1-3.931,0ZM1.811,9.928V21.953a2.111,2.111,0,0,0,1.061,1.82l10.562,6.018a2.3,2.3,0,0,0,1.063.285,2.152,2.152,0,0,0,1.061-.285l10.578-6.018a2.12,2.12,0,0,0,1.053-1.82V9.92a2.126,2.126,0,0,0-.012-.225L14.95,16.73a.83.83,0,0,1-.453.129.871.871,0,0,1-.455-.129L1.826,9.7A1.826,1.826,0,0,0,1.811,9.928ZM14.5,14.912l4.993-2.879L7.778,5.313,2.864,8.107l-.086.053Zm6.8-3.92,4.92-2.836c-.031-.02-.061-.039-.094-.057L15.558,2.092a2.091,2.091,0,0,0-2.115,0L9.6,4.275Z"
                  transform="translate(2.4 1.402)"
                  fill="#333f48"
                />
                <path
                  id="Line_3"
                  data-name="Line 3"
                  d="M.306,16.364a.9.9,0,0,1-.906-.9V.3A.9.9,0,0,1,.306-.6a.9.9,0,0,1,.906.9v15.16A.9.9,0,0,1,.306,16.364Z"
                  transform="translate(16.595 17.038)"
                  fill="#333f48"
                />
              </g>
            </svg>

            <Link>{t("Free Shipping")}</Link>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
            >
              <g id="Best-Customer-Service" transform="translate(110.998 27)">
                <path
                  id="Union_7"
                  data-name="Union 7"
                  d="M20684,13979a16,16,0,1,1,16,16A16.022,16.022,0,0,1,20684,13979Zm1.809,0a14.188,14.188,0,1,0,14.193-14.188A14.207,14.207,0,0,0,20685.809,13979Zm7.43,3.562a.906.906,0,0,1,1.445-1.092,6.641,6.641,0,0,0,10.633,0,.906.906,0,0,1,1.445,1.092,8.455,8.455,0,0,1-13.523,0Zm11.287-6.582a1.508,1.508,0,0,1,0-3.016h.016a1.508,1.508,0,0,1,0,3.016Zm-9.057,0a1.508,1.508,0,0,1,0-3.016h.016a1.508,1.508,0,0,1,0,3.016Z"
                  transform="translate(-20794.998 -13989.998)"
                  fill="#333f48"
                />
              </g>
            </svg>

            <Link>{t("Best Customer Service")}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
