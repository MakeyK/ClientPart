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

const NavBar2 = observer(() => {
    const {user} = useContext(Context)
    const navigate =useNavigate()
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }
    const mainn = async() => {
        let mainn = `main`
        navigate(MAIN_ROUTE)
    }
    const registration = async() => {
      let registration = `registration`
      navigate(REGISTRATION_ROUTE)
  }

    return (
        <Navbar style={{position: 'fixed'}} bg="black" variant="black" fixed='top'>
            <Container>
                <NavLink style={{color:'white'}} to={MAIN_ROUTE}></NavLink>
                {user.getisAuth() ?
                
                    <Nav className="ml-auto" style={{ borderRadius: 41, border: '3px solid',color: 'white', width: 394, fontSize: 24, fontFamily:"Rubik Mono One", paddingRight:128}}>
                       
                        <Button
                            style={{ borderRadius: 41}}
                            size={"lg"}
                            variant={"outline-light"}
                            onClick={registration}
                            // onClick={(mainn) => {user.setIsAuth(true)}}
                            > 
                            <div> <p class="text-white"
                            style={{width:355, letterSpacing:5, marginTop: 10}}> Авторизация </p></div>
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={"outline-light"} onClick={() => user.setIsAuth(true)}><div> <NavLink to={LOGIN_ROUTE}>
                            <p>Авторизация</p></NavLink></div></Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar2;