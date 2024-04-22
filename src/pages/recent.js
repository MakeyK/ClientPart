import React, {useContext, useState, useEffect}  from "react";
import {Card, Container, Form, Button, Col, Nav, ListGroup} from 'react-bootstrap'
import { LOGIN_ROUTE, REGISTRATION_ROUTE, FORGOTPASSWORD_ROUTE, MYSTORAGE_ROUTE, FAVORITE_ROUTE, RECENT_ROUTE, BASKET_ROUTE } from "../utils/consts";
// import Row from 'react-bootstrap/Row'
import { useLocation, NavLink, useNavigate } from "react-router-dom";
import { changePassword, check, login, registration } from "../http/userApi";
import {observer} from "mobx-react-lite";
// import Image from 'react-bootstrap/Image';
import {Context} from "../index";
import Clock from '../Files/Clock.png'
import Korzina from '../Files/Korzina.png'
import Star from '../Files/Star.png'
import Chelik from '../Files/Chelik.png'
import FileList from "../components/FileList";
import { selectAllFiles } from "../http/userApi";
import ProgressBar from 'react-bootstrap/ProgressBar';
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import NavBar3 from '../components/NavBar3' 
import { selectAllFilesNew } from "../http/userApi";
import { selectAllFilesOld } from "../http/userApi";


