const URL = `${process.env.REACT_APP_API_BASE_URL}`

const home = {
    navApi: `${URL}/header`,
    topNavApi: `${URL}/countries`,
    aboutus: `${URL}/aboutus`,
    service: `${URL}/service`,
    deals: `${URL}/deals`,
    books: `${URL}/books`,
    languageBooks: `${URL}/languageBooks`,
    music:`${URL}/music`,
    banner: `${URL}/banner`,
    toys:`${URL}/toys`
}

const productApi = {
    magazines: `${URL}/categories`,
    allproducts: `${URL}/all-products`,
    productByID: (id) => `${URL}/all-products/${id}`
}

const productRoute = {
    magazineListing: '/magazines',
    productDetail: '/product/:id',
}

// Cart Api path

const cartApi={
    getCartApi: `${URL}/cart`,
    deleteCartItem: (id) => `${URL}/cart/${id}`,
    cartEditApi: (id) => `${URL}/cart/${id}`,
}

const cartRoutes = {
    cart : '/cart'
}

const checkOutRoutes = {
    checkOut : '/checkout'
}

// WishList api Path

const wishListApi = {
    getWishlist: `${URL}/wishlist`,
    deleteWishlistItem: (id) => `${URL}/wishlist/${id}`,
}

const wishListRoutes = {
    wishlist: '/wishlist'
}


export const path = {

    root: '/',
    // header path
    ...home,

    // product api
    ...productApi,

    // product routes
    ...productRoute,

    // cart Api
    ...cartApi,

    // cart routes
    ...cartRoutes,

    // checkout route
    ...checkOutRoutes,

    // wishlist route
    ...wishListRoutes,

    // wishlist api routes
    ...wishListApi
}