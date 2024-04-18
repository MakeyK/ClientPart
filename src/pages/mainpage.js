import React from "react";
import Card from 'react-bootstrap/Card';
import { Container } from "react-bootstrap";
// import Image from 'react-bootstrap/Image';
import Smilecloud from '../Files/Smilecloud.png'
import Main from '../Files/main.jpeg'

const MainP = () =>
{
    document.body.style.backgroundImage ="url(/cloud.png)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPositionY = "450px"
    document.body.style.backgroundColor="#D0D0D0"
    return (
        <Container className="d-flex justify-content-center align-items-right"
        style = {{height: window.innerHeight - 54}}>
            <div style={{position:'fixed', paddingTop: 96}}>
            <img src={Main} style={{width: window.innerWidth, height: 248}}/>
            </div>
            <Card style={{width: 1294, height:494 , marginTop: 360, borderRadius: 38, fontFamily:"Play", backgroundColor: '#F9F9F9'}}>
            <p style={{fontFamily: 'Play', letterSpacing: 5, fontSize: '37px', marginLeft: 48, marginTop: 7}}>Что такое Cloud Warehouse?</p>
            <hr
            style={{ marginTop: 1}}
            className="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-30 dark:opacity-50"/>
            <p style={{fontFamily: 'Play', letterSpacing: 1, fontSize: '28px', marginLeft: 48}}>
            Cloud WareHouse (CWH) - сайт облачного хранилища. Российский аналог Google Disk, Dropbox и другим сайтам подобной идеи. Наша идея - сделать облако не просто бесплатным, а удобным в использовании, освоении и обмене своих данных!
            </p>
            </Card>
            

            <Card style={{marginLeft: 18, width: 700, height: 494, marginTop: 360, borderRadius: 38, fontFamily:"Play", backgroundColor: '#F9F9F9'}}>
            <p style={{fontFamily: 'Play', letterSpacing: 5, fontSize: '37px', marginTop: 7, textAlign: 'center'}}>Разработчики</p>
            <hr
            style={{marginTop: 1}}
            className="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-30 dark:opacity-50"/>
            
            <p style={{fontFamily: 'Play', width: 447, fontSize: 13, letterSpacing: 2, color: '#000000A6'}}>
            <img src={Smilecloud} style={{width: 82, marginTop: 19, marginLeft: 38, display: 'inline'}}/>
            Разработчик дизайн макет сайта 
            </p>
            <p style={{position:'absolute', color: 'black', paddingTop: 143, fontFamily: 'Play', 
            paddingLeft:133, fontSize: '35px', letterSpacing: 2}}>Сердечный М.С.</p>

            <p style={{fontFamily: 'Play', width: 447, fontSize: 13, letterSpacing: 2, color: '#000000A6'}}>
            <img src={Smilecloud} style={{width: 82, marginTop: 19, marginLeft: 38}}/>
            Разработчик клиентской части сайта
            </p>
            <p style={{position:'absolute', color: 'black', paddingTop: 260, fontFamily: 'Play', 
            paddingLeft:133, fontSize: '35px', letterSpacing: 2}}>Макеева Е.В.</p>

            <p style={{fontFamily: 'Play', width: 447, fontSize: 13, letterSpacing: 2, color: '#000000A6'}}>
            <img src={Smilecloud} style={{width: 82, marginTop: 19, marginLeft: 38}}/>
            Разработчик серверной части сайта
            </p>
            <p style={{position:'absolute', color: 'black', paddingTop: 373, fontFamily: 'Play', 
            paddingLeft:133, fontSize: '35px', letterSpacing: 2}}>Мухторов Р.С.</p> 
            </Card>
            

            </Container>
    );
};

export default MainP;