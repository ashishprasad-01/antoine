import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HeaderMain from "../components/header/headerMain";
import FooterMain from "../components/footer/footerMain";
import MainBody from "../components/mainBody/mainBody";
import { path } from "../constants/path";
import Magazines from "../components/productPage/magazinesListing";
import ProductDetail from "../components/productPage/productDetail";
import Cart from "../components/cart/cart";
import Checkout from "../components/checkout/checkout";
import ErrorPage from "../components/error/errorpage";
import Wishlist from "../components/wishlist/wishlist";


const routes = () => {
    return (
        <>
            <Router>
                <HeaderMain />
                <Routes>
                    <Route path={path.root} element={<MainBody />}></Route>
                    <Route path={path.magazineListing} element={<Magazines/>}></Route>
                    <Route path={path.productDetail} element={<ProductDetail/>}></Route>
                    <Route path={path.cart} element={<Cart/>}></Route>
                    <Route path={path.checkOut} element={<Checkout/>}></Route>
                    <Route path={path.wishlist} element={<Wishlist/>}></Route>
                    <Route path='/*' element={<ErrorPage/>}></Route>
                </Routes>
                <FooterMain />
            </Router>
        </>
    )
}

export default routes