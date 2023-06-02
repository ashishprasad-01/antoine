import React, { useEffect } from 'react'
import header from '../../assests/css/header.module.css'
import { NavLink as Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getMagazinesCategory } from '../../store/actions/listingAction'

export default function MegaMenu() {
    const { category } = useSelector((state) => state.product)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getMagazinesCategory())
    }, [dispatch])
    return (
        <>
            <div className={header.container}>
                <div className={header.megaMenu}>
                    <ul>
                        <span>Top Subjects</span>
                        {
                            category.length > 0 && category[0].cate.map((item) => {
                                return (
                                    <li key={item.id}><Link>{item.name}</Link></li>
                                )
                            })
                        }
                    </ul>
                    <ul>
                        <span>Browse</span>
                        {
                            category.length > 0 && category[0].browse.map((item) => {
                                return (
                                    <li key={item.id}><Link>{item.name}</Link></li>
                                )
                            })
                        }
                    </ul>

                    <ul>
                        <span>Department</span>
                        {
                            category.length > 0 && category[0].departments.map((item) => {
                                return (
                                    <li key={item.id}><Link>{item.name}</Link></li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}
