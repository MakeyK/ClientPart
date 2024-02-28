import React, { useContext } from "react"; 
import {Routes, Route, Navigate} from 'react-router-dom'  
import { authRoutes, publicRoutes } from "../routes"; 
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts"; 
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
    </Routes> 
    ) 
};
export default AppRouter;