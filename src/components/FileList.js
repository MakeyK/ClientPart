import React, { useContext } from 'react'; 
import { observer } from "mobx-react-lite"; 
import { Context } from "../index"; 
import ListGroup from "react-bootstrap/ListGroup"; 
import { Card, Col, Container } from "react-bootstrap"; 
 
const FileList = observer(({users}) => { 
 
    console.log(users) 
    return ( 
        
        <ListGroup style={{ display: "inline-block",width: 1350, borderRadius: 40 }}> 
            {  
                users.map(data1 => 
                    <ListGroup.Item key={data1.id_file}> 
                        <Col md={3} className={"mt-3"}> 
                            <Card style={{ width: 1300, cursor: 'pointer'}} border={"light"}> 
                                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center"> 
                                    <div className="d-flex align-items-center"> 
                                        <div style={{marginLeft: 10}}>{data1.filename}</div> 
                                        <div style={{marginLeft: 150}}>{data1.createdAt}</div> 
                                        <div style={{marginLeft: 190}}>Вы</div> 
                                        <div style={{marginLeft: 190}}>МОЁ ХРАНИЛИЩЕ</div> 
                                    </div> 
                                </div> 
                            </Card> 
                        </Col> 
                    </ListGroup.Item> 
                )} 
        </ListGroup>
    ); 
}); 
 
export default FileList;