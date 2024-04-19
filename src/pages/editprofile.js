import React, {useContext, useRef, useState}  from "react";
import {Card, Container, Form, Button, Col } from 'react-bootstrap'
import { LOGIN_ROUTE, REGISTRATION_ROUTE, EDITPROFILE_ROUTE, MAIN_ROUTE, FORGOTPASSWORD_ROUTE, FORGOTPASSWORD_ROUTE2 } from "../utils/consts";
import Row from 'react-bootstrap/Row'
import { useLocation, NavLink, useNavigate } from "react-router-dom";
import { login, registration, selectAllFiles } from "../http/userApi";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import Avatar from 'react-avatar';
import Modal from 'react-modal';
import NavBar from "../components/NavBar";
import Smilecloud from '../Files/Smilecloud.png'
import Telegramm from '../Files/telegramm.png'
import SadCloud from '../Files/Sadcloud.png'

const EditProfile = observer(() => {
    document.body.style.backgroundImage ="url(/cloud.png)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPositionY = "450px"
    document.body.style.backgroundColor="#D0D0D0"
    const {user} = useContext(Context)
    const navigate = useNavigate()
    const location = useLocation()
    const filepiker = useRef(null)
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploadded, setUploaded] = useState();
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [nickname, setNickname] = useState('')
    const [password,setPassword] = useState('')
    const [password_check,setPasswordCheck] = useState('')

    
    const forgotpassword = async() => {
        let forgotpassword = `forgotpassword`
        navigate(FORGOTPASSWORD_ROUTE2)
    }

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const openModal = () => {
      setModalIsOpen(true);
    };
    const closeModal = () => {
      setModalIsOpen(false);
    };
  
    
    const click1 = async () =>{
        console.log(email)
        try
        {
            const response = await selectAllFiles()
            return response
        }
            catch(e)
            {
                alert(e)
            }
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

    const fileRef = React.useRef();
    let [file, setFile] = React.useState();
    const handleChange = (event) => {
        setFile(event.target.files[0])};

        const modalContent = (
            <div style={{textAlign:'center', marginTop: 427}} className="disk_upload">
              <p style={{fontFamily:"Play", display:'inline-block'}}>
              <Button type='file-input'
              ref={fileRef} 
              onChange={handleChange} 
              className="upload"
              id="upload"
              onClick={() => fileRef.current.click()}
              name="file_avatar"
              style={{borderRadius: 41, height:70, width:384}}
              variant={"outline-dark"}
              size="lg">
                 { file &&  file!==undefined && file!==null &&
                <div>
                <p>{file.name}</p>
                <p>{file.size}</p>
                <p>{file.type}</p>
                </div>
                }  
                Открыть изображение
                </Button>
              <Button 
              style={{borderRadius: 41, height:70, width:384}}
              variant={"outline-dark"}
              size="lg"
              onClick={closeModal}
              > Применить изменения</Button>
              </p>
            </div>
          );
    return (
        <Container
        className = 'd-flex justify-content-center align-items-center'
        style = {{width: 1402, height: 446, marginTop: 181}}>
        <Card style={{width: 1402, borderRadius: 36, height: 712, fontFamily:"Play", display:"inline-block", position:"relative", margin:"auto"}} className="p-5 #FFFAF4">
            <div> <p style={{fontFamily:"Play", color:"#A8A8A8", marginLeft:"58px"}}>Настройки</p>
            
            </div>
            <div class="navbar navbar-default navbar-fixed-top">
                
            <ul class="list-group" style={{borderRadius: 24,marginLeft:"58px", border: "1px solid"}} >
            <li class="list-group-item d-flex justify-content-between align-items-center" ><p style={{fontFamily:"Play"}}>
                <NavLink style={{color:'black', marginLeft: 75}}> Безопасность </NavLink>
            </p>
            <span class="badge badge-primary badge-pill"></span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center"><p style={{fontFamily:"Play"}}>
                <NavLink style={{color:'black'}}> Конфиденциальность информации </NavLink></p>
            <span class="badge badge-primary badge-pill"></span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center"><p style={{fontFamily:"Play"}}>
                <NavLink style={{color: 'black', marginLeft: 75}}> Чёрный список </NavLink></p>
            <span class="badge badge-primary badge-pill"></span>
            </li>
            </ul><p>
            <Avatar size={"197px"} round src={Telegramm}/></p>
            <p style={{paddingBottom: 100}}>
            <Button
                name="file_avatar"
                type="file"
                style={{borderRadius: 41, height:70, width:384}}
                variant={"outline-dark"}
                size="lg"
                
                            onClick={openModal}>
                       {isLogin ? '' : 'Изменить фото профиля'} 
                </Button>
                <Modal isOpen={modalIsOpen} onRequestClose={closeModal} >
                {modalContent}
                </Modal>
                
                </p>

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
                <img src={SadCloud} style={{width: 58, marginTop: 70, marginLeft: 227}}/>
                <p style={{color: 'black', fontWeight: 'bold', marginLeft: 110}}> На данный момент у вас нету друзей </p>
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
        <NavBar/>
        </Container>
    );
});

export default EditProfile;