const Recent = observer(() => {
    document.body.style.backgroundImage ="url(/cloud.png)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPositionY = "450px"
    document.body.style.backgroundColor="#D0D0D0"
    const {user} = useContext(Context)
    const {UserRequest} = useContext(Context) 
    const navigate =useNavigate()
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [old_password, setOldPassword] = useState('')
    const [new_password,setNewPassword] = useState('')
    const [new_password_check,setNewPasswordCheck] = useState('')
    const [completed, setCompleted] = useState(0);

    // useEffect(() => {
    //   setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 2000);
    // }, []);
    useEffect(() => {    
      selectAllFilesNew().then(data => {UserRequest.setUserRequest(data) 
        console.log(`Selected ${data}`)})
      }, [])
    const recent = async() => {
        let recent = `recent`
        navigate(RECENT_ROUTE)
    }
    const basket = async() => {
        let basket = `basket`
        navigate(BASKET_ROUTE)
    }
    const favorite = async() => {
        let favorite = `favorite`
        navigate(FAVORITE_ROUTE)
    }
    const mystorage = async() => {
        let mystorage = `mystorage`
        navigate(MYSTORAGE_ROUTE)
    }
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
        <Card style={{ width: 428, height: 856, marginTop: 110, fontFamily:"Play", fontWeight: 'bold', backgroundColor: '#DBDBDB'}}>
        <p style={{paddingBottom:50, paddingLeft: 50,paddingTop: 48}}>
                <Button
                            size={"lg"}
                            variant={"outline-dark-link"}
                            style={{fontWeight:'bold', borderRadius:37}}
                            onClick={mystorage}>
                                <img src={Chelik} style={{width: 67}}/>
                            {isLogin ? '' : 'МОЁ ХРАНИЛИЩЕ'}
                </Button></p>
                <p style={{paddingBottom:40, paddingLeft: 50}}>
                <Button

                            size={"lg"}
                            style={{fontWeight:'bold', borderRadius:37}}
                            variant={"outline-dark"}
                            onClick={recent}>
                                <img src={Clock} style={{width: 67}}/>
                            {isLogin ? '' : 'НЕДАВНИЕ'}
                </Button></p>
                <p style={{paddingBottom:40, paddingLeft: 50}}>
                <Button
                            size={"lg"}
                            variant={"outline-dark-link"}
                            style={{fontWeight:'bold', borderRadius:37}}
                            onClick={favorite}>
                                <img src={Star} style={{width: 67}}/>
                            {isLogin ? '' : 'ИЗБРАННОЕ'}
                </Button></p>
                <p style={{paddingBottom:30, paddingLeft: 50}}>
                <Button
                            size={"lg"}
                            style={{fontWeight:'bold', borderRadius:37}}
                            variant={"outline-link-dark"}
                            onClick={basket}>
                                <img src={Korzina} style={{width: 67}}/>
                            {isLogin ? '' : 'КОРЗИНА'}
                </Button></p>
                <ProgressBar style={{width:332, marginLeft: 50, border: '2px solid'}} variant="dark" now={completed}/>
                <p style={{fontFamily:'Rubik Mono One', fontSize: 12, marginLeft: 71, marginTop: 9}}>
                Использовано {completed} мб из 30 гб
                </p>
                <p style={{paddingLeft: 50, position:'relative', fontFamily:"Rubik Mono One"}}>
                <Button
                            size={"xs"}
                            style={{fontWeight:'bold', borderRadius:37, width: 332}}
                            variant={"outline-dark"}
                            onClick={basket}>
                            {isLogin ? '' : 'Увеличить объём хранилища'}
                </Button></p>
              
        <Card style={{width: 1380, borderRadius: 36, height: 760, fontFamily:"Play", marginTop: 50, marginLeft: 457, position:'absolute', backgroundColor: '#DBDBDB'}}>
        <p style={{paddingLeft: 81, paddingTop: 58, fontSize: 28}}>НЕДАВНИЕ</p>
        <ButtonToolbar aria-label="Toolbar with button groups" style={{position: 'absolute', paddingTop: 117}}>
            <Table striped bordered hover style={{width: 255, height:42, marginLeft: 76, textAlign: 'center', borderRadius: '26px', overflow: 'hidden'}}>
      <thead>
        <tr>
          <th style={{fontSize: 16}}> <NavLink to={FORGOTPASSWORD_ROUTE} style={{color:'black'}}> Файлы </NavLink></th>
          <th style={{fontSize: 16}}> <NavLink style={{color:'black'}}> Папки </NavLink></th>
        </tr>
      </thead>
        </Table>
        <hr
        style={{width: 41, position: 'absolute', marginTop: 22, marginLeft: 333, transform:' rotateZ(90deg)'}}
      className="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50"
    /> 
     <ButtonGroup className="me-2" aria-label="First group">
      <Dropdown style={{paddingLeft: 44}}>
      <Dropdown.Toggle style={{borderRadius:26, fontWeight:'bold',width: 185, height: 42 }} variant="light" id="dropdown-basic">
             Пользователи
        </Dropdown.Toggle>
        <Dropdown.Menu style={{fontWeight:'bold', borderRadius: 26, width: 185, paddingLeft: 5}}>
            <Dropdown.Item style={{borderRadius:26, width: 175}} href="#">Toxic</Dropdown.Item>
            <Dropdown.Item style={{borderRadius:26, width: 175}} href="#">Serotonin</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
      </ButtonGroup>
      <ButtonGroup className="me-2" aria-label="Second group">
      <Dropdown style={{paddingLeft: 22}}>
        <Dropdown.Toggle style={{borderRadius:26, fontWeight:'bold',width: 185, height: 42}} variant="light" id="dropdown-basic">
             Сортировать
        </Dropdown.Toggle>
        <Dropdown.Menu style={{fontWeight:'bold', borderRadius: 26, width: 185, paddingLeft: 5}}>
            <Dropdown.Item style={{borderRadius:26, width: 175}} href="#">По дате создания</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
      </ButtonGroup>
    </ButtonToolbar>
    
    <table style={{marginTop: 63, marginLeft: 59}} className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th style={{}} scope="col" className="px-6 py-4">Наименование</th>
                  <th style={{}} scope="col" className="px-6 py-4">Дата и время</th>
                  <th style={{}} scope="col" className="px-6 py-4">Владелец</th>
                  <th style={{}} scope="col" className="px-6 py-4">Расположение</th>
                </tr>
              </thead>
            </table>
            <hr
        style={{width: 1378, border: '1px solid', position: 'absolute', marginTop: 235}}
      className="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50"/>
        <FileList users={UserRequest.getUser()}/>
        </Card>
    <NavBar3/> 
    </Card>
        </div>
    );
});

export default Recent;