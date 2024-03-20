import React, {useContext, useState}  from "react";
import {Card, Container, Form, Button, Col, Nav, ListGroup} from 'react-bootstrap'
import { LOGIN_ROUTE, REGISTRATION_ROUTE, FORGOTPASSWORD_ROUTE } from "../utils/consts";
import Row from 'react-bootstrap/Row'
import { useLocation, NavLink, useNavigate } from "react-router-dom";
import { changePassword, check, login, registration } from "../http/userApi";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import NavBar2 from "../components/NavBar2"

const Auth = observer(() => {
    document.body.style.backgroundImage ="url(/cloud.png)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPositionY = "450px"
    document.body.style.backgroundColor="#ebebeb"
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
        <Container
        className = 'justify-content-center align-items-center'
        style = {{}}>
        <Card style={{ width: 428, height: 830, marginTop: 110}}>
        <ListGroup variant="flush">
            <ListGroup.Item>
            
                <Button
                            size={"lg"}
                            variant={"outline-link"}
                            onClick={() => {user.setIsAuth(true)}}> <div> <p class="text-#363232"> МОЁ ХРАНИЛИЩЕ</p></div>
                </Button>
                
            </ListGroup.Item>
        </ListGroup>
    </Card>

        <Card style={{width: 700, borderRadius: 36, height: 764, fontFamily:"Play", marginLeft: 500}} className="p-5 #FFFFFF4D">
                <p style={{fontSize:"36px", height: 43, display:"inline-block", position:"absolute", margin:"auto"}}>{isLogin ? '' : ''}</p>

                <Row>
                    <Col className="d-flex justify-content-between mt-3 pl-3 pr-3">    
                </Col>
                </Row> 
        </Card>
        </Container>
    );
});

export default Auth;