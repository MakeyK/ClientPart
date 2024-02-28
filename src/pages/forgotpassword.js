import React, {useContext, useState}  from "react";
import {Card, Container, Form, Button, Col} from 'react-bootstrap'
import { LOGIN_ROUTE, REGISTRATION_ROUTE, FORGOTPASSWORD_ROUTE } from "../utils/consts";
import Row from 'react-bootstrap/Row'
import { useLocation, NavLink, useNavigate } from "react-router-dom";
import { login, registration } from "../http/userApi";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Auth = observer(() => {
    document.body.style.backgroundImage ="url(/cloud.png)";
    document.body.style.backgroundColor="#ebebeb"
    const {user} = useContext(Context)
    const navigate =useNavigate()
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password,setPassword] = useState('')
    const click = async () =>{
        try{
  
        if (isLogin){
            const response = await login(email, password)
            console.log(response)}
        else{  
            const response = await registration(email, password)
            console.log(response)
    }
    user.setUser()
    user.setIsAuth(true)
    navigate(LOGIN_ROUTE)} 
    catch(e){
        alert(e)
    }

    }
    return (
        <Container
        className = 'd-flex justify-content-center align-items-center '
        style = {{height: window.innerHeight - 54}}>
        <Card style={{width: 900, borderRadius: 80, height: 520, fontFamily:"Play"}} className="p-5 #FFFAF4">
            <h2 className="m-auto" style={{color:'black', height: 300, width: 239, position:'relative'}}>{isLogin ? 'Авторизация' : 'Забыл пароль'}</h2>
            <Form className="d-flex flex-column" style={{position:'relative', paddingBottom:'600px'}}>
                
                 <Row>
                    <Col className="d-flex justify-content-between mt-3 pl-3 pr-3">
                 <Button
                 style={{borderRadius: 41, height:71, width:240}}
                 variant={"outline-dark"}
                 size="lg"
                            onClick={click}>
                       {isLogin ? '' : 'Изменить пароль'} 
                 </Button>
                 </Col>
                 </Row>
                 
            </Form>
        </Card>
        </Container>
    );
});

export default Auth;