import React, {useContext} from 'react';
import {Context} from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import {useNavigate } from 'react-router-dom';

const NavBar = observer(() => {
    const {user} = useContext(Context)
  //  console.log(user)
 //   const history = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
        <Navbar style={{position: 'fixed'}} bg="black" variant="black" fixed='top'>
            <Container>
                <NavLink style={{color:'white'}} to={MAIN_ROUTE}></NavLink>
                {user.getisAuth() ?
                
                    <Nav className="ml-auto" style={{color: 'white', fontFamily:"Righteous", paddingRight:10000, letterSpacing: "20%"}}>
                        <Button
                        
                            size={"lg"}
                            variant={"outline-link"}
                            onClick={() => {user.setIsAuth(true)}}> <div> <p class="text-white"> Cloud <br></br> Warehouse</p></div>
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

export default NavBar;