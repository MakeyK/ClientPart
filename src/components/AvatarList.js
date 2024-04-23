import React, { useContext } from 'react'; 
import { observer } from "mobx-react-lite"; 
import { Context } from "../index"; 
import ListGroup from "react-bootstrap/ListGroup"; 
import { Card, Col, Container } from "react-bootstrap";
import Avatar from 'react-avatar';

const AvatarList = observer(({users}) => {
    if(!users) return 0
    return ( 
        
                users.map(data => 
                    <Avatar size={"75px"}  round src={data}/>
                ) 
    ); 
}); 
 
export default AvatarList;