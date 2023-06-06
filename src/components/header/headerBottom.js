import React, { useEffect, useState } from 'react'
import header from '../../assests/css/header.module.css'
import { NavLink as Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getMagazinesCategory } from '../../store/actions/listingAction'
import img from '../../assests/images/guardians.png'

export default function HeaderBottom({ navCategories }) {

  const { category } = useSelector((state) => state.product)
  const dispatch = useDispatch()
  // eslint-disable-next-line no-unused-vars
  let [state, setState] = useState(false)

  useEffect(() => {
    dispatch(getMagazinesCategory())
  }, [dispatch])

  return (
    <>
      <div className={header.container}>
        <nav>
          <ul className={header.navigation}>
            {
              navCategories && navCategories?.map((navItem, index) => {
                return (
                  <li key={index} className={header.navList}  /* onMouseOver={()=> {setState(true)}} onMouseOut={()=>{setState(false)}} */>
                    <Link to={navItem} id={header.navlistLink}>{navItem}</Link>
                  </li>
                )
              })
            }
          </ul>

          {/* <HamburgerMenu navCategories = {navCategories}/> */}
          {
            state ?
              <div className={header.megaMenuContainer}>
                <div className={header.megaMenu}>
                  <ul>
                    <p><span>Top Subjects</span></p>
                    {
                      category.length > 0 && category[0].cate.map((item) => {
                        return (
                          <li key={item.id}><Link>{item.name}</Link></li>
                        )
                      })
                    }
                  </ul>
                  <ul>
                    <p><span>Browse</span></p>
                    {
                      category.length > 0 && category[0].browse.map((item) => {
                        return (
                          <li key={item.id}><Link>{item.name}</Link></li>
                        )
                      })
                    }
                  </ul>
                  <ul>
                    <p><span>Department</span></p>
                    {
                      category.length > 0 && category[0].departments.map((item) => {
                        return (
                          <li key={item.id}><Link>{item.name}</Link></li>
                        )
                      })
                    }
                  </ul>
                  <ul id={header.megaMenuImg}>
                    <img src={img} alt='' />
                    <span>50% off the biggest Books & More!</span>
                    <Link>Shop Now</Link>
                  </ul>
                </div>
              </div> : <></>
          }
        </nav>
      </div>
    </>
  )
}
