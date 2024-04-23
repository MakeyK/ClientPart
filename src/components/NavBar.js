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


const NavBar = observer(() => {
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

    return (
        <Navbar style={{position: 'fixed'}} bg="black" variant="black" fixed='top'>
            <Container>
                <NavLink style={{color:'white'}} to={MAIN_ROUTE}></NavLink>
                {user.getisAuth() ?
                
                    <Nav className="ml-auto" style={{color: 'white', fontFamily:"Righteous", paddingRight:10000}}>
                        <Button
                            
                            size={"lg"}
                            variant={"outline-link"}
                            onClick={mainn}
                            // onClick={(mainn) => {user.setIsAuth(true)}}
                            > 
                            <div> <p class="text-white"
                            style={{width:160 ,letterSpacing:5}}> Cloud 
                            <br></br> Warehouse </p></div>
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: 'white'}}>
                       
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;