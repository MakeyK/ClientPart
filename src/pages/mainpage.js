import React from "react";
import Card from 'react-bootstrap/Card';
import { Container } from "react-bootstrap";
import Image from 'react-bootstrap/Image';

const MainP = () =>
{
    document.body.style.backgroundColor ="#D9D9D9";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPositionY = "450px"
    return (
        <Container className="d-flex justify-content-center align-items-right"
        style = {{height: window.innerHeight - 54}}>
            <div >
            <div><Image className="container-fluid" src="https://sun9-56.userapi.com/impg/ip7S7E7csLKl7QFslLL72f-gzQ1MvYU-ElKJzA/Qf5werH715k.jpg?size=1280x199&quality=96&sign=9adc0319d98ac6d5e023879af3e688a8&type=album"hspace="20"width="1920px"height="331px"fluid/>
            </div><br></br>
            <div class="navbar navbar-default navbar-fixed-top">
            <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center" >
                
            Что такое Cloud Warehouse?
            <span class="badge badge-primary badge-pill"></span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
            Cloud WareHouse (CWH) - сайт облачного хранилища. Российский аналог Google Disk, Dropbox и другим сайтам подобной идеи. Наша идея - сделать облако не просто бесплатным, а удобным в использовании, освоении и обмене своих данных!
            <span class="badge badge-primary badge-pill"></span>
            </li>
            </ul>
            </div>

            <nav class="navbar navbar-default navbar-fixed-bottom">
            <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center" >
            Разработчики
            <span class="badge badge-primary badge-pill"></span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
            <dl class="dl-horizontal">
                
            <Image src="https://sun9-31.userapi.com/impg/Ufhk8LPztTmxg283kvTDVMc9mt2MFqNSW4F1RQ/xS-9Zourb9Y.jpg?size=96x96&quality=96&sign=03f5e7e11421d9088323d3125f48ed8b&type=album"width="92px"height="92px"></Image>
            Разработчик дизайн макета сайта
            Сердечный М.С. <br></br>
            
            <Image src="https://sun9-31.userapi.com/impg/Ufhk8LPztTmxg283kvTDVMc9mt2MFqNSW4F1RQ/xS-9Zourb9Y.jpg?size=96x96&quality=96&sign=03f5e7e11421d9088323d3125f48ed8b&type=album"width="92px"height="92px"></Image> 
            Разработчик клиентской части сайта 
            Макеева Е.В.<br></br>
            
            <Image src="https://sun9-31.userapi.com/impg/Ufhk8LPztTmxg283kvTDVMc9mt2MFqNSW4F1RQ/xS-9Zourb9Y.jpg?size=96x96&quality=96&sign=03f5e7e11421d9088323d3125f48ed8b&type=album"width="92px"height="92px"></Image>
            Разработчик серверной части сайта 
            Мухторов Р.С.
            </dl>
            </li>
            </ul>
            </nav>
            </div>
            
            </Container>
    );
};

export default MainP;