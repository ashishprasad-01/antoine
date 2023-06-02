import React from 'react'
import style from '../../assests/css/mainbody.module.css'
import { NavLink as Link } from 'react-router-dom';


export default function BooksByLanguage({ languageBook }) {

  return (
    <div className={style.container}>
      <div className={style.trendingBooks}>
        <p className={style.heading}>Books By Language</p>
        <div className={style.bookList}>
          {
            languageBook && languageBook?.map((item) => {
              return (
                <div className={style.bookContainer} style={{ background: item.color }} key={item.id}>
                  <div className={style.language}>
                    <p>{item.language}</p>
                    <p><Link>View Collection</Link></p>
                  </div>

                  <div className={style.bookImg} >
                    <img src={item.img1} alt='img1' />
                    <img src={item.img2} alt='img2' />
                  </div>
                </div>

              )
            })
          }
        </div>
      </div>
    </div>
  )
}
