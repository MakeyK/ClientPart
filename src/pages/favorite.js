import React, {useContext, useState}  from "react";
import {Card, Container, Form, Button, Col, Nav, ListGroup} from 'react-bootstrap'
import { LOGIN_ROUTE, REGISTRATION_ROUTE, FORGOTPASSWORD_ROUTE } from "../utils/consts";
import Row from 'react-bootstrap/Row'
import { useLocation, NavLink, useNavigate } from "react-router-dom";
import { changePassword, check, login, registration } from "../http/userApi";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
// import Chelik from '../Files/Chelik.jpg'

const Auth = observer(() => {
    document.body.style.backgroundImage ="url(/cloud.png)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPositionY = "450px"
    document.body.style.backgroundColor="#D9D9D9"
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
                console.log(response)
                navigate(LOGIN_ROUTE)
        }
        catch(e)
        {
        alert(e)
        }
    }
    return (
        <div
        style = {{}}>
        <Card style={{ width: 428, height: 856, marginTop: 110, fontFamily:"Play", fontWeight: 'bold', backgroundColor: '#FFFFFF4D'}}>
                {/* <img src={Chelik} style={{}}/> */}
                <Button
                            size={"lg"}
                            variant={"outline-link"}
                            onClick={() => {user.setIsAuth(true)}}> <div> <p class="text-#363232" style={{fontWeight:'bold', borderRadius: 37,border: "1px solid"}}> МОЁ ХРАНИЛИЩЕ</p></div>
                </Button>
              
        <Card style={{width: 1380, borderRadius: 36, height: 760, fontFamily:"Play", marginTop: 50, marginLeft: 457, position:'absolute', backgroundColor: '#FFFFFF4D'}}>
                
        </Card>
    </Card>
        </div>
    );
});

export default Auth;