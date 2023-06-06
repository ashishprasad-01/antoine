import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import cart from './cart.module.css'
import { NavLink as Link } from 'react-router-dom'
import { path } from '../../constants/path'

export default function CartRight() {
    let [toggle, setToggle] = useState(true)
    const { country } = useSelector((state) => state.navigation)
    const {cartItem} = useSelector((state) => state.cart)
    const [state, setState] = useState([])
    let subTotal = 0
    let shippingCharges = 40000
    let tax = 20000
    const handleCountry = (e) => {
        const getCountryid = e.target.value
        console.log(getCountryid);
        const getState = country.find(country => country.id === parseInt(getCountryid))
        setState(getState.states)
    }

    let Total = cartItem.map((item) => subTotal+= item.qty * item.price)
     Total = subTotal + shippingCharges + tax

    return (
        <>
            <div className={cart.rightCartContainer}>
                {/* <div> */}
                <p>Summary</p>
                {/* </div> */}
                <div className={cart.address} onClick={() => { setToggle(!toggle) }}>
                    <span>Estimate Shipping Charges and Tax</span>
                    <div>
                        {
                            !toggle ? <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7">
                                <path id="ic-downarrow" d="M8.875,17a.882.882,0,0,0,.619-.251l5.25-5.143a.845.845,0,0,0,0-1.212L9.494,5.251a.888.888,0,0,0-1.237,0,.845.845,0,0,0,0,1.212L12.888,11,8.256,15.537a.845.845,0,0,0,0,1.212A.882.882,0,0,0,8.875,17Z" transform="translate(17 -8) rotate(90)" />
                            </svg> : <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7">
                                <g transform="translate(0.000000,7.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                                    <path d="M25 40 c-34 -36 -26 -53 10 -20 l25 23 25 -23 c36 -33 44 -16 10 20 -16 17 -32 30 -35 30 -3 0 -19 -13 -35 -30z" />
                                </g>
                            </svg>
                        }
                    </div>
                </div>
                {
                    toggle ?
                        <div className={cart.country}>

                            <label>Country</label>
                            <select onChange={(e) => handleCountry(e)}>
                                <option>--- Select Country---</option>
                                {
                                    country && country?.map((item, index) => {
                                        return <option key={index} value={item.id}>{item.country}</option>
                                    })
                                }
                            </select>

                            <label>State/province</label>
                            <select>
                                <option>--- Select State---</option>

                                {
                                    state?.map((item, index) => {
                                        return <option key={index}>{item}</option>
                                    })
                                }
                            </select>

                            <label>Zip/Postal Code</label>
                            <input type='number' placeholder='Enter Postal Code'/>
                        </div> : <></>
                }
                <div className={cart.subTotalContainer}>
                    <div className={cart.subTotal}>
                        <p>sub total</p>
                        <p>LBP {subTotal}</p>
                    </div>
                    <div className={cart.subTotal}>
                        <p>Total Shipping Charges</p>
                        <p>LBP {shippingCharges}</p>
                    </div>
                    <div className={cart.subTotal}>
                        <p>Tax</p>
                        <p>LBP {tax}</p>
                    </div>
                </div>

                <div className={cart.orderTotal}>
                    <p>Order Total</p>
                    <p>LBP {Total}</p>
                </div>

                <div className={cart.checkoutBtn}>
                    <Link to={path.checkOut}>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="20" viewBox="0 0 15 20">
                            <path id="Path_1818" data-name="Path 1818" d="M78.583,7.5h-1.25V5.833a5.833,5.833,0,0,0-11.667,0V7.5h-1.25A.416.416,0,0,0,64,7.917V18.333A1.668,1.668,0,0,0,65.667,20H77.333A1.668,1.668,0,0,0,79,18.333V7.917A.416.416,0,0,0,78.583,7.5Zm-5.836,8.7a.417.417,0,0,1-.414.463H70.667a.417.417,0,0,1-.414-.463l.263-2.364a1.648,1.648,0,0,1-.682-1.34,1.667,1.667,0,0,1,3.333,0,1.648,1.648,0,0,1-.682,1.34Zm2.086-8.7H68.167V5.833a3.333,3.333,0,0,1,6.667,0Z" transform="translate(-64)" fill="#fff" />
                        </svg> Proceed To Checkout
                    </button>
                    </Link>
                </div>
            </div>
        </>
    )
}
