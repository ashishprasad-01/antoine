import React, { useEffect } from 'react'
import cart from './cart.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { getCart } from '../../store/actions/cartActions'
import { getHeaderCountry } from '../../store/actions/headerNavAction'
import CartRight from './cartRight'
import CartLeft from './cartLeft'
export default function Cart() {
    const { cartItem } = useSelector((state) => state.cart)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCart())
        dispatch(getHeaderCountry())
    }, [dispatch])

    return (
        <>
            {/* Cart main Container */}

            <div className={cart.mainContainer}>

                {/* cart header container */}
                <div className={cart.cartHeading}>
                    <p>Shopping cart</p>
                    <p>You have {cartItem.length} items in cart.</p>
                </div>
                <div className={cart.cartContainer}>

                    {/* Cart left container */}

                {
                    cartItem.length > 0 ?   
                    <>
                        <CartLeft cartItem = {cartItem}/>                    
                        <CartRight />
                    </>:<><h3>No items in cart</h3></>
                }
                
                </div>
            </div>
        </>
    )
}
