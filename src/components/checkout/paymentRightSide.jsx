import React, { useState } from 'react'
import checkout from './checkout.module.css'
import { useSelector } from 'react-redux'

const PaymentRightSide = () => {

  const [cartItems, toggleCartItems] = useState(false)
  const {cartItem} = useSelector((state) => state.cart)

  return (
    <>
      <div className={checkout.checkoutRightContainer}>
        <div className={checkout.CheckoutRightWrapper}>
          <div className={checkout.CheckoutRightContent}>
            <div className={checkout.CheckoutRightTitle}>
              <strong>Summary</strong>
            </div>

            <div className={checkout.cartItemTotalContainer}>
              <div className={checkout.cartItemTotalWrapper}>
                <div className={checkout.cartItemToatlBody}>
                  <div className={checkout.cartItemTotalContent}>
                    <span>Sub Total</span>
                    <span>98594651</span>
                  </div>

                  <div className={checkout.cartItemTotalContent}>
                    <span>Total Shipping Charges</span>
                    <span>LBP 20,000</span>
                  </div>

                  <div className={checkout.cartItemTotalContent}>
                    <span>Tax</span>
                    <span>LBP 20,000</span>
                  </div>
                </div>

                <div className={checkout.cartItemTotalContent} id={checkout.cartItemGrandTotal}>
                  <strong>Order Total</strong>
                  <strong>LBP 56154</strong>
                </div>
              </div>
            </div>
            <div className={checkout.cartItems} id={checkout.paymentCartItems}>
              <strong>{cartItem.length} Items in Cart </strong>
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" onClick={() => toggleCartItems(!cartItems)} className={cartItems ? checkout.toggleSvg : ''}>
                <path id="arrow-dropdown-wt" d="M.75,10a.767.767,0,0,0,.53-.209l4.5-4.286a.69.69,0,0,0,0-1.01L1.28.209A.777.777,0,0,0,.22.209a.691.691,0,0,0,0,1.01L4.189,5,.22,8.781a.69.69,0,0,0,0,1.01A.767.767,0,0,0,.75,10Z" transform="translate(10) rotate(90)" fill="#000" />
              </svg>
            </div>

            {cartItems ?
              <div className={checkout.CheckoutRightBody}>
                <div className={checkout.CheckoutRightBodyContent}>
                  {
                    cartItem.length > 0 && cartItem.map((item, index) => {
                      return <div key={index} className={checkout.cartItemBody}>
                        <div className={checkout.cartItemImg}>
                          <img src={item.img} alt="cart-img" width={46} height={70} />
                        </div>

                        <div className={checkout.cartItemContent}>
                          <div className={checkout.cartItemDetail}>
                            <strong>{item.title}</strong>
                            <span>{item.auth}</span>
                          </div>

                          <div className={checkout.cartItemPrice}>
                            <strong>LBP {item.price}</strong>
                          </div>
                        </div>
                      </div>
                    })
                  }
                </div>
              </div>
              : ''}
          </div>
        </div>

        <div className={checkout.PaymentRightSideShipAddress}>
          <div className={checkout.shipAddressConatiner}>
            <div className={checkout.CheckoutRightTitle}>
              <strong>Ship To</strong>
              <svg xmlns="http://www.w3.org/2000/svg" width="13.997" height="14" viewBox="0 0 13.997 14">
                <path id="edit" d="M173.467,4.743l-8.837,8.837-3.042.337a1.39,1.39,0,0,1-1.535-1.534l.337-3.042L169.227.5a1.964,1.964,0,0,1,2.783,0l1.454,1.454a1.971,1.971,0,0,1,0,2.786Zm-3.325,1.04-1.955-1.955-6.252,6.256-.246,2.2,2.2-.246ZM172.323,3.1,170.87,1.647a.351.351,0,0,0-.5,0l-1.04,1.04,1.955,1.955,1.04-1.04A.359.359,0,0,0,172.323,3.1Z" transform="translate(-160.045 0.075)" fill="#00838c" />
              </svg>
            </div>

            <div className={checkout.shipAddressBody}>
              <strong>John Doe</strong>
              <address className={checkout.shipAddress}>194 Desert Broom Court, <br /> Newark, New Jersey - 07102, <br /> United States <br />(555) 229-3326</address>
            </div>
          </div>
        </div>

        <div className={checkout.PaymentRightSideShipAddress}>
          <div className={checkout.shipAddressConatiner}>
            <div className={checkout.CheckoutRightTitle}>
              <strong>Shipping Method</strong>
              <svg xmlns="http://www.w3.org/2000/svg" width="13.997" height="14" viewBox="0 0 13.997 14">
                <path id="edit" d="M173.467,4.743l-8.837,8.837-3.042.337a1.39,1.39,0,0,1-1.535-1.534l.337-3.042L169.227.5a1.964,1.964,0,0,1,2.783,0l1.454,1.454a1.971,1.971,0,0,1,0,2.786Zm-3.325,1.04-1.955-1.955-6.252,6.256-.246,2.2,2.2-.246ZM172.323,3.1,170.87,1.647a.351.351,0,0,0-.5,0l-1.04,1.04,1.955,1.955,1.04-1.04A.359.359,0,0,0,172.323,3.1Z" transform="translate(-160.045 0.075)" fill="#00838c" />
              </svg>
            </div>

            <div className={checkout.shipAddressBody}>
              <strong>Fixed Rate - <span className={checkout.fixedRate}>Fixed</span>  $10.00</strong>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PaymentRightSide
