import React, { useContext } from 'react'; 
import { observer } from "mobx-react-lite"; 
import { Context } from "../index"; 
import ListGroup from "react-bootstrap/ListGroup"; 
import { Card, Col, Container } from "react-bootstrap";

const FileList = observer(({users}) => { 
 
    return ( 
        
        <ListGroup style={{display: "inline-block",width: 1370, borderRadius: 40, paddingLeft: 15, color: '#FFFFFF4D', overflow: 'scroll'}}> 
            {  
                users.map(data1 => 
                    <ListGroup.Item key={data1.id_file} style={{backgroundColor:'#FFFFFF4D'}}>  
                        <Col md={3} className={"mt-3"} style={{backgroundColor:'#FFFFFF4D'}}> 
                            <Card style={{ width: 1300, cursor: 'pointer', backgroundColor: '#FFFFFF4D'}} border={"#FFFFFF4D"}> 
                                <div className="mt-1 d-flex justify-content-between align-items-center" style={{backgroundColor:'#FFFFFF4D'}}> 
                                    <div className="d-flex align-items-center" style={{backgroundColor:'#FFFFFF4D'}}> 
                                        <div style={{marginLeft: 10, width: 250, color: 'black'}}>{data1.filename}</div> 
                                        <div style={{marginLeft: 150, width: 140, color: 'black'}}>{data1.createdAt}</div> 
                                        <div style={{marginLeft: 190, width: 50, color: 'black'}}>Вы</div> 
                                        <div style={{marginLeft: 190, width: 150, color: 'black'}}>МОЁ ХРАНИЛИЩЕ</div> 
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