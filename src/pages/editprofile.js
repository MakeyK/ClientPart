import React, {useContext, useState}  from "react";
import {Card, Container, Form, Button, Col, ButtonGroup, ListGroup} from 'react-bootstrap'
import { LOGIN_ROUTE, REGISTRATION_ROUTE, EDITPROFILE_ROUTE, MAIN_ROUTE, FORGOTPASSWORD_ROUTE } from "../utils/consts";
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
    const navigate = useNavigate()
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [nickname, setNickname] = useState('')
    const [password,setPassword] = useState('')
    const [password_check,setPasswordCheck] = useState('')

    const forgotpassword = async() => {
        let forgotpassword = `forgotpassword`
        navigate(FORGOTPASSWORD_ROUTE)
    }

    const click = async () =>{
    
    console.log(email)
    try
    {
        if (isLogin)
        {
            const response = await login(email, password, password_check)
            console.log(response)
        }
        else
        {
            console.log(email)
            const response = await registration(email, password, password_check)
            console.log(response)
        }
        user.setUser()
        user.setIsAuth(true)
        navigate(MAIN_ROUTE)
    }
        catch(e)
        {
            alert(e)
        }
    }
    return (
        <Container
        className = 'd-flex justify-content-center align-items-center'
        style = {{width: 1402, height: 446, marginTop: 181}}>
        <Card style={{width: 1402, borderRadius: 36, height: 712, fontFamily:"Play", display:"inline-block", position:"relative", margin:"auto"}} className="p-5 #FFFAF4">
            <div> <p style={{fontFamily:"Play", color:"#A8A8A8", marginLeft:"58px"}}>Настройки</p>
            
            </div>
            <div class="navbar navbar-default navbar-fixed-top">
                
            <ul class="list-group"  style={{borderRadius: 24,marginLeft:"58px", border: "1px solid"}} >
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
            </ul><p style={{}}>
            <Avatar size={"197px"} round src="https://cybersport.metaratings.ru/storage/images/ae/34/ae3485265fec14436535f65ba0b5c08a.jpg"/></p>
            <p style={{paddingBottom: 100}}>
            <Button
                style={{borderRadius: 41, height:70, width:384}}
                variant={"outline-dark"}
                size="lg"
                            onClick={click}>
                       {isLogin ? '' : 'Изменить фото профиля'} 
                </Button></p>
                <p style={{position: "absolute", paddingLeft: 816, paddingBottom: 315}}>
                <Button
                style={{borderRadius: 41, height:70, width:384}}
                variant={"outline-dark"}
                size="lg"
                            onClick={forgotpassword}>
                       {isLogin ? '' : 'Изменить пароль'} 
                </Button>
                </p>
                <div style={{marginBottom:100}}> <p style={{fontFamily:"Play", color:"#A8A8A8", marginBottom:"9px", marginTop:"79px", marginLeft:"58px"}}>Ваше имя</p>
                <Form.Control
                style={{borderRadius: 70, height: 70, position:'relative',paddingRight: "15vw",marginLeft:"58px", border: "1px solid"}}
                className="mt-3"
                size="lg"
                placeholder = "Ваше имя"
                value = {nickname}
                onChange = { e => setNickname(e.target.value)}
                
                />

                <p style={{fontFamily:"Play", color:"#A8A8A8", marginBottom:"9px", marginTop:"38px", marginLeft:"58px"}}>Ваша почта</p>
                <Form.Control
                style={{borderRadius: 70, height: 70, paddingRight: "15vw", border: "1px solid",marginLeft:"58px"}}
                className="mt-3"
                size="lg"
                placeholder = "Ваша почта"
                value = {email}
                onChange = { e => setEmail(e.target.value)}
                type="email"
                /></div>

                <div style={{marginBottom:100}}> <p style={{fontFamily:"Play", color:"#A8A8A8", marginBottom:"9px", marginTop:"79px", marginLeft:"58px"}}>Ваши друзья</p>
                <ul class="list-group"  style={{borderRadius: 24,marginLeft:"58px", border: "1px solid", height: 231, width: 503}} >
                
                </ul>
                </div>
             {/*   <Button
                style={{borderRadius: 70, height:70, width:384}}
                variant={"outline-dark"}
                size="lg"
                            onClick={click}>
                       {isLogin ? '' : 'Изменить пароль'} 
                </Button>
    */}
            </div>
        </Card>
        </Container>
    );
});

export default EditProfile;