import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductByID } from '../../store/actions/listingAction'
import { Link, useParams } from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import style from '../../assests/css/detail.module.css'
import { Rating } from 'react-simple-star-rating'
import DesktopProductDesc from './productDesc'
import MobileProductDesc from './mobileProductDesc'
import TrendingBooks from '../mainBody/trendingBooks'
import { t } from 'i18next'
// import ReviewForm from './reviewForm'

export default function ProductDetail() {
  let { productDetail } = useSelector((state) => state.product)
  const dispatch = useDispatch()
  let { id } = useParams()
  let [quantity, setQuantity] = useState(1)
  console.log(productDetail);

  useEffect(() => {
    dispatch(getProductByID(id))
  }, [dispatch, id])

  return (
    <div>
      <div className={style.Container} id={style.productDetailContainer}>
        <div className={style.productDetailLeft}>
          <Carousel showIndicators={false} showStatus={false} showArrows={false} thumbWidth={54}>
            {
              productDetail.thumbImg && productDetail.thumbImg.map((item, index) => {
                return (
                  <div className={style.productDetailSlider} key={index}>
                    <img src={`/${item}`} alt="product-detail-img" />
                  </div>
                )
              })
            }
          </Carousel>
        </div>
        <div className={style.productDetailRight}>
          <div className={style.description}>
            <p>{t(productDetail.title)}</p>
            <p><span>{t(productDetail.author)}</span> {t("(Author)")},&nbsp; <span>{productDetail.narrator}</span> (Narrator), &nbsp;<span>{productDetail.publisher}</span> (publisher)</p>
            <Rating id={style.Rating} size={20} fillColor='orange' emptyColor='gray' />
            <p id={style.price}>LBP {productDetail.price}</p>
          </div>
          <div id={style.quantity}>
            <p>{t("Quantity")}</p>
            <div className={style.quantity}>
              <button onClick={() => { setQuantity(quantity - 1) }}>-</button>
              <span>{quantity}</span>
              <button onClick={() => { setQuantity(quantity + 1) }}>+</button>
            </div>
          </div>

          <div className={style.loginButton}>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32">
                <g id="shopping-cart" transform="translate(0 -0.001)">
                  <path id="Union_4" data-name="Union 4" d="M24,29.217A2.669,2.669,0,1,1,26.666,32,2.728,2.728,0,0,1,24,29.217Zm-14.667,0A2.728,2.728,0,0,1,12,26.436,2.785,2.785,0,0,1,12,32,2.729,2.729,0,0,1,9.334,29.217Zm-.4-8.924L6.708,8.678a.5.5,0,0,1-.022-.115L5.576,2.783H1.335A1.363,1.363,0,0,1,0,1.391,1.359,1.359,0,0,1,1.335,0H6.667a1.343,1.343,0,0,1,1.3,1.115L9.095,6.957H30.666a1.309,1.309,0,0,1,1.029.5,1.435,1.435,0,0,1,.281,1.146L29.844,20.281c-.006.006-.006.006-.006.012a4.043,4.043,0,0,1-3.917,3.359H12.855A4.038,4.038,0,0,1,8.935,20.293Zm2.615-.545a1.345,1.345,0,0,0,1.333,1.121H25.921a1.344,1.344,0,0,0,1.3-1.115L29.052,9.738H9.628Z" transform="translate(0 0.001)" />
                </g>
              </svg>{t("Add To Cart")}
            </button>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20">
                <g id="user" transform="translate(-3.002 -1.998)">
                  <path id="Union_3" data-name="Union 3" d="M16,19V17a3,3,0,0,0-3-3H5a3.006,3.006,0,0,0-3,3v2a1,1,0,0,1-2,0V17a5,5,0,0,1,5-5h8a5,5,0,0,1,5,5v2a1,1,0,0,1-2,0ZM4,5a5,5,0,1,1,5,5A5.006,5.006,0,0,1,4,5ZM6,5A3,3,0,1,0,9,2,3,3,0,0,0,6,5Z" transform="translate(3.002 1.998)" />
                </g>
              </svg>{t("Sign-In To Purchase Instantly")}
            </button>
          </div>

          <div className={style.cartOptions}>
            <ul className={style.item}>
              <Link>
                <li className={style.items}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 20">
                    <g id="Location" transform="translate(-2)">
                      <path id="Path_6016" data-name="Path 6016" d="M10.5,0A8.427,8.427,0,0,1,19,8.333a9.381,9.381,0,0,1-1.3,4.553,17.663,17.663,0,0,1-2.759,3.625,25.678,25.678,0,0,1-3.971,3.349.864.864,0,0,1-.943,0,25.678,25.678,0,0,1-3.971-3.349A17.663,17.663,0,0,1,3.3,12.886,9.381,9.381,0,0,1,2,8.333,8.427,8.427,0,0,1,10.5,0Zm0,18.142c1.612-1.173,6.8-5.3,6.8-9.809a6.742,6.742,0,0,0-6.8-6.667A6.742,6.742,0,0,0,3.7,8.333C3.7,12.844,8.888,16.969,10.5,18.142Z" />
                      <path id="Ellipse_34" data-name="Ellipse 34" d="M2.4-1A3.371,3.371,0,0,1,5.8,2.333,3.371,3.371,0,0,1,2.4,5.667,3.371,3.371,0,0,1-1,2.333,3.371,3.371,0,0,1,2.4-1Zm0,5A1.685,1.685,0,0,0,4.1,2.333,1.685,1.685,0,0,0,2.4.667,1.685,1.685,0,0,0,.7,2.333,1.685,1.685,0,0,0,2.4,4Z" transform="translate(8.1 6)" />
                    </g>
                  </svg> {t("Check In Store Availability")}
                </li>
              </Link>

              <Link>
                <li className={style.items}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 12">
                    <path id="ic_wish-list" d="M4.779,1.992A3.775,3.775,0,0,1,7.456,3.121l.036.037.034-.035a3.738,3.738,0,0,1,5.356,0,3.863,3.863,0,0,1,1.109,2.828,4.6,4.6,0,0,1-1.354,3.066l0,0-4.724,4.8a.584.584,0,0,1-.835,0l-4.724-4.8,0,0A4.6,4.6,0,0,1,.993,5.949,3.863,3.863,0,0,1,2.1,3.12,3.775,3.775,0,0,1,4.779,1.992Zm2.713,2.62a.586.586,0,0,1-.42-.178l-.455-.468a2.57,2.57,0,0,0-3.679,0A2.665,2.665,0,0,0,2.174,5.92,3.357,3.357,0,0,0,3.188,8.172l4.3,4.372,4.3-4.372A3.357,3.357,0,0,0,12.81,5.92a2.665,2.665,0,0,0-.764-1.951,2.57,2.57,0,0,0-3.681,0l-.453.466A.586.586,0,0,1,7.492,4.612Z" transform="translate(-0.992 -1.992)" />
                  </svg>{t("Add To Wishlist")}
                </li>
              </Link>

              <Link>
                <li className={style.items}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 16">
                    <g id="share-2" transform="translate(-2 -1)">
                      <path id="Ellipse_33" data-name="Ellipse 33" d="M2-1A2.959,2.959,0,0,1,5,1.909,2.959,2.959,0,0,1,2,4.818,2.959,2.959,0,0,1-1,1.909,2.959,2.959,0,0,1,2-1ZM2,3.364A1.479,1.479,0,0,0,3.5,1.909,1.479,1.479,0,0,0,2,.455,1.479,1.479,0,0,0,.5,1.909,1.479,1.479,0,0,0,2,3.364Z" transform="translate(12 2)" />
                      <path id="Ellipse_34" data-name="Ellipse 34" d="M2-1A2.959,2.959,0,0,1,5,1.909,2.959,2.959,0,0,1,2,4.818,2.959,2.959,0,0,1-1,1.909,2.959,2.959,0,0,1,2-1ZM2,3.364A1.479,1.479,0,0,0,3.5,1.909,1.479,1.479,0,0,0,2,.455,1.479,1.479,0,0,0,.5,1.909,1.479,1.479,0,0,0,2,3.364Z" transform="translate(3 7.091)" />
                      <path id="Ellipse_35" data-name="Ellipse 35" d="M2-1A2.959,2.959,0,0,1,5,1.909,2.959,2.959,0,0,1,2,4.818,2.959,2.959,0,0,1-1,1.909,2.959,2.959,0,0,1,2-1ZM2,3.364A1.479,1.479,0,0,0,3.5,1.909,1.479,1.479,0,0,0,2,.455,1.479,1.479,0,0,0,.5,1.909,1.479,1.479,0,0,0,2,3.364Z" transform="translate(12 12.182)" />
                      <path id="Line_1" data-name="Line 1" d="M4.872,3.349a.764.764,0,0,1-.377-.1L-.628.356A.715.715,0,0,1-.9-.639.763.763,0,0,1,.128-.9L5.25,1.993a.715.715,0,0,1,.27.995A.755.755,0,0,1,4.872,3.349Z" transform="translate(7.193 10.371)" fill="#333f48" />
                      <path id="Line_2" data-name="Line 2" d="M-.249,3.349A.755.755,0,0,1-.9,2.988a.715.715,0,0,1,.27-.995L4.487-.9a.763.763,0,0,1,1.026.262.715.715,0,0,1-.27.995L.128,3.25A.765.765,0,0,1-.249,3.349Z" transform="translate(7.193 5.28)" fill="#333f48" />
                    </g>
                  </svg> 
                  {t("Share")}
                </li>
              </Link>
            </ul>
          </div>

          <div className={style.delivery}>
            <p>{t("For International")}: 1-2 {t("days")}</p>
            <p>{t("For Lebanon")}: 6-8 {t("days")}</p>
          </div>
        </div>
      </div>
        <DesktopProductDesc/>
        {/* <ReviewForm name={productDetail.title}/> */}
        <MobileProductDesc/>
        <TrendingBooks/>
    </div>
  )
}