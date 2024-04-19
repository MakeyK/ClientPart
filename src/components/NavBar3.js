import React, {useContext, useState, useEffect}  from "react";
import {Card, Form, Col, Nav, ListGroup} from 'react-bootstrap'
import {Context} from "../index";
import { useLocation } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import {NavLink} from "react-router-dom";
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import {EDITPROFILE_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import {useNavigate } from 'react-router-dom';
import Avatar from 'react-avatar';
import Ava from '../Files/ava.jpg'


const NavBar3 = observer(() => {
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
    const editprofile = async() => {
        let editprofile = `editprofile`
        navigate(EDITPROFILE_ROUTE)
    }

    return (
        <Navbar style={{position: 'fixed'}} bg="black" variant="black" fixed='top'>
        <Container>
        <Nav style={{color: 'white', width: 190, fontSize: 24, fontFamily:"Righteous"}}>
                <Button
                    style={{width: 192}}
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
        <Form inline>
            <Row>
            <Col style={{ width: 615}} xs="auto" >
                <Form.Control
                    variant={'outline-dark'}    
                    style={{ borderRadius: '28px'}}
                    type="text"
                    placeholder="Поиск"
                    
                />
            </Col>
            {/* <Col xs="auto">
                <Button type="submit">  БИТ </Button>
            </Col> */}
            </Row>
      </Form>
                <NavLink style={{color:'white'}} to={MAIN_ROUTE}></NavLink>
                        <p style={{color:'white', marginTop: 10, marginLeft: 450}}>
                            <Button
                            style={{borderRadius: 66}}
                            onClick={editprofile}
                            variant={'outline-light'}
                            >
                        <Avatar size={"75px"}  round src={Ava}/>
                        </Button></p>
                {user.getisAuth() ?
                    <Nav style={{color: 'white', marginLeft: 24,borderRadius: 41, border: '3px solid', width: 190, fontSize: 24, fontFamily:"Rubik Mono One",}}>
                        <Button
                            style={{ borderRadius: 41}}
                            size={"lg"}
                            variant={"outline-light"}
                            onClick={mainn}
                            // onClick={(mainn) => {user.setIsAuth(true)}}
                            > 
                            <div> <p class="text-white"
                            style={{width:153, letterSpacing: 9, marginTop: 10}}> Выйти </p></div>
                        </Button>
                    </Nav>
                    :
                    <Nav style={{color: 'white'}}>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar3;