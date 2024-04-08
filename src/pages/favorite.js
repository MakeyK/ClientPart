import React, {useContext, useState}  from "react";
import {Card, Container, Form, Button, Col, Nav, ListGroup} from 'react-bootstrap'
import { LOGIN_ROUTE, REGISTRATION_ROUTE, FORGOTPASSWORD_ROUTE, RECENT_ROUTE, BASKET_ROUTE, FAVORITE_ROUTE, MYSTORAGE_ROUTE } from "../utils/consts";
// import Row from 'react-bootstrap/Row'
import { useLocation, NavLink, useNavigate } from "react-router-dom";
import { changePassword, check, login, registration } from "../http/userApi";
import {observer} from "mobx-react-lite";
// import Image from 'react-bootstrap/Image';
import {Context} from "../index";
import Clock from '../Files/Clock.png'
import Korzina from '../Files/Korzina.png'
import Star from '../Files/Star.png'
import Chelik from '../Files/Chelik.png'

const Auth = observer(() => {
    document.body.style.backgroundImage ="url(/cloud.png)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPositionY = "450px"
    document.body.style.backgroundColor="#D0D0D0"
    const {user} = useContext(Context)
    const navigate =useNavigate()
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [old_password, setOldPassword] = useState('')
    const [new_password,setNewPassword] = useState('')
    const [new_password_check,setNewPasswordCheck] = useState('')

    const recent = async() => {
        let recent = `recent`
        navigate(RECENT_ROUTE)
    }
    const basket = async() => {
        let basket = `basket`
        navigate(BASKET_ROUTE)
    }
    const favorite = async() => {
        let favorite = `favorite`
        navigate(FAVORITE_ROUTE)
    }
    const mystorage = async() => {
        let mystorage = `mystorage`
        navigate(MYSTORAGE_ROUTE)
    }
    const click = async () =>
    {
        try
        {
                const response = await changePassword(email, old_password, new_password,  new_password_check)
                console.log(response)
                navigate(LOGIN_ROUTE)
        }
        catch(e)
        {
        alert(e)
        }
    }
    return (
        <div
        style = {{}}>
        <Card style={{ width: 428, height: 856, marginTop: 110, fontFamily:"Play", fontWeight: 'bold', backgroundColor: '#DBDBDB'}}>
        <p style={{paddingBottom:50, paddingLeft: 50, paddingTop: 48}}>
                <Button
                            size={"lg"}
                            variant={"outline-dark-link"}
                            style={{fontWeight:'bold', borderRadius:37}}
                            onClick={mystorage}>
                                <img src={Chelik} style={{width: 67}}/>
                            {isLogin ? '' : 'МОЁ ХРАНИЛИЩЕ'}
                </Button></p>
                <p style={{paddingBottom:50, paddingLeft: 50}}>
                <Button

                            size={"lg"}
                            style={{fontWeight:'bold', borderRadius:37}}
                            variant={"outline-dark-link"}
                            onClick={recent}>
                                <img src={Clock} style={{width: 67}}/>
                            {isLogin ? '' : 'НЕДАВНИЕ'}
                </Button></p>
                <p style={{paddingBottom:50, paddingLeft: 50}}>
                <Button
                            size={"lg"}
                            variant={"outline-dark"}
                            style={{fontWeight:'bold', borderRadius:37}}
                            onClick={favorite}>
                                <img src={Star} style={{width: 67}}/>
                            {isLogin ? '' : 'ИЗБРАННОЕ'}
                </Button></p>
                <p style={{paddingBottom:50, paddingLeft: 50}}>
                <Button
                            size={"lg"}
                            style={{fontWeight:'bold', borderRadius:37}}
                            variant={"outline-link-dark"}
                            onClick={basket}>
                                <img src={Korzina} style={{width: 67}}/>
                            {isLogin ? '' : 'КОРЗИНА'}
                </Button></p>
                <p style={{paddingLeft: 50, position:'relative'}}>
                <Button
                            size={"lg"}
                            style={{fontWeight:'bold', borderRadius:37, width: 332}}
                            variant={"outline-dark"}
                            onClick={basket}>
                            {isLogin ? '' : 'Увеличить объём хранилища'}
                </Button></p>
        <Card style={{width: 1380, borderRadius: 36, height: 760, fontFamily:"Play", marginTop: 50, marginLeft: 457, position:'absolute', backgroundColor: '#DBDBDB'}}>
                
        </Card>
    </Card>
        </div>
    );
});

export default Auth;