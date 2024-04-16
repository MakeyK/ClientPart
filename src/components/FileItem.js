import React from 'react'; 
import {Card, Col} from "react-bootstrap"; 
 
const FileItem = ({data}) => { 
 
    return ( 
        <Col md={3} className={"mt-3"}> 
            <Card style={{width: 1400, cursor: 'pointer'}} border={"light"}> 
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center"> 
                    <div className="d-flex align-items-center"> 
                        <div>{data.filename}</div> 
                        <div>{data.createdAt}</div> 
                        <div>Вы</div>
                        <div>МОЁ ХРАНИЛИЩЕ</div>
                    </div>
                </div> 
            </Card> 
        </Col> 
    ); 
}; 

export default FileItem;