import React from "react";
import Slider from "react-slick";
import style from "../../assests/css/mainbody.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

export default function TrendingBooks({ toys }) {
  // console.log(trendingBook);
  const addToCart = async (title, author, img, price) => {
    let { data } = await axios.post(
      `${process.env.REACT_APP_API_BASE_URL}/cart`,
      { title, author, img, price, qty: 1 }
    );
    console.log(data);
  };

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false,
        },
      },
    ],
  };
  return (
    <div className={style.container}>
      <div className={style.trendingBooks}>
        <p className={style.heading}>Trending in Toys</p>
        <Slider {...settings}>
          {toys &&
            toys.length > 0 &&
            toys?.map((item) => {
              return (
                <div key={item.id} className={style.card}>
                  <img src={item.img} alt={item.title} />
                  <div className={style.wishlist}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="12"
                      viewBox="0 0 13 12"
                    >
                      <path
                        id="ic_wish-list"
                        d="M4.779,1.992A3.775,3.775,0,0,1,7.456,3.121l.036.037.034-.035a3.738,3.738,0,0,1,5.356,0,3.863,3.863,0,0,1,1.109,2.828,4.6,4.6,0,0,1-1.354,3.066l0,0-4.724,4.8a.584.584,0,0,1-.835,0l-4.724-4.8,0,0A4.6,4.6,0,0,1,.993,5.949,3.863,3.863,0,0,1,2.1,3.12,3.775,3.775,0,0,1,4.779,1.992Zm2.713,2.62a.586.586,0,0,1-.42-.178l-.455-.468a2.57,2.57,0,0,0-3.679,0A2.665,2.665,0,0,0,2.174,5.92,3.357,3.357,0,0,0,3.188,8.172l4.3,4.372,4.3-4.372A3.357,3.357,0,0,0,12.81,5.92a2.665,2.665,0,0,0-.764-1.951,2.57,2.57,0,0,0-3.681,0l-.453.466A.586.586,0,0,1,7.492,4.612Z"
                        transform="translate(-0.992 -1.992)"
                        fill="#333f48"
                      />
                    </svg>
                  </div>

                  <div className={style.desc}>
                    <h3 className={style.title}>{item.title}</h3>
                    <p className={style.author}>{item.brand}</p>
                    <p className={style.price}>LBP {item.price}</p>
                  </div>
                  <div className={style.cartBtn}>
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
        </Slider>
      </div>
    </div>
  );
}
