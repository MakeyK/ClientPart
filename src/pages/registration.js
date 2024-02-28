import React, {useContext, useState}  from "react";
import {Card, Container, Form, Button, Col} from 'react-bootstrap'
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";
import Row from 'react-bootstrap/Row'
import { useLocation, NavLink, useNavigate } from "react-router-dom";
import { login, registration } from "../http/userApi";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Registration = observer(() => {
    document.body.style.backgroundColor ="#D9D9D9";
    const {user} = useContext(Context)
    const navigate =useNavigate()
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [password_check,setPasswordCheck] = useState('')
    const click = async () =>{
        try{
        if (isLogin){
            const response = await login(email, password, password_check)
            console.log(response)}
        else{  
            const response = await registration(email, password, password_check)
            console.log(response)
    }
    user.setUser()
    user.setIsAuth(true)
    user.setPasswordCheck(true)
    navigate(LOGIN_ROUTE)} 
    catch(e){
        alert(e)
    }

    }
    return (
        <Container
        className = 'd-flex justify-content-center align-items-center'
        style = {{height: window.innerHeight - 54}}>
        <Card style={{width: 900, borderRadius: 80, height: 520}} className="p-5 #FFFAF4">
            <h2 className="m-auto" style={{color:'black'}}>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
            <Form className="d-flex flex-column">
                <Form.Control
                className="mt-3"
                placeholder = "Введите ваш email..."
                value = {email}
                onChange = { e => setEmail(e.target.value)}/>
                
                
                <Form.Control
                className="mt-3"
                placeholder = "Введите ваш пароль..."
                value = {password}
                onChange = { e => setPassword(e.target.value)}/>

                 <Form.Control 
                 className="mt-3"
                 placeholder = "Введите ваш пароль ещё раз..."
                 value = {password_check}
                onChange = { e => setPasswordCheck(e.target.value)}
                type="password"
                 />

                 <Row>
                    <Col className="d-flex justify-content-between mt-3 pl-3 pr-3">
                {isLogin? 
                <div> <NavLink to={REGISTRATION_ROUTE}> Регистрация </NavLink> </div>
                :
                <div> Есть аккаунт? <NavLink to={LOGIN_ROUTE}> <p class="text-001AFF"> Войти </p> </NavLink> </div>}
                 <Button
                 variant={"outline-success"}
                            onClick={click}>
                       {isLogin ? 'Войти' : 'Регистрация'} 
                 </Button>
                 </Col>
                 </Row>
                 
            </Form>
        </Card>
        </Container>
    );
});

export default Registration;