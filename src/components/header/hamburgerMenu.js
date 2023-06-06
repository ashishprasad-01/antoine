import React, { useEffect, useState } from "react";
import header from "../../assests/css/header.module.css";
import { NavLink as Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getHeaderCountry,
  getHeaderNav,
} from "../../store/actions/headerNavAction";
import { getMagazinesCategory } from "../../store/actions/listingAction";
import img from "../../assests/images/icons8-left-arrow-48.png";
import { path } from "../../constants/path";
export default function HamburgerMenu({ toggle }) {
  const { navCategories, country } = useSelector((state) => state.navigation);
  const { category } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  let [state, setState] = useState(0);
  let [arrow, setArrow] = useState(false);
  let [list, setList] = useState(false);
  let [list1, setList1] = useState(false);
  let [list2, setList2] = useState(false);
  let [name, setName] = useState("");

  useEffect(() => {
    dispatch(getHeaderCountry());
    dispatch(getHeaderNav());
    dispatch(getMagazinesCategory());
  }, [dispatch]);

  return (
    <>
      <div className={header.sideNav}>
        <div className={header.sideNavBody}>
          {arrow ? (
            <>
              {
                <div className={header.mobileHeader}>
                  <img
                    src={img}
                    alt="img"
                    onClick={() => {
                      setArrow(!arrow);
                    }}
                  />
                  <span>{name}</span>
                </div>
              }

              <div className={header.megaMenuMobile}>
                <ul>
                  <div
                    className={header.category}
                    onClick={() => {
                      setList(!list);
                    }}
                  >
                    <span>Top Subjects</span>
                    {list ? (
                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        viewBox="0 0 32 32"
                      >
                        <title>plus</title>
                        <path d="M31 12h-11v-11c0-0.552-0.448-1-1-1h-6c-0.552 0-1 0.448-1 1v11h-11c-0.552 0-1 0.448-1 1v6c0 0.552 0.448 1 1 1h11v11c0 0.552 0.448 1 1 1h6c0.552 0 1-0.448 1-1v-11h11c0.552 0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1z"></path>
                      </svg>
                    ) : (
                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        viewBox="0 0 32 32"
                      >
                        <title>minus</title>
                        <path d="M0 13v6c0 0.552 0.448 1 1 1h30c0.552 0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1h-30c-0.552 0-1 0.448-1 1z"></path>
                      </svg>
                    )}
                  </div>
                  {category.length > 0 &&
                    category[0].cate.map((item) => {
                      return (
                        <>
                          {!list ? (
                            <li key={item.id}>
                              <Link>{item.name}</Link>
                            </li>
                          ) : (
                            <></>
                          )}
                        </>
                      );
                    })}
                </ul>
                <ul>
                  <div
                    className={header.category}
                    onClick={() => {
                      setList1(!list1);
                    }}
                  >
                    <span>Browse</span>
                    {!list1 ? (
                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        viewBox="0 0 32 32"
                      >
                        <title>plus</title>
                        <path d="M31 12h-11v-11c0-0.552-0.448-1-1-1h-6c-0.552 0-1 0.448-1 1v11h-11c-0.552 0-1 0.448-1 1v6c0 0.552 0.448 1 1 1h11v11c0 0.552 0.448 1 1 1h6c0.552 0 1-0.448 1-1v-11h11c0.552 0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1z"></path>
                      </svg>
                    ) : (
                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        viewBox="0 0 32 32"
                      >
                        <title>minus</title>
                        <path d="M0 13v6c0 0.552 0.448 1 1 1h30c0.552 0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1h-30c-0.552 0-1 0.448-1 1z"></path>
                      </svg>
                    )}
                  </div>
                  {category.length > 0 &&
                    category[0].browse.map((item) => {
                      return (
                        <>
                          {list1 ? (
                            <li key={item.id}>
                              <Link>{item.name}</Link>
                            </li>
                          ) : (
                            <></>
                          )}
                        </>
                      );
                    })}
                </ul>

                <ul>
                  <div
                    className={header.category}
                    onClick={() => {
                      setList2(!list2);
                    }}
                  >
                    <span>Departments</span>
                    {!list2 ? (
                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        viewBox="0 0 32 32"
                      >
                        <title>plus</title>
                        <path d="M31 12h-11v-11c0-0.552-0.448-1-1-1h-6c-0.552 0-1 0.448-1 1v11h-11c-0.552 0-1 0.448-1 1v6c0 0.552 0.448 1 1 1h11v11c0 0.552 0.448 1 1 1h6c0.552 0 1-0.448 1-1v-11h11c0.552 0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1z"></path>
                      </svg>
                    ) : (
                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        viewBox="0 0 32 32"
                      >
                        <title>minus</title>
                        <path d="M0 13v6c0 0.552 0.448 1 1 1h30c0.552 0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1h-30c-0.552 0-1 0.448-1 1z"></path>
                      </svg>
                    )}
                  </div>
                  {category.length > 0 &&
                    category[0].departments.map((item) => {
                      return (
                        <>
                          {list2 ? (
                            <li key={item.id}>
                              <Link>{item.name}</Link>
                            </li>
                          ) : (
                            <></>
                          )}
                        </>
                      );
                    })}
                </ul>
              </div>
            </>
          ) : (
            <div className={header.sideNavCategory}>
              {/* <div className={header.closeBtn} onClick={()=>{toggle()}}>X</div> */}
              <div className={header.sections}>
                <p
                  onClick={() => {
                    setState(0);
                  }}
                >
                  Menu
                </p>
                <p
                  onClick={() => {
                    setState(1);
                  }}
                >
                  My Account
                </p>
              </div>

              {state === 1 ? (
                <div className={header.accountSection}>
                  <p>Sign In</p>
                  <p>Create Account</p>
                  <p>My Account</p>
                </div>
              ) : (
                <>
                  {navCategories &&
                    navCategories?.map((navItem, index) => {
                      return (
                        <>
                          <li
                            onClick={() => toggle()}
                            key={index}
                            className={header.sideNavList}
                            >
                            {/* <Link to={path.magazineListing}>{navItem}</Link> */}
                            {navItem}
                            <svg
                              onClick={() => {
                                setArrow(!arrow);
                                setName(navItem);
                              }}
                              xmlns="http://www.w3.org/2000/svg"
                              width="7"
                              height="12"
                              viewBox="0 0 7 12"
                            >
                              <path
                                id="ic-rightarrow"
                                d="M8.875,17a.882.882,0,0,0,.619-.251l5.25-5.143a.845.845,0,0,0,0-1.212L9.494,5.251a.888.888,0,0,0-1.237,0,.845.845,0,0,0,0,1.212L12.888,11,8.256,15.537a.845.845,0,0,0,0,1.212A.882.882,0,0,0,8.875,17Z"
                                transform="translate(-8 -5)"
                                fill="#333f48"
                              />
                            </svg>
                          </li>
                        </>
                      );
                    })}
                  {arrow ? (
                    <>
                      {
                        <>
                          <img
                            src={img}
                            alt="img"
                            onClick={() => {
                              setArrow(!arrow);
                            }}
                          />
                          {navCategories?.map((item) => {
                            return <p key={item.id}>{item.name}</p>;
                          })}
                        </>
                      }

                      <div className={header.megaMenu}>
                        <ul>
                          <div className={header.category}>
                            <span>Top Subjects</span>
                            <svg
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              width="10"
                              height="10"
                              viewBox="0 0 32 32"
                            >
                              <title>plus</title>
                              <path d="M31 12h-11v-11c0-0.552-0.448-1-1-1h-6c-0.552 0-1 0.448-1 1v11h-11c-0.552 0-1 0.448-1 1v6c0 0.552 0.448 1 1 1h11v11c0 0.552 0.448 1 1 1h6c0.552 0 1-0.448 1-1v-11h11c0.552 0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1z"></path>
                            </svg>
                          </div>
                          {category.length > 0 &&
                            category[0].cate.map((item) => {
                              return (
                                <>
                                  {list ? (
                                    <li key={item.id}>
                                      <Link>{item.name}</Link>
                                    </li>
                                  ) : (
                                    <></>
                                  )}
                                </>
                              );
                            })}
                        </ul>
                        <ul>
                          <div className={header.category}>
                            <span>Browse</span>
                            <svg
                              version="1.1"
                              onClick={() => {
                                setList(!list);
                              }}
                              xmlns="http://www.w3.org/2000/svg"
                              width="10"
                              height="10"
                              viewBox="0 0 32 32"
                            >
                              <title>plus</title>
                              <path d="M31 12h-11v-11c0-0.552-0.448-1-1-1h-6c-0.552 0-1 0.448-1 1v11h-11c-0.552 0-1 0.448-1 1v6c0 0.552 0.448 1 1 1h11v11c0 0.552 0.448 1 1 1h6c0.552 0 1-0.448 1-1v-11h11c0.552 0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1z"></path>
                            </svg>
                          </div>
                          {category.length > 0 &&
                            category[0].browse.map((item) => {
                              return (
                                <>
                                  {list ? (
                                    <li key={item.id}>
                                      <Link>{item.name}</Link>
                                    </li>
                                  ) : (
                                    <></>
                                  )}
                                </>
                              );
                            })}
                        </ul>

                        <ul>
                          <div className={header.category}>
                            <span>Departments</span>
                            <svg
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              width="10"
                              height="10"
                              viewBox="0 0 32 32"
                            >
                              <title>plus</title>
                              <path d="M31 12h-11v-11c0-0.552-0.448-1-1-1h-6c-0.552 0-1 0.448-1 1v11h-11c-0.552 0-1 0.448-1 1v6c0 0.552 0.448 1 1 1h11v11c0 0.552 0.448 1 1 1h6c0.552 0 1-0.448 1-1v-11h11c0.552 0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1z"></path>
                            </svg>
                          </div>
                          {category.length > 0 &&
                            category[0].departments.map((item) => {
                              return (
                                <>
                                  {list ? (
                                    <li key={item.id}>
                                      <Link>{item.name}</Link>
                                    </li>
                                  ) : (
                                    <></>
                                  )}
                                </>
                              );
                            })}
                        </ul>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                </>
              )}
              {state === 0 ? (
                <div className={header.bottomSideNav}>
                  <select>
                    {country &&
                      country?.map((item, index) => {
                        return <option key={index}>{item.country}</option>;
                      })}
                  </select>
                  <select>
                    {country &&
                      country?.map((item, index) => {
                        return <option key={index}>{item.language}</option>;
                      })}
                  </select>
                  <select>
                    {country &&
                      country?.map((item, index) => {
                        return <option key={index}>{item.currency}</option>;
                      })}
                  </select>
                </div>
              ) : (
                <></>
              )}
            </div>
          )}
        </div>
        <div id={header.abc} onClick={() => toggle()}></div>
      </div>
    </>
  );
}
