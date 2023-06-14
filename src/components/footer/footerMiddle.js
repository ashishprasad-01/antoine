import React from "react";
import style from "../../assests/css/footer.module.css";
import { NavLink as Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function FooterMiddle({ navCategories, aboutus, service }) {
  const { t } = useTranslation();
  // console.log(aboutus);
  return (
    <div className={style.containerDesktop}>
      <div className={style.middleFooter}>
        <ul className={style.categories}>
          <div className={style.text}>{t("Categories")}</div>
          {navCategories &&
            navCategories?.map((item, index) => {
              return (
                <li key={index} className={style.items}>
                  <Link>{t(item)}</Link>
                </li>
              );
            })}
        </ul>
        <ul className={style.categories}>
          <div className={style.text}>{t("About Us")}</div>
          {aboutus &&
            aboutus?.map((item, index) => {
              return (
                <li key={index} className={style.items}>
                  <Link>{t(item)}</Link>
                </li>
              );
            })}
        </ul>
        <ul className={style.categories}>
          <div className={style.text}>{t("Customer Service")}</div>
          {service &&
            service?.map((item, index) => {
              return (
                <li key={index} className={style.items}>
                  <Link>{t(item)}</Link>
                </li>
              );
            })}
        </ul>
        <div className={style.categories}>
          <div className={style.text}>
            <p>{t("Sign up for savings, news, and updates")}</p>
          </div>
          <div className={style.email}>
            <input type="email" placeholder={t("Enter email address")} />
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 24">
                <path
                  id="chevron-left"
                  d="M9.75,29a1.763,1.763,0,0,0,1.237-.5l10.5-10.286a1.69,1.69,0,0,0,0-2.424L10.987,5.5a1.776,1.776,0,0,0-2.475,0,1.69,1.69,0,0,0,0,2.424L17.775,17,8.513,26.074a1.69,1.69,0,0,0,0,2.424A1.763,1.763,0,0,0,9.75,29Z"
                  transform="translate(-8 -5)"
                />
              </svg>
            </button>
          </div>
          <div className={style.socialMediaLinks}>
            <Link>
              <div className={style.socialMedia}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                >
                  <path
                    id="facebook"
                    d="M40,24.1A16,16,0,1,0,21.5,40V28.751H17.435V24.1H21.5V20.551c0-4.034,2.387-6.262,6.043-6.262a24.479,24.479,0,0,1,3.582.314v3.959H29.107A2.32,2.32,0,0,0,26.5,21.076V24.1h4.437l-.71,4.653H26.5V40A16.074,16.074,0,0,0,40,24.1Z"
                    transform="translate(-8 -8)"
                  />
                </svg>
              </div>
            </Link>
            <Link>
              <div className={style.socialMedia}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                >
                  <path
                    id="twitter"
                    d="M16,0A16,16,0,1,0,32,16,16,16,0,0,0,16,0Zm7.305,12.475q.011.236.01.475A10.378,10.378,0,0,1,12.867,23.4h0a10.4,10.4,0,0,1-5.629-1.65,7.469,7.469,0,0,0,.876.051,7.369,7.369,0,0,0,4.561-1.572,3.677,3.677,0,0,1-3.431-2.551,3.66,3.66,0,0,0,1.659-.063,3.673,3.673,0,0,1-2.946-3.6c0-.017,0-.031,0-.047a3.647,3.647,0,0,0,1.663.459,3.676,3.676,0,0,1-1.137-4.9,10.427,10.427,0,0,0,7.57,3.837,3.674,3.674,0,0,1,6.258-3.349,7.366,7.366,0,0,0,2.332-.891,3.687,3.687,0,0,1-1.615,2.031,7.324,7.324,0,0,0,2.109-.578A7.463,7.463,0,0,1,23.305,12.475Zm0,0"
                  />
                </svg>
              </div>
            </Link>
            <Link>
              <div className={style.socialMedia}>
                <svg
                  id="instagram"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                >
                  <path
                    id="Path_5918"
                    data-name="Path 5918"
                    d="M213.125,210.063A3.063,3.063,0,1,1,210.063,207,3.062,3.062,0,0,1,213.125,210.063Zm0,0"
                    transform="translate(-194.063 -194.063)"
                  />
                  <path
                    id="Path_5919"
                    data-name="Path 5919"
                    d="M150.179,137.6a3.042,3.042,0,0,0-1.744-1.744,5.083,5.083,0,0,0-1.706-.316c-.969-.044-1.26-.054-3.713-.054s-2.744.009-3.713.053a5.086,5.086,0,0,0-1.706.316,3.044,3.044,0,0,0-1.744,1.744,5.085,5.085,0,0,0-.316,1.706c-.044.969-.054,1.259-.054,3.713s.01,2.744.054,3.713a5.083,5.083,0,0,0,.316,1.706,3.042,3.042,0,0,0,1.744,1.744,5.077,5.077,0,0,0,1.706.316c.969.044,1.259.053,3.712.053s2.744-.009,3.713-.053a5.077,5.077,0,0,0,1.706-.316,3.042,3.042,0,0,0,1.744-1.744,5.088,5.088,0,0,0,.316-1.706c.044-.969.053-1.26.053-3.713s-.009-2.744-.053-3.713A5.077,5.077,0,0,0,150.179,137.6Zm-7.162,10.136a4.718,4.718,0,1,1,4.718-4.718A4.718,4.718,0,0,1,143.017,147.738Zm4.9-8.52a1.1,1.1,0,1,1,1.1-1.1A1.1,1.1,0,0,1,147.921,139.219Zm0,0"
                    transform="translate(-127.017 -127.02)"
                  />
                  <path
                    id="Path_5920"
                    data-name="Path 5920"
                    d="M16,0A16,16,0,1,0,32,16,16,16,0,0,0,16,0Zm9.132,19.788a6.741,6.741,0,0,1-.427,2.23,4.7,4.7,0,0,1-2.687,2.687,6.745,6.745,0,0,1-2.23.427c-.98.045-1.293.055-3.788.055s-2.808-.011-3.788-.055a6.745,6.745,0,0,1-2.23-.427A4.7,4.7,0,0,1,7.3,22.018a6.739,6.739,0,0,1-.427-2.23c-.045-.98-.056-1.293-.056-3.788s.01-2.808.055-3.788a6.741,6.741,0,0,1,.427-2.23A4.7,4.7,0,0,1,9.982,7.295a6.747,6.747,0,0,1,2.23-.427c.98-.045,1.293-.055,3.788-.055s2.808.011,3.788.056a6.748,6.748,0,0,1,2.23.427,4.7,4.7,0,0,1,2.687,2.687,6.74,6.74,0,0,1,.427,2.23c.045.98.055,1.293.055,3.788S25.177,18.808,25.132,19.788Zm0,0"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className={style.bottomFooter}>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="85"
            height="70"
            viewBox="0 0 85 70"
          >
            <g id="AA-logo" transform="translate(-214.748 -334.386)">
              <path
                id="Path_5374"
                data-name="Path 5374"
                d="M289.7,379.315l-17.048-44.929H262.365L245.06,379.315h10.152l2.883-8.057c5.236-6.59,10.725,2.871,18.4,0l2.8,8.057Zm-28.29-17.369,5.939-16.486h.13l5.748,16.486Z"
                transform="translate(-12.586)"
              />
              <rect
                id="Rectangle_1826"
                data-name="Rectangle 1826"
                width="9.81"
                height="9.738"
                transform="translate(282.477 369.577)"
              />
              <g
                id="Group_4885"
                data-name="Group 4885"
                transform="translate(269.241 384.874)"
              >
                <path
                  id="Path_5375"
                  data-name="Path 5375"
                  d="M307.935,421.751v3.48h1.709v-3.48Z"
                  transform="translate(-307.935 -421.751)"
                />
              </g>
              <path
                id="Path_5376"
                data-name="Path 5376"
                d="M224.086,422.712h-1.724l-7.614,18.656h2s2.146-5.328,2.32-5.756h8.213c.169.431,2.289,5.756,2.289,5.756h2Zm-4.37,11.217c.332-.829,3.008-7.524,3.525-8.825.505,1.307,3.077,8,3.394,8.825Z"
                transform="translate(0 -37.282)"
              />
              <g
                id="Group_4886"
                data-name="Group 4886"
                transform="translate(233.225 390.146)"
              >
                <path
                  id="Path_5377"
                  data-name="Path 5377"
                  d="M248.052,433.335v-2.16h-1.708v13.639h1.708v-7.347c0-3.058,1.7-5.033,4.341-5.033,3,0,3.348,2.2,3.348,3.852v8.528h1.708v-8.35c0-1.381,0-5.591-5.032-5.591A5.16,5.16,0,0,0,248.052,433.335Z"
                  transform="translate(-246.344 -430.873)"
                />
              </g>
              <g
                id="Group_4887"
                data-name="Group 4887"
                transform="translate(245.78 386.436)"
              >
                <path
                  id="Path_5378"
                  data-name="Path 5378"
                  d="M270.238,424.454v4.011h-2.423v1.558h2.423v8.644c-.005.085-.007.158-.007.239a3.148,3.148,0,0,0,.839,2.4,4.366,4.366,0,0,0,3.356.8l.346-.027v-1.556l-.378.014c-.988.028-1.672-.021-2.034-.37a2.047,2.047,0,0,1-.413-1.5v-8.644H274.8v-1.558h-2.853v-4.011Z"
                  transform="translate(-267.815 -424.454)"
                />
              </g>
              <path
                id="Path_5379"
                data-name="Path 5379"
                d="M288.186,430.873c-3.762,0-6.382,2.928-6.382,7.116s2.62,7.124,6.382,7.124,6.376-2.934,6.376-7.124S291.937,430.873,288.186,430.873Zm0,12.672c-3.214,0-4.676-2.878-4.676-5.556s1.462-5.555,4.676-5.555,4.669,2.88,4.669,5.555S291.394,443.545,288.186,443.545Z"
                transform="translate(-27.843 -40.727)"
              />
              <g
                id="Group_4888"
                data-name="Group 4888"
                transform="translate(269.241 390.448)"
              >
                <path
                  id="Path_5380"
                  data-name="Path 5380"
                  d="M307.935,431.4v13.638h1.709V431.4Z"
                  transform="translate(-307.935 -431.395)"
                />
              </g>
              <g
                id="Group_4889"
                data-name="Group 4889"
                transform="translate(274.058 390.146)"
              >
                <path
                  id="Path_5381"
                  data-name="Path 5381"
                  d="M317.88,433.335v-2.16h-1.709v13.639h1.709v-7.347c0-3.058,1.7-5.033,4.338-5.033,3,0,3.351,2.2,3.351,3.852v8.528h1.708v-8.35c0-1.381,0-5.591-5.031-5.591A5.161,5.161,0,0,0,317.88,433.335Z"
                  transform="translate(-316.171 -430.873)"
                />
              </g>
              <g
                id="Group_4890"
                data-name="Group 4890"
                transform="translate(287.454 390.146)"
              >
                <path
                  id="Path_5382"
                  data-name="Path 5382"
                  d="M349.58,432.569a5.869,5.869,0,0,0-4.348-1.7,5.653,5.653,0,0,0-4.11,1.64,7.894,7.894,0,0,0-2.041,5.707,7.147,7.147,0,0,0,1.887,5.232,5.873,5.873,0,0,0,4.265,1.661,5.646,5.646,0,0,0,6.024-4.982l.07-.425h-1.717l-.053.3a4.14,4.14,0,0,1-4.323,3.542,4.007,4.007,0,0,1-2.959-1.167,5.731,5.731,0,0,1-1.449-3.9h10.521l.016-.349c.006-.165.012-.337.012-.5A7.169,7.169,0,0,0,349.58,432.569Zm-8.706,4.356c.33-2.291,1.84-4.491,4.358-4.491,2.694,0,4.166,2.2,4.355,4.491Z"
                  transform="translate(-339.079 -430.873)"
                />
              </g>
            </g>
          </svg>
        </div>
        <div id={style.bottomFooterTxt}>
          <span>
            {t("Copyright 2013-2021 - Antoine Online - All Rights Reserved")}
          </span>
          <span>
            {t(
              "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry."
            )}
          </span>
        </div>
      </div>
    </div>
  );
}
