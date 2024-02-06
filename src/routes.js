import Auth from "./pages/auth"
import Registration from "./pages/registration"
import Main from "./pages/mainpage"
//import Admin from "./pages/admin"
import {LOGIN_ROUTE, REGISTRATION_ROUTE, MAIN_ROUTE} from "./utils/consts"


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
    }
]