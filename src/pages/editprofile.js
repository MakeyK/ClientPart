import React, {useContext, useState}  from "react";
import {Card, Container, Form, Button, Col} from 'react-bootstrap'
import { LOGIN_ROUTE, REGISTRATION_ROUTE, EDITPROFILE_ROUTE } from "../utils/consts";
import Row from 'react-bootstrap/Row'
import { useLocation, NavLink, useNavigate } from "react-router-dom";
import { login, registration } from "../http/userApi";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import Avatar from 'react-avatar';



const EditProfile = observer(() => {
    document.body.style.backgroundImage ="url(/cloud.png)";
    document.body.style.backgroundColor="#ebebeb"
    const {user} = useContext(Context)
    const navigate =useNavigate()
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [password_check,setPasswordCheck] = useState('')
    const click = async () =>{
    
    console.log(email)
    try{
    if (isLogin){
    const response = await login(email, password, password_check)
    console.log(response)}
    else{
    console.log(email)
    const response = await registration(email, password, password_check)
    console.log(response)
    }
    user.setUser()
    user.setIsAuth(true)
    navigate(LOGIN_ROUTE)}
    catch(e)
    {
        alert(e)
    }
    
    }
    return (
        <Container
        className = 'd-flex justify-content-center align-items-center'
        style = {{height: window.innerHeight - 54}}>
        <Card style={{width: 1402, borderRadius: 36, height: 812, fontFamily:"Play"}} className="p-5 #FFFAF4">
            <div> <p style={{fontFamily:"Play", color:"#A8A8A8"}}>Настройки</p></div>
            <div class="navbar navbar-default navbar-fixed-top">
            <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center" ><p style={{fontFamily:"Play"}}>
            Безопасность</p>
            <span class="badge badge-primary badge-pill"></span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center"><p style={{fontFamily:"Play"}}>
            Конфиденциальность информации</p>
            <span class="badge badge-primary badge-pill"></span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center"><p style={{fontFamily:"Play"}}>
            Чёрный список</p>
            <span class="badge badge-primary badge-pill"></span>
            </li>
            </ul>
            </div>
            <div><p style={{padding:"0px 428px"}}>
            <Avatar name="Профиль" round={true} sx={{width: 197, height: 183}}/></p>
            </div>
            <Form className="d-flex flex-column" style={{position:'relative', paddingBottom:'100px'}}>
                <Row>
                    <Col className="d-flex justify-content-between mt-3 pl-3 pr-3">
                 </Col>
                 </Row>
                 
            </Form>
        </Card>
        </Container>
    );
});

export default EditProfile;