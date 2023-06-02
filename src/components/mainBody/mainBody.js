import React, { useEffect } from 'react'
import Deals from './deals'
import { useDispatch, useSelector } from 'react-redux'
import TrendingBooks from './trendingBooks';
import BooksByLanguage from './booksByLanguage';
import MusicVideo from './musicVideo';
import Toys from './toys';
import img from '../../assests/images/Group 5336.png'
import img1 from '../../assests/images/Group 5461@2x.jpg'
import { getDeals, getLanguageBook, getMusicVideo, getToys } from '../../store/actions/homeActions';


export default function MainBody() {

  const { deals, languageBook, music, toys } = useSelector((state) => state.body)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getDeals())
    // dispatch(getBooks())
    dispatch(getLanguageBook())
    dispatch(getMusicVideo())
    dispatch(getToys())
  }, [dispatch])

  return (
    <div>
      <div className='carousel'>
        <img src={img1} alt='' style={{ width: "100%"}} />
      </div>
      <Deals deals={deals} />
      <TrendingBooks />
      <BooksByLanguage languageBook={languageBook} />
      <MusicVideo music={music} />
      <Toys toys={toys} />
      <div style={{ padding: '30px 0px', marginBottom: '20px' }}>
        <img src={img} alt='banner' style={{ width: "100%" }} />
      </div>
    </div>
  )
}
