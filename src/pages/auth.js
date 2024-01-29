import React, {useContext, useState}  from "react";
import {Card, Container, Form, Button, Col} from 'react-bootstrap'
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";
import Row from 'react-bootstrap/Row'
import { useLocation, NavLink, useNavigate } from "react-router-dom";
import { login, registration } from "../http/userAPI";
import {observer} from "mobx-react-lite";
import { RASP_ROUTE } from "../utils/consts";
import {Context} from "../index"




const Auth = observer(() => {
    document.body.style.backgroundImage ="url('https://png.pngtree.com/back_origin_pic/03/90/78/4a4fd3e8a537931c6fc51b6112ae5105.jpg')";
    const {user} = useContext(Context)
     const navigate =useNavigate()
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [userLogin, setLogin] = useState('')
    const [paasword,setPassword] = useState('')
    const click = async () =>{
        try{
  
        if (isLogin){
            const response = await login(userLogin, paasword)
            console.log(response)}
        else{  
            const response = await registration(userLogin, paasword)
            console.log(response)
    }
    user.setUser()
    user.setIsAuth(true)
    navigate(RASP_ROUTE)} 
    catch(e){
        alert(e)
    }

    }
    return (
        <Container
        className = 'd-flex justify-content-center align-items-center '
        style = {{height: window.innerHeight - 54}}>
        <Card style={{width: 600}} className="p-5 bg-info">
            <h2 className="m-auto" style={{color:'white'}}>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
            <Form className="d-flex flex-column">
                <Form.Control
                className="mt-3"
                placeholder = "Введите логин"
                value = {userLogin}
                onChange = { e => setLogin(e.target.value)}/>
                 <Form.Control 
                 className="mt-3"
                 placeholder = "Введите пароль"
                 value = {paasword}
                onChange = { e => setPassword(e.target.value)}
                type="password"
                 />

                 <Row >
                    <Col className="d-flex justify-content-between mt-3 pl-3 pr-3">
                {isLogin? 
                <div> <p class="text-white"> Нет аккаунта? </p> <NavLink to={REGISTRATION_ROUTE}> <p class="text-black"> Регистрация </p> </NavLink> </div>
                :
                <div> <NavLink to={LOGIN_ROUTE}> Войти </NavLink> </div>}
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

export default Auth;