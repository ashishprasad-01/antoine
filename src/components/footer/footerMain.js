import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAboutus, getHeaderNav, getService } from '../../store/actions/headerNavAction';
import FooterTop from './footerTop'
import FooterMiddle from './footerMiddle';
import MobileFooter from './mobileFooter';

export default function FooterMain() {


  const { navCategories, footer, aboutus, service } = useSelector((state) => state.navigation)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getHeaderNav())
    dispatch(getAboutus())
    dispatch(getService())
  }, [dispatch])


  return (
    <footer>
      <FooterTop footer={footer} />
      <FooterMiddle navCategories={navCategories} aboutus={aboutus} service={service} />

      <MobileFooter navCategories={navCategories} aboutus={aboutus} service={service}/>
    </footer>
  )
}
