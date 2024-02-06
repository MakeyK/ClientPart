import React from "react";
import Card from 'react-bootstrap/Card';
import { Container } from "react-bootstrap";
import Image from 'react-bootstrap/Image';

const MainP = () =>
{
    document.body.style.backgroundColor ="#D9D9D9";
    return (
        <Container className="d-flex justify-content-center align-items-right"
        style = {{height: window.innerHeight - 54}}>
            <div><Image src="https://sun9-56.userapi.com/impg/ip7S7E7csLKl7QFslLL72f-gzQ1MvYU-ElKJzA/Qf5werH715k.jpg?size=1280x199&quality=96&sign=9adc0319d98ac6d5e023879af3e688a8&type=album"width="1920px"height="331px"fluid/>
            </div>
            <p class="text-start">
           <div><b></b></div><br></br>
            </p></Container>
    );
};

export default MainP;