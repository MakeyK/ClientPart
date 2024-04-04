import React, { useContext } from "react"; 
import {Routes, Route, Navigate} from 'react-router-dom'  
import { authRoutes, publicRoutes } from "../routes"; 
import { EDITPROFILE_ROUTE, FORGOTPASSWORD_ROUTE, LOGIN_ROUTE, MYSTORAGE_ROUTE, REGISTRATION_ROUTE, FORGOTPASSWORD_ROUTE2, RECENT_ROUTE, BASKET_ROUTE, FAVORITE_ROUTE} from "../utils/consts"; 
import { Context } from "../index"; 
let isAuth = true 
const AppRouter = () => { 
    const {user} = useContext(Context) 
    console.log(user) 
    return( 
    <Routes> 
        {isAuth && authRoutes.map(({path, Component}) => 
            <Route key = {path} path ={path} element = {<Component/>} exact/> 
    )} 
        {publicRoutes.map(({path, Component}) => 
        <Route key = {path} path ={path} element = {<Component/>} exact/> 
    )} 
        <Route path="*" element = {<Navigate to={REGISTRATION_ROUTE} />} replace />  
    <Route>
        {publicRoutes.map(({path, Component}) =>
        <Route  path="*" element = {<Navigate> to={FORGOTPASSWORD_ROUTE}</Navigate>} replace/>
        
    )} 
    </Route>
    <Route>
        {publicRoutes.map(({path, Component}) =>
        <Route  path="*" element = {<Navigate> to={EDITPROFILE_ROUTE}</Navigate>} replace/>
        
    )} 
    </Route>
    <Route>
        {publicRoutes.map(({path, Component}) =>
        <Route  path="*" element = {<Navigate> to={MYSTORAGE_ROUTE}</Navigate>} replace/>
        
    )} 
        <Route>
        {publicRoutes.map(({path, Component}) =>
        <Route  path="*" element = {<Navigate> to={FORGOTPASSWORD_ROUTE2}</Navigate>} replace/>
        
    )}
    </Route>
    <Route>
        {publicRoutes.map(({path, Component}) =>
        <Route  path="*" element = {<Navigate> to={RECENT_ROUTE}</Navigate>} replace/>
        
    )}   
    </Route>
    <Route>
        {publicRoutes.map(({path, Component}) =>
        <Route  path="*" element = {<Navigate> to={BASKET_ROUTE}</Navigate>} replace/>
        
    )} 
    </Route>
    <Route>
        {publicRoutes.map(({path, Component}) =>
        <Route  path="*" element = {<Navigate> to={FAVORITE_ROUTE}</Navigate>} replace/>
        
    )} 
    </Route>
    </Route>
    </Routes> 
    ) 
};
export default AppRouter;