import React, {useContext, useRef, useState, useEffect}  from "react";
import {Card, Container, Form, Button, Col } from 'react-bootstrap'
import { LOGIN_ROUTE, REGISTRATION_ROUTE, EDITPROFILE_ROUTE, MAIN_ROUTE, FORGOTPASSWORD_ROUTE, FORGOTPASSWORD_ROUTE2 } from "../utils/consts";
// import Row from 'react-bootstrap/Row'
import { useLocation, NavLink, useNavigate } from "react-router-dom";
import { changeProfile, getProfile, login, registration, selectAllFiles } from "../http/userApi";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
// import Avatar from 'react-avatar';
import Modal from 'react-modal';
import NavBar from "../components/NavBar";
// import Smilecloud from '../Files/Smilecloud.png'
import SadCloud from '../Files/Sadcloud.png'
// import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
// import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Upload from 'rc-upload'
import { fetch_avatar } from "../http/userApi";
import AvatarList2 from "../components/AvatarList2";
import NavBar3 from '../components/NavBar3'
import NavBar2 from '../components/NavBar2'
import NavBar4 from "../components/NavBar4";


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
    const [password,setPassword] = useState('')
    const [password_check,setPasswordCheck] = useState('')
    const [status, setStatus] = useState(false);

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
    
    useEffect(() => {
      fetch_avatar().then(data => 
        {
          user.setAvatar(data)
        })
        
      }, [])
      
      useEffect(() => {
        getProfile().then(data => 
          {
            user.setEmail(data.email)
            user.setNickname(data.nickname)
          })
          
          
        }, [])
        
        // let nickname = user.getNickname()
        // let email = user.getEmail()
        const [email, setEmail] = useState('')
        const [nickname, setNickname] = useState('')
        
        const AcceptChanges = async() => {
          try
          {
              const response = await changeProfile(nickname, email)
              console.log(response)
          }
              catch(e)
              {
                  alert(e)
              }
          }
    // const click = async () =>{
    // console.log(email)
    // try
    // {
    //     if (isLogin)
    //     {
    //         const response = await login(email, password, password_check)
    //         console.log(response)
    //     }
    //     else
    //     {
    //         console.log(email)
    //         const response = await registration(email, password, password_check)
    //         console.log(response)
    //     }
    //     user.setUser()
    //     user.setIsAuth(true)
    //     navigate(MAIN_ROUTE)
    // }
    //     catch(e)
    //     {
    //         alert(e)
    //     }
    // }


    const [imgData, setImgdata] = useState();
    const [fileName, setFileName] = useState();
    const [fileSize, setFileSize] = useState();
    const [percentage, setPercentage] = useState(0);
    const [isUploading, setIsUploading] = useState(false);

    const props = {
      action: `${process.env.REACT_APP_API_URL}cwh/upload/avatar`,
      headers: {Authorization: `Bearer ${localStorage.getItem('token')}`},
      method: "PATCH",
      beforeUpload(file) {
        setIsUploading(true);
        setFileName(file.name);
        setFileSize(Math.floor(file.size / 1000));
        if (file.type === "image/png") {
          const reader = new FileReader();
          reader.onloadend = () => {
            setImgdata(reader.result);
          };
          reader.readAsDataURL(file);
        }
        // console.log(file.name)
      },
      onSuccess() {
        setIsUploading(false);
      },
      onProgress(step) {
        setPercentage(Math.round(step.percent));
      },
      onError(err) {
        // console.log("onError", err);
      }
    };


        const modalContent = (
            <div style={{textAlign:'center', marginTop: 427}} className="disk_upload">
              <p style={{fontFamily:"Play", display:'inline-block'}}>
              <Upload {...props}>
              <Button id="upload-button"
              style={{borderRadius: 41, height:70, width:384}}
              variant={"outline-dark"}
              size="lg">
                Открыть изображение
                </Button></Upload>    
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
        <Card style={{width: 1402, borderRadius: 36, height: 712, fontFamily:"Play", position:"relative", margin:"auto"}} className="p-5 #FFFAF4">
            <div>
                 <p style={{fontFamily:"Play", color:"#A8A8A8", marginLeft:"58px"}}>Настройки</p>
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
            <AvatarList2 users={user.getAvatar()}/>
            </p>
            <ButtonToolbar aria-label="Toolbar with button groups" style={{width: 390}}>
      <ButtonGroup className="me-2" aria-label="First group">
        <Button
            name="file_avatar"
            type="file"
            style={{borderRadius: 41, height:70, width:384}}
            variant={"outline-dark"}
            size="lg"
                        onClick={openModal}>
                   {isLogin ? '' : 'Изменить фото профиля'} 
            
            </Button>
      </ButtonGroup>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} >
        {modalContent}
        </Modal>
      <ButtonGroup className="me-2" aria-label="Second group">
        <Button 
        style={{borderRadius: 41, height:70, width:384, marginTop: 43}}
        variant={"outline-dark"}
        size="lg"
                    onClick={forgotpassword}>
               {isLogin ? '' : 'Изменить пароль'}
        </Button>
      </ButtonGroup>
    </ButtonToolbar>
    
    
    <div style={{width: 503, fontFamily:'Play', marginLeft: 47, fontSize: '19px'}}>
    <p style={{fontFamily:"Play", color:"#A8A8A8"}}>Ваше имя</p>
    <Form className="d-flex flex-column" style={{position:'relative', paddingBottom:'70px', width: 503, height: 70}}>
    <Form.Control
          style={{borderRadius: 70, border: '1px solid', fontSize: '24px', fontWeight: 'bold'}}
          placeholder= {user.getNickname()}
          value = {nickname}
            onChange = { e => setNickname(e.target.value)}
          />   
      </Form>
      <p style={{fontFamily:"Play", color:"#A8A8A8"}}>Ваше почта</p>
      <Form className="d-flex flex-column" style={{position:'relative', paddingBottom:'70px', width: 503, height: 70}}>
      <Form.Control
        style={{borderRadius: 70, border: '1px solid', fontSize: '24px', fontWeight: 'bold'}}
          type="email"
          value = {email}
          onChange = { e => setEmail(e.target.value)}
          placeholder= {user.getEmail()}
          />
      </Form>
        
        </div>
        <p style={{fontFamily:"Play", color:"#A8A8A8", fontSize: '20px'}}>Ваши друзья
        <ul variant="light" class="list-group" style={{borderRadius: 24, border: "1px solid", height: 231, width: 503, marginTop: 15}}>
        <img src={SadCloud} style={{width: 58, marginTop: 70, marginLeft: 227}}/>
        <p style={{color: 'black', fontWeight: 'bold', marginLeft: 74}}> На данный момент у вас нету друзей </p>
        </ul></p>
        
        <Button
            style={{borderRadius: 41, height:70, width:384, marginLeft: 410, marginTop: 10}}
            variant={"outline-dark"}
            size="lg"
                onClick={AcceptChanges}>
           {isLogin ? '' : 'Применить изменения'} 
        </Button>
        </div>
        </Card> 
        <NavBar4/>
        </Container>
    );
});

export default EditProfile;









{/* <p style={{paddingBottom: 100}}>
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
    <p style={{position:'absolute', marginTop: 557, marginLeft: 507}}>
    <Button
    style={{borderRadius: 41, height:70, width:384}}
    variant={"outline-dark"}
    size="lg"
                onClick={forgotpassword}>
           {isLogin ? '' : 'Применить изменения'} 
    </Button> </p>
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