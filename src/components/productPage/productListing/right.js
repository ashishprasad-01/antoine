import React, { useEffect, useState } from "react";
import book from "../../../assests/css/book.module.css";
import { useDispatch, useSelector } from "react-redux";
import { NavLink as Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import {
  getAllProducts,
  getMagazinesCategory,
} from "../../../store/actions/listingAction";
import {
  sortProductsByName,
  sortProductsByPrice,
} from "../../../store/slices/listingSlice";

export default function Right() {
  const notify = () => toast.success("Product Added to Cart");

  const { register, handleSubmit } = useForm();

  const { allproducts } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  let [view, setView] = useState(0);

  const [currentPage, setCurrenPage] = useState(1);
  const recordsPerPage = 8;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = allproducts.slice(firstIndex, lastIndex);
  const page = Math.ceil(allproducts.length / recordsPerPage);
  const numbers = [...Array(page + 1).keys()].slice(1);

  console.log(records);

  const addToCart = async (title, author, img, price) => {
    let { data } = await axios.post(
      `${process.env.REACT_APP_API_BASE_URL}/cart`,
      { title, author, img, price, qty: 1 }
    );
    console.log(data);
    notify();
  };

  const prevPage = () => {
    if (currentPage !== firstIndex) {
      setCurrenPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== lastIndex) {
      setCurrenPage(currentPage + 1);
    }
  };

  const changePage = (id) => {
    setCurrenPage(id);
  };

  const submit = ({ sortProducts }) => {
    switch (sortProducts) {
      case "name_a_z":
        console.log("case 1 called");
        dispatch(sortProductsByName());
        break;

      case "name_z_a":
        dispatch(sortProductsByName("DESC"));
        break;

      case "l_to_h":
        dispatch(sortProductsByPrice());
        break;

      case "h_to_l":
        dispatch(sortProductsByPrice("DESC"));
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    dispatch(getMagazinesCategory());
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <>
      <div className={book.rightSide}>
        <div className={book.topLeft}>
          <p>Books<span>{records.length} of {allproducts.length}</span></p>
          
          <div className={book.topRight}>
            <form onChange={handleSubmit(submit)}>
              <select {...register("sortProducts")} defaultValue={"name_a_z"}>
                <option value="name_a_z">
                  Sort By Name A to Z
                </option>
                <option value="name_z_a">Sort By Name Z to A</option>
                <option value="l_to_h">Price Low to High</option>
                <option value="h_to_l">Price High to Low</option>
              </select>
            </form>
            <div className={book.view}>
              <button
                onClick={() => {
                  setView(0);
                }}
                id={view === 0 ? book.btnColor : book.btnColor1}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                >
                  <g id="layout-list" transform="translate(-2.25 -2.25)">
                    <path
                      id="Rectangle_1973"
                      data-name="Rectangle 1973"
                      d="M-.083-.75H6.794a.683.683,0,0,1,.667.7V7.183a.683.683,0,0,1-.667.7H-.083a.683.683,0,0,1-.667-.7V-.052A.683.683,0,0,1-.083-.75ZM6.127.645H.583v5.84H6.127Z"
                      transform="translate(3 14.37)"
                      fill="#333f48"
                    />
                    <path
                      id="Rectangle_1974"
                      data-name="Rectangle 1974"
                      d="M-.083-.75H6.794a.683.683,0,0,1,.667.7V7.183a.683.683,0,0,1-.667.7H-.083a.683.683,0,0,1-.667-.7V-.052A.683.683,0,0,1-.083-.75ZM6.127.645H.583v5.84H6.127Z"
                      transform="translate(3 3)"
                      fill="#333f48"
                    />
                    <path
                      id="Rectangle_1973-2"
                      data-name="Rectangle 1973"
                      d="M-.083-.75H6.794a.683.683,0,0,1,.667.7V7.183a.683.683,0,0,1-.667.7H-.083a.683.683,0,0,1-.667-.7V-.052A.683.683,0,0,1-.083-.75ZM6.127.645H.583v5.84H6.127Z"
                      transform="translate(14.79 14.369)"
                      fill="#333f48"
                    />
                    <path
                      id="Rectangle_1974-2"
                      data-name="Rectangle 1974"
                      d="M-.083-.75H6.794a.683.683,0,0,1,.667.7V7.183a.683.683,0,0,1-.667.7H-.083a.683.683,0,0,1-.667-.7V-.052A.683.683,0,0,1-.083-.75ZM6.127.645H.583v5.84H6.127Z"
                      transform="translate(14.79 3)"
                      fill="#333f48"
                    />
                  </g>
                </svg>
                Grid
              </button>
              <button
                onClick={() => {
                  setView(1);
                }}
                id={view === 1 ? book.btnColor : book.btnColor1}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                >
                  <g id="layout-list" transform="translate(-2.25 -2.25)">
                    <path
                      id="Rectangle_1973"
                      data-name="Rectangle 1973"
                      d="M-.083-.75H6.794a.683.683,0,0,1,.667.7V7.183a.683.683,0,0,1-.667.7H-.083a.683.683,0,0,1-.667-.7V-.052A.683.683,0,0,1-.083-.75ZM6.127.645H.583v5.84H6.127Z"
                      transform="translate(3 14.37)"
                      fill="#72797e"
                    />
                    <path
                      id="Rectangle_1974"
                      data-name="Rectangle 1974"
                      d="M-.083-.75H6.794a.683.683,0,0,1,.667.7V7.183a.683.683,0,0,1-.667.7H-.083a.683.683,0,0,1-.667-.7V-.052A.683.683,0,0,1-.083-.75ZM6.127.645H.583v5.84H6.127Z"
                      transform="translate(3 3)"
                      fill="#72797e"
                    />
                    <path
                      id="Line_1"
                      data-name="Line 1"
                      d="M7.776.645H-.083a.683.683,0,0,1-.667-.7.683.683,0,0,1,.667-.7h7.86a.683.683,0,0,1,.667.7A.683.683,0,0,1,7.776.645Z"
                      transform="translate(13.807 4.034)"
                      fill="#72797e"
                    />
                    <path
                      id="Line_2"
                      data-name="Line 2"
                      d="M7.776.645H-.083a.683.683,0,0,1-.667-.7.683.683,0,0,1,.667-.7h7.86a.683.683,0,0,1,.667.7A.683.683,0,0,1,7.776.645Z"
                      transform="translate(13.807 9.202)"
                      fill="#72797e"
                    />
                    <path
                      id="Line_3"
                      data-name="Line 3"
                      d="M7.776.645H-.083a.683.683,0,0,1-.667-.7.683.683,0,0,1,.667-.7h7.86a.683.683,0,0,1,.667.7A.683.683,0,0,1,7.776.645Z"
                      transform="translate(13.807 15.403)"
                      fill="#72797e"
                    />
                    <path
                      id="Line_4"
                      data-name="Line 4"
                      d="M7.776.645H-.083a.683.683,0,0,1-.667-.7.683.683,0,0,1,.667-.7h7.86a.683.683,0,0,1,.667.7A.683.683,0,0,1,7.776.645Z"
                      transform="translate(13.807 20.571)"
                      fill="#72797e"
                    />
                  </g>
                </svg>
                List
              </button>
            </div>
          </div>
        </div>

        {
          allproducts.length > 0 ? <div
          className={`${book.productListing} ${
            view === 0 ? "" : book.productListingColumn
          }`}
        >
          {records.length > 0 &&
            records.map((item) => {
              return (
                <div
                  key={item.id}
                  className={`${book.card} ${
                    view === 0 ? "" : book.cardColumn
                  }`}
                >
                  <Link to={`/product/${item.id}`}>
                    <img src={item.img} alt={item.title} />
                  </Link>
                  <div
                    className={`${book.desc} ${
                      view === 0 ? "" : book.descColumn
                    }`}
                  >
                    <Link to={`/product/${item.id}`}>
                      <p className={book.title}>{item.title}</p>
                      <p className={book.author}>{item.author}</p>

                      {view === 0 ? (
                        <></>
                      ) : (
                        <span className={book.rating}>
                          <Rating
                            size={20}
                            fillColor="orange"
                            emptyColor="gray"
                          />
                        </span>
                      )}

                      <p className={book.price}>LBP {item.price}</p>
                    </Link>
                    <button
                      onClick={() => {
                        addToCart(
                          item.title,
                          item.author,
                          item.img,
                          item.price
                        );
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                      >
                        <g id="shopping-cart" transform="translate(0 -0.001)">
                          <path
                            id="Union_4"
                            data-name="Union 4"
                            d="M15,18.26A1.668,1.668,0,1,1,16.666,20,1.7,1.7,0,0,1,15,18.26Zm-9.167,0A1.7,1.7,0,0,1,7.5,16.522,1.74,1.74,0,0,1,7.5,20,1.706,1.706,0,0,1,5.834,18.26Zm-.249-5.577L4.193,5.424a.314.314,0,0,1-.014-.072L3.485,1.74H.834A.852.852,0,0,1,0,.869.849.849,0,0,1,.834,0H4.167a.84.84,0,0,1,.815.7l.7,3.651H19.166a.818.818,0,0,1,.643.314.9.9,0,0,1,.175.717l-1.332,7.3s0,0,0,.007a2.527,2.527,0,0,1-2.448,2.1H8.034A2.524,2.524,0,0,1,5.585,12.683Zm1.634-.341a.841.841,0,0,0,.833.7H16.2a.84.84,0,0,0,.814-.7l1.143-6.26H6.018Z"
                            transform="translate(0 0.001)"
                            fill="#fff"
                          />
                        </g>
                      </svg>
                      Add to cart
                    </button>
                  </div>
                </div>
              );
            })}
        </div>:<h2 style={{marginTop :'20px'}}>No Products are available</h2>
        }
        

        {
          allproducts.length > 0 ? 

          <ul className={book.paginationContainer}>
            <li className={book.pageNumber}>
              <button
                onClick={() => prevPage()}
                disabled={currentPage === 1 ? true : false}
              >
                &lt;&lt;
              </button>
            </li>

            {numbers.map((n, i) => (
              <li
                key={i}
                className={`${book.pageNumber} ${
                  currentPage === n ? book.active : ""
                }`}
              >
                <p onClick={() => changePage(n)}>{n}</p>
              </li>
            ))}

            <li className={book.pageNumber}>
              <button
                onClick={() => nextPage()}
                disabled={currentPage === page ? true : false}
              >
                &gt;&gt;
              </button>
            </li>
          </ul>:''
        }
      </div>

    </>
  );
}
