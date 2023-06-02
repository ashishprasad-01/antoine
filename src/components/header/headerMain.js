import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HeaderBottom from './headerBottom'
import HeaderMiddle from './headerMiddle'
import HeaderTop from './headerTop'
import header from '../../assests/css/header.module.css'
import { getHeaderCountry, getHeaderNav } from '../../store/actions/headerNavAction'
import { useLocation } from 'react-router-dom';
import CheckOutHeader from '../checkout/checkoutHeader';
// import MegaMenu from './megaMenu'

export default function HeaderMain() {

    const { navCategories, country } = useSelector((state) => state.navigation)
    const dispatch = useDispatch()

    const path = useLocation()

    useEffect(() => {
        dispatch(getHeaderCountry())
        dispatch(getHeaderNav({id:'test'}))
    }, [dispatch])


    return (
        <>
            {/* {path.pathname === '/checkout' ? <header><CheckOutHeader /></header> :
                <header className='mainHeader'>
                    <div className={header.topHeader}>
                        <HeaderTop country={country} />
                    </div>
                    <div className={header.headerContainer}>
                        <HeaderMiddle />
                        <HeaderBottom navCategories={navCategories} />
                    </div>
                    <MegaMenu/>
                </header>} */}

            <header>
                {
                    path.pathname === '/checkout' ? <CheckOutHeader /> :
                        <>
                            <div className={header.topHeader}>
                                <HeaderTop country={country} />
                            </div>
                            <div className={header.headerContainer}>
                                <HeaderMiddle />
                                {/* <hr/> */}
                                <HeaderBottom navCategories={navCategories} />
                            </div>
                            {/* <MegaMenu/> */}
                        </>
                }
            </header>
        </>
    )
}
