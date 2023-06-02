import React, { useState } from 'react'
import style from '../../assests/css/detail.module.css'
import DescriptionPage from './descriptionPage'
import ReviewPage from './reviewPage'

export default function MobileProductDesc() {
    let [expanded, setExpanded] = useState(0)

    return (
        <>
            <div className={style.mobileDetailContainer}>
                <div className={style.heading}>
                    <ul className={style.items}>
                        <li className={style.item} onClick={() => { expanded !== 1 ? setExpanded(1) : setExpanded(0) }}>
                            <div id={style.item}>
                                Product Description
                                {
                                    expanded !== 1 ? <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                        <title>plus</title>
                                        <path d="M31 12h-11v-11c0-0.552-0.448-1-1-1h-6c-0.552 0-1 0.448-1 1v11h-11c-0.552 0-1 0.448-1 1v6c0 0.552 0.448 1 1 1h11v11c0 0.552 0.448 1 1 1h6c0.552 0 1-0.448 1-1v-11h11c0.552 0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1z"></path>
                                    </svg> : <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                        <title>minus</title>
                                        <path d="M0 13v6c0 0.552 0.448 1 1 1h30c0.552 0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1h-30c-0.552 0-1 0.448-1 1z"></path>
                                    </svg>
                                }
                            </div>
                            {expanded === 1 ? <DescriptionPage /> : <></>}
                        </li>

                        <li className={style.item} onClick={() => { expanded !== 2 ? setExpanded(2) : setExpanded(0) }}>
                            <div id={style.item}>
                                Additional Information
                                {
                                    expanded !== 2 ? <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                        <title>plus</title>
                                        <path d="M31 12h-11v-11c0-0.552-0.448-1-1-1h-6c-0.552 0-1 0.448-1 1v11h-11c-0.552 0-1 0.448-1 1v6c0 0.552 0.448 1 1 1h11v11c0 0.552 0.448 1 1 1h6c0.552 0 1-0.448 1-1v-11h11c0.552 0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1z"></path>
                                    </svg> : <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                        <title>minus</title>
                                        <path d="M0 13v6c0 0.552 0.448 1 1 1h30c0.552 0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1h-30c-0.552 0-1 0.448-1 1z"></path>
                                    </svg>
                                }
                            </div>
                        </li>

                        <li className={style.item} onClick={() => { expanded !== 3 ? setExpanded(3) : setExpanded(0) }}>
                            <div id={style.item}>
                                Reviews
                                {
                                    expanded !== 3 ? <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                        <title>plus</title>
                                        <path d="M31 12h-11v-11c0-0.552-0.448-1-1-1h-6c-0.552 0-1 0.448-1 1v11h-11c-0.552 0-1 0.448-1 1v6c0 0.552 0.448 1 1 1h11v11c0 0.552 0.448 1 1 1h6c0.552 0 1-0.448 1-1v-11h11c0.552 0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1z"></path>
                                    </svg> : <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                        <title>minus</title>
                                        <path d="M0 13v6c0 0.552 0.448 1 1 1h30c0.552 0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1h-30c-0.552 0-1 0.448-1 1z"></path>
                                    </svg>
                                }
                            </div>
                            {expanded === 3 ? <ReviewPage /> : <></>}
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}