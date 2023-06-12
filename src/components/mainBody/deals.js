import React from 'react'
import Slider from "react-slick";
import style from '../../assests/css/mainbody.module.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { t } from 'i18next';


export default function Deals({ deals }) {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        arrows:false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    rows:2

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    centerPadding: "10px",
                    rows:2
                }
            }
        ]
    };

    return (
        <>
            <div className={style.container}>
                <div className={style.deal}>
                    <Slider {...settings}>
                        {
                            deals && deals.length > 0 && deals?.map((item) => {
                                return (
                                    <div className={style.dealSlider} key={item.id}>
                                        <img src={item.img} alt='img' />
                                        <p>{t(item.text)}</p>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </div>
        </>
    )
}
