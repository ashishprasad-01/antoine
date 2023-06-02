import React from 'react'

import checkout from './checkout.module.css'
import { useSelector } from 'react-redux';

const CheckoutRight = () => {

    let {cartItem} = useSelector((state) => state.cart)
    console.log(cartItem);

    return (
        <>
            <div className={checkout.checkoutRightContainer}>
                <div className={checkout.CheckoutRightWrapper}>
                    <div className={checkout.CheckoutRightContent}>
                        <div className={checkout.CheckoutRightTitle}>
                            <strong>Summary</strong>
                        </div>

                        <div className={checkout.cartItems}>
                            <strong>{cartItem.length} Items in Cart</strong>
                        </div>

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
                                                    <span>{item.author}</span>
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
                    </div>
                </div>
            </div>
        </>
    )
}

export default CheckoutRight
