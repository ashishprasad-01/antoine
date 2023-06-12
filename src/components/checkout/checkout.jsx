import React from 'react'

import style from '../../assests/css/header.module.css'
import chkheader from './checkout.module.css'
import { useState } from 'react'
import ChekoutLeft from './chekoutLeft'
import CheckoutRight from './checkoutRight'
import PaymentLeft from './paymentLeft'
import PaymentRightSide from './paymentRightSide'
import { t } from 'i18next'

const Checkout = () => {
  const [progressbar, setProgressBar] = useState(true)

  return (
    <>
      <div className={style.container}>
        <div className={chkheader.CheckoutWrapper}>
          <div className={chkheader.CheckoutTitle}>
            <strong>{t("Checkout")}</strong>
          </div>

          <div className={chkheader.progressbarContainer}>
            <div className={chkheader.reviewSvg}>
              <div className={`${!progressbar ? chkheader.checked : ''} ${chkheader.svgLine}`}></div>
              <div className={`${chkheader.reviewItem} ${!progressbar ? chkheader.checkedBorder : ''} `}>&#10003;</div>
              <div className={`${!progressbar ? chkheader.checked : ''} ${chkheader.svgLine}`} ></div>
            </div>
            <div className={chkheader.reviewSvg}>
              <div className={`${progressbar ? chkheader.checked : ''} ${chkheader.svgLine}`} ></div>
              <div className={`${chkheader.reviewItem} ${progressbar ? chkheader.checkedBorder : ''} `}>2</div>
              <div className={`${progressbar ? chkheader.checked : ''} ${chkheader.svgLine}`} ></div>
            </div>
          </div>
        </div>
        {progressbar ?
          <>
            <div className={chkheader.componentContainer}>
              <ChekoutLeft setProgressBar={setProgressBar}/>
              <CheckoutRight />
            </div>
          </>
            : 
            <div className={chkheader.PaymentComponentContainer}>
              <PaymentLeft setProgressBar={setProgressBar}/>
              <PaymentRightSide/>
            </div>
            }
      </div>
    </>
  )
}

export default Checkout
