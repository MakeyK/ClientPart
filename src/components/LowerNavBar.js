import React, {useContext, useState, useEffect}  from "react";
import {Card, Form, Col, Nav, ListGroup} from 'react-bootstrap'
import {Context} from "../index";
import { useLocation } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import {useNavigate } from 'react-router-dom';
import Discord from '../Files/discord.png'
import Telegramm from '../Files/telegramm.png'
const LowerNavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate =useNavigate()
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }
    

    return (
        <Navbar style={{position: 'fixed', width: window.innerWidth, height: 85}} bg="white" variant="black" fixed='bottom'>
            <img src={Discord} style={{width: 54, marginLeft: 72}}/>
            <p style={{letterSpacing: 3, fontFamily: 'Play', fontSize: '24px', marginLeft: 14, marginTop: 10}}>Cloud Warehouse speak</p>

            <hr
            style={{width: 43, marginLeft: 72, marginTop: 18, transform:' rotateZ(90deg)'}}
            className="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-30 dark:opacity-50"/>

        <img src={Telegramm} style={{width: 54, marginLeft: 72}}/>
        <p style={{letterSpacing: 3, fontFamily: 'Play', fontSize: '24px', marginLeft: 14, marginTop: 10}}>t.me/cloud_warehouse_info</p>
        <hr
        style={{width: 43,marginLeft: 72, marginTop: 18, transform:' rotateZ(90deg)'}}
        className="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-30 dark:opacity-50"/>

        <p style={{fontFamily: 'Play', fontSize: '24px', marginLeft: 72}}>
        <NavLink to={LOGIN_ROUTE} style={{color: 'black'}}>Политика конфиденциальности</NavLink>
        </p>
        </Navbar>
    );
});

export default LowerNavBar;