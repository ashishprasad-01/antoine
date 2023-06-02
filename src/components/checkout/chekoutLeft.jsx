import { useState } from 'react'



import checkout from './checkout.module.css'
import AddressForm from './addressForm';
import { useSelector } from 'react-redux';

const ChekoutLeft = ({ setProgressBar }) => {

    let {cartItem} = useSelector((state) => state.cart)
    const [toggleForm, setToggleForm] = useState(true)
    const [modalIsOpen, setIsOpen] = useState(false);
    const [checkedAddress, setCheckAddress] = useState(true)

    function openModal() {
        setIsOpen(true);
    }

    return (
        <>
            <div className={checkout.leftContainer}>
                <div className={checkout.leftSideHeader} id={checkout.leftSideMobileHeader}>
                    <div className={checkout.mobileCheckout}>
                        <span>Order Total</span> <br />
                        <strong>544554</strong>
                    </div>

                    <div className={checkout.mobileCheckoutCartIcon}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20">
                            <g id="shopping-cart" transform="translate(0 -0.001)">
                                <path id="Union_4" data-name="Union 4" d="M15,18.26A1.668,1.668,0,1,1,16.666,20,1.7,1.7,0,0,1,15,18.26Zm-9.167,0A1.7,1.7,0,0,1,7.5,16.522,1.74,1.74,0,0,1,7.5,20,1.706,1.706,0,0,1,5.834,18.26Zm-.249-5.577L4.193,5.424a.314.314,0,0,1-.014-.072L3.485,1.74H.834A.852.852,0,0,1,0,.869.849.849,0,0,1,.834,0H4.167a.84.84,0,0,1,.815.7l.7,3.651H19.166a.818.818,0,0,1,.643.314.9.9,0,0,1,.175.717l-1.332,7.3s0,0,0,.007a2.527,2.527,0,0,1-2.448,2.1H8.034A2.524,2.524,0,0,1,5.585,12.683Zm1.634-.341a.841.841,0,0,0,.833.7H16.2a.84.84,0,0,0,.814-.7l1.143-6.26H6.018Z" transform="translate(0 0.001)" fill="#00000" />
                            </g>
                        </svg>
                        <span id={checkout.mobileCartItemCount}>{cartItem.length}</span>
                    </div>
                </div>

                <div className={checkout.leftSideHeader}>
                    <strong>Shipping Address</strong>
                </div>

                <div className={checkout.leftSideBody}>
                    <div className={checkout.addresWrapper}>
                        <div className={checkout.addressContainer}>
                            <div className={`${checkedAddress ? checkout.addressIsActive : ''} ${checkout.address}`} onClick={() => setCheckAddress(true)}>
                                <div className={checkout.addressContent}>
                                    <span className={checkout.addressTitle}>Veronica Costello</span>
                                    <span className={checkout.addressBody}>6146 Honey Bluff Parkway Calder, Michigan 49628-7978</span>
                                    <span className={checkout.addressMno}>(555) 229-3326</span>
                                    <strong>Ship Here</strong>
                                    {checkedAddress?<input type="checkbox" name="" id="" defaultChecked/>:''}
                                </div>
                            </div>

                            <div className={`${!checkedAddress ? checkout.addressIsActive : ''} ${checkout.address}`} onClick={() => setCheckAddress(false)}>
                                <div className={checkout.addressContent}>
                                    <span className={checkout.addressTitle}>Veronica Costello</span>
                                    <span className={checkout.addressBody}>6146 Honey Bluff Parkway Calder, Michigan 49628-7978</span>
                                    <span className={checkout.addressMno}>(555) 229-3326</span>
                                    <strong>Ship Here</strong>
                                    {!checkedAddress?<input type="checkbox" name="" id="" defaultChecked/>:''}
                                </div>
                            </div>
                        </div>

                        <div className={checkout.addAddress}>
                            <button onClick={() => { openModal() }}>+ New Address</button>
                        </div>
                        {modalIsOpen ? <AddressForm modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} /> : ''}
                    </div>

                    <div className={checkout.shippingMethodContainer}>
                        <div className={checkout.leftSideHeader}>
                            <strong>Shipping Methods</strong>
                        </div>

                        <div className={checkout.paymentMethodContainer}>

                            <div className={checkout.paymentMethod}>
                                <input type="radio" name="payment" defaultChecked onChange={() => setToggleForm(!toggleForm)} /> <label htmlFor="20000">LBP 20,000</label> <span>Click & Collect</span>
                            </div>

                            <div className={checkout.paymentMethod}>
                                <input type="radio" name="payment" onChange={() => setToggleForm(!toggleForm)} /> <label htmlFor="40000">LBP 40,000</label> <span>Home delivery</span>
                            </div>
                        </div>

                        <div className={checkout.shippingMethodForm}>
                            {toggleForm ?
                                <>
                                    <div className={checkout.FormContainer}>
                                        <div className={checkout.shippingMethodFormFeild}>
                                            <label htmlFor="store">Select Store</label>
                                            <select name="store" id="store">
                                                <option value="Select-a-store">Select a store</option>
                                                <option value="Achrafieh-Sassine">Achrafieh – Sassine</option>
                                            </select>
                                        </div>

                                        <div className={checkout.pickupAddressDetails}>
                                            <div className={checkout.pickupAddressTitle}>
                                                <strong>Store Name:</strong><span>Achrafieh – Sassine</span>
                                            </div>

                                            <div className={checkout.pickupAddressTitle}>
                                                <strong>Store Address</strong>
                                                <div className={checkout.pickupAddress}>
                                                    <span>Independence Street (Elias Sarkis Avenue، Lebanon)</span>
                                                    <span className={checkout.pickupAddressMno}>+961 1 331 811</span>
                                                    <div className={checkout.moreAboutStore}>
                                                        <span>
                                                            More About Store
                                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="6" height="9" viewBox="0 0 32 32">
                                                                <title>ic_arw-nxt</title>
                                                                <path d="M25.007 14.856l-14.342-14.34c-0.32-0.318-0.76-0.515-1.247-0.515s-0.927 0.197-1.247 0.515l-1.054 1.054c-0.319 0.319-0.516 0.76-0.516 1.247s0.197 0.928 0.516 1.247l12.047 12.047-12.060 12.053c-0.318 0.32-0.515 0.76-0.515 1.247s0.197 0.927 0.515 1.247l1.056 1.056c0.32 0.318 0.76 0.515 1.247 0.515s0.927-0.197 1.247-0.515l14.353-14.355c0.318-0.321 0.514-0.763 0.514-1.251s-0.196-0.93-0.514-1.251l0 0z" fill='#00838C'></path>
                                                            </svg>
                                                        </span>
                                                        <span>
                                                            View Store On Google Map
                                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="6" height="9" viewBox="0 0 32 32">
                                                                <title>ic_arw-nxt</title>
                                                                <path d="M25.007 14.856l-14.342-14.34c-0.32-0.318-0.76-0.515-1.247-0.515s-0.927 0.197-1.247 0.515l-1.054 1.054c-0.319 0.319-0.516 0.76-0.516 1.247s0.197 0.928 0.516 1.247l12.047 12.047-12.060 12.053c-0.318 0.32-0.515 0.76-0.515 1.247s0.197 0.927 0.515 1.247l1.056 1.056c0.32 0.318 0.76 0.515 1.247 0.515s0.927-0.197 1.247-0.515l14.353-14.355c0.318-0.321 0.514-0.763 0.514-1.251s-0.196-0.93-0.514-1.251l0 0z" fill='#00838C'></path>
                                                            </svg>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                                : ''}
                            <div className={checkout.leftSideFooter}>
                                <div className={checkout.leftSideFooterForm}>
                                    <label htmlFor="pickup-date">Pickup A Date</label>
                                    <input type="text" id='pickup-date' placeholder='Select a pickup date' />
                                </div>

                                <div className={checkout.leftSideFooterForm}>
                                    <label htmlFor="pickup-time">Select A Time</label>
                                    <input type="text" id='pickup-time' placeholder='Select a time Slot' />
                                </div>
                            </div>

                            <div className={checkout.leftSideFooterBtn}>
                                <button onClick={() => setProgressBar(false)}>Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChekoutLeft
