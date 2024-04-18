import React from "react";
import Card from 'react-bootstrap/Card';
import { Container } from "react-bootstrap";
import Image from 'react-bootstrap/Image';

const MainP = () =>
{
    document.body.style.backgroundImage ="url(/cloud.png)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPositionY = "450px"
    document.body.style.backgroundColor="#D0D0D0"
    return (
        <Container className="d-flex justify-content-center align-items-right"
        style = {{height: window.innerHeight - 54}}>
            <div style={{position:'fixed', paddingTop: 90}}>
            {/* aspectRatio: 135 / 64 */}
            <div><Image className="container-fluid" src="https://sun9-56.userapi.com/impg/ip7S7E7csLKl7QFslLL72f-gzQ1MvYU-ElKJzA/Qf5werH715k.jpg?size=1280x199&quality=96&sign=9adc0319d98ac6d5e023879af3e688a8&type=album"hspace="20"width="1920px"height="331px"fluid/>
            </div>
            </div>
            <Card style={{width: 1294, height:494 , marginTop: 343, borderRadius: 38, fontFamily:"Play", backgroundColor: '#F9F9F9'}}>
            <p style={{fontFamily: 'Play', letterSpacing: 5, fontSize: '37px', marginLeft: 48, marginTop: 7}}>Что такое Cloud Warehouse?</p>
            <hr
            style={{width: 920, position: 'absolute', marginTop: 72}}
            className="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50"/>
            <p style={{fontFamily: 'Play', letterSpacing: 1, fontSize: '28px'}}>
            Cloud WareHouse (CWH) - сайт облачного хранилища. Российский аналог Google Disk, Dropbox и другим сайтам подобной идеи. Наша идея - сделать облако не просто бесплатным, а удобным в использовании, освоении и обмене своих данных!
            </p>
            </Card>
            

            <Card style={{marginLeft: 18, width: 499, height: 494, marginTop: 343, borderRadius: 38, fontFamily:"Play", backgroundColor: '#F9F9F9'}}>
            <p style={{fontFamily: 'Play', letterSpacing: 5, fontSize: '37px', marginLeft: 28, marginTop: 7}}>Разработчики</p>
            <hr
            style={{width: 354, position: 'absolute', marginTop: 72}}
            className="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50"/>
            </Card>
            

            </Container>
    );
};

export default MainP;