import React from "react";
import Card from 'react-bootstrap/Card';
import { Container } from "react-bootstrap";
import Image from 'react-bootstrap/Image';

const MainP = () =>
{
    document.body.style.backgroundImage ="url('https://png.pngtree.com/back_origin_pic/03/90/78/4a4fd3e8a537931c6fc51b6112ae5105.jpg')";
    return (
        <Container className="d-flex justify-content-center align-items-center"
        style = {{height: window.innerHeight - 54}}>
            <Card style={{width: 600}} className="d-flex justify-content-center align-items-center">
            <div ><Image src="https://sun6-20.userapi.com/s/v1/if1/XRDuxnC8OXECl_OgK-soxDF3VODt4ATOTq-RTPwupqbfOIqzOexaGe5aje0YZ90hGMvxTyT-.jpg?size=1845x2160&quality=96&crop=0,0,1845,2160&ava=1"thumbnail width="600" />
            <p class="text-center">Школа №55 </p>
            </div></Card>
            <p class="text-start">
           <div><b>Полное наименование образовательной организации:</b> Муниципальное общеобразовательное учреждение школа №55 муниципального образования городской округ Люберцы Московской области</div><br></br>
            <div><b>Сокращённое наименование образовательной организации:</b> Школа №55</div> <br></br>
        <div><b> Учредитель образовательной организации: </b> Администация муниципального образования городской округ Люберцы Московской области<br></br></div><pre></pre>
        <div> <b>Дата создания образовательной организации:</b> 09.07.1985<br></br></div><pre></pre>
        <div><b>Языки образования:</b> Русский<br></br></div></p>
            </Container>
    );
};

export default MainP;