import React, {useContext, useState}  from "react";
import {Card, Container, Form, Button, Col, Nav} from 'react-bootstrap'
import { LOGIN_ROUTE, REGISTRATION_ROUTE, FORGOTPASSWORD_ROUTE } from "../utils/consts";
import Row from 'react-bootstrap/Row'
import { useLocation, NavLink, useNavigate } from "react-router-dom";
import { changePassword, check, login, registration } from "../http/userApi";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import NavBar from "../components/NavBar";

const ForgotPassword = observer(() => {
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
    const click = async () =>
    {
        try
        {
                const response = await changePassword(email, old_password, new_password,  new_password_check)
                navigate(LOGIN_ROUTE)
        }
        catch(e)
        {
        alert(e)
        }
    }
    return (
        <Container
        className = 'd-flex justify-content-center align-items-center '
        style = {{width: 925, height: 646, marginTop: 178}}>
        <Card style={{width: 925, borderRadius: 80, height: 646, fontFamily:"Play"}} className="p-5 #FFFAF4">
                <p style={{fontSize:"36px", height: 43, display:"inline-block", position:"relative", textAlign:'center'}}>{isLogin ? '' : 'Изменить пароль'}</p>
            <Form className="d-flex flex-column" style={{position:'relative'}}>
            <Form.Control
                style={{borderRadius: 70, height: 71, border: "1px solid"}}
                className="mt-3"
                size="lg"
                placeholder = "Введите ваш email..."
                value = {email}
                onChange = { e => setEmail(e.target.value)}
                type="email"
                />

                <Form.Control
                style={{borderRadius: 70, height: 71, border: "1px solid"}}
                className="mt-3"
                size="lg"
                placeholder = "Введите ваш старый пароль..."
                value = {old_password}
                onChange = { e => setOldPassword(e.target.value)}
                type="password"
                />
                
                <Form.Control
                style={{borderRadius: 70, height: 71, border: "1px solid"}}
                className="mt-3"
                size="lg"
                placeholder = "Введите ваш новый пароль..."
                value = {new_password}
                onChange = { e => setNewPassword(e.target.value)}
                type="password"
                />

                <Form.Control
                style={{borderRadius: 70, height: 71, border: "1px solid"}}
                className="mt-3"
                size="lg"
                placeholder = "Подтвердите новый пароль..."
                value = {new_password_check}
                onChange = { e => setNewPasswordCheck(e.target.value)}
                type="password"
                />

                <Row>
                    <Col className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        <div><p style={{fontSize:"1.25rem", paddingTop: 15}}> <NavLink  to={LOGIN_ROUTE}> Вернуться к авторизации </NavLink></p></div>
                <Button
                style={{borderRadius: 41, height:71, width:240, }}
                variant={"outline-dark"}
                size="lg"
                            onClick={click}>
                       {isLogin ? '' : 'Изменить пароль'} 
                </Button>
                </Col>
                </Row> 
            </Form>
        </Card>
        <NavBar/>
        </Container>
    );
});

export default ForgotPassword;