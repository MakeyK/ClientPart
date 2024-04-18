import React, {useContext, useState}  from "react";
import {Card, Container, Form, Button, Col, Nav} from 'react-bootstrap'
import { LOGIN_ROUTE, REGISTRATION_ROUTE, FORGOTPASSWORD_ROUTE } from "../utils/consts";
import Row from 'react-bootstrap/Row'
import { useLocation, NavLink, useNavigate } from "react-router-dom";
import { changePassword, check, login, registration } from "../http/userApi";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const MyWareHouse = observer(() => {
    document.body.style.backgroundImage ="url(/cloud.png)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPositionY = "450px"
    document.body.style.backgroundColor="#D0D0D0"
    const {user} = useContext(Context)
    const navigate =useNavigate()
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')

    const click = async () =>
    {
        try
        {
                const response = await changePassword(email)
                console.log(response)
                navigate(LOGIN_ROUTE)
        }
        catch(e)
        {
        alert(e)
        }
    }
    return (
        <Container
        className = 'd-flex justify-content-center'
        style = {{width: 1402, height: 646, marginTop: 152, paddingLeft: 457}}>
        <Card style={{width: 925, height: 646, fontFamily:"Play", position: 'absolute'}} className="p-5 #FFFFFF4D">
                <p style={{fontSize:"36px", height: 43, display:"inline-block", position:"relative", margin:"auto"}}>{isLogin ? '' : ''}</p>

                <Row>
                    <Col className="d-flex justify-content-between mt-3 pl-3 pr-3">    
                </Col>
                </Row> 
        </Card>

        <Card style={{width: 925, borderRadius: 36, height: 646, fontFamily:"Play"}} className="p-5 #FFFFFF4D">
                <p style={{fontSize:"36px", height: 43, display:"inline-block", position:"relative", margin:"auto"}}>{isLogin ? '' : ''}</p>

                <Row>
                    <Col className="d-flex justify-content-between mt-3 pl-3 pr-3">    
                </Col>
                </Row> 
        </Card>
        </Container>
    );
});

export default MyWareHouse;