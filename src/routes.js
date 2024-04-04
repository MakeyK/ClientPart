import Auth from "./pages/auth"
import Registration from "./pages/registration"
import Main from "./pages/mainpage"
import ForgotPassword from "./pages/forgotpassword"
import EditProfile from "./pages/editprofile"
import Basket from "./pages/basket"
import Favorite from "./pages/favorite"
import MyStorage from "./pages/mystorage"
import ForgotPassword2 from "./pages/forgotpassword2"
import Recent from "./pages/recent"
//import Admin from "./pages/admin"
import {LOGIN_ROUTE, REGISTRATION_ROUTE, MAIN_ROUTE, FORGOTPASSWORD_ROUTE, EDITPROFILE_ROUTE, FORGOTPASSWORD_ROUTE2, MYSTORAGE_ROUTE, RECENT_ROUTE, BASKET_ROUTE, FAVORITE_ROUTE } from "./utils/consts"

export const authRoutes = [
   
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    /*{
        path: ADMIN_ROUTE,
        Component: Admin
    },*/
    {
        path: REGISTRATION_ROUTE,
        Component: Registration
    },
    {
        path: FORGOTPASSWORD_ROUTE,
        Component: ForgotPassword
    },
    {
        path: EDITPROFILE_ROUTE,
        Component: EditProfile
    },
    {
        path: FORGOTPASSWORD_ROUTE2,
        Component: ForgotPassword2
    },
    {
        path: MYSTORAGE_ROUTE,
        Component: MyStorage
    },
    {
        path: RECENT_ROUTE,
        Component: Recent
    },
    {
        path: FAVORITE_ROUTE,
        Component: Favorite
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    }
]