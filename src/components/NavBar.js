import React, {useContext} from 'react';
import {Context} from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import {RASP_ROUTE, LOGIN_ROUTE, RASPID_ROUTE, MAIN_ROUTE, RASPDATA_ROUTE, DATA_ROUTE} from "../utils/consts";
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
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color:'white'}} to={MAIN_ROUTE}>Школа №55</NavLink>
                <Button variant={"outline-light"} onClick={() => user.setIsAuth(true)}> <div> <NavLink to={RASP_ROUTE}> 
                <p class="text-white"> Расписание</p></NavLink> </div></Button>
                <Button variant={"outline-light"} onClick={() => user.setIsAuth(true)}> <div> <NavLink to={RASPID_ROUTE}> 
                <p class="text-white"> Расписание по ID_Пользователя </p></NavLink></div></Button>
               
                {user.getisAuth() ?
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button
                            variant={"outline-light"}
                            onClick={() => {user.setIsAuth(true)}}> <div> <NavLink to={DATA_ROUTE}> <p class="text-white">Админ панель </p></NavLink></div>
                        </Button>
                        <Button
                            variant={"outline-light"}
                            onClick={() => logOut()}
                            className="ml-2"
                        >
                            Выйти
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={"outline-light"} onClick={() => user.setIsAuth(true)}><div> <NavLink to={LOGIN_ROUTE}>
                            <p class="text-white">Авторизация</p></NavLink></div></Button>
                    </Nav>
                }
            </Container>
        </Navbar>

    );
});

export default NavBar;