import React, { useContext } from 'react'; 
import { observer } from "mobx-react-lite"; 
import { Context } from "../index"; 
import ListGroup from "react-bootstrap/ListGroup"; 
import { Button, Card, Col, Container } from "react-bootstrap";
import Delete from '../Files/delete.png'
import Download from '../Files/download.png'
import { LOGIN_ROUTE, REGISTRATION_ROUTE, FORGOTPASSWORD_ROUTE,RECENT_ROUTE, FAVORITE_ROUTE, BASKET_ROUTE, MYSTORAGE_ROUTE } from "../utils/consts";
import { useLocation, NavLink, useNavigate } from "react-router-dom";
import useDownloader from 'react-use-downloader';
import { removeFile } from '../http/userApi';


const FileList = observer(({users, aboba}) => {
    const {user} = useContext(Context)
    const {UserRequest} = useContext(Context) 
    const navigate = useNavigate()
    const location = useLocation()
    const { size, elapsed, percentage, download, cancel, error, isInProgress } = useDownloader();
    
    const RemoveFile = async() => {
        try
        {
            const response = await removeFile()
        }
        catch(e)
        {
            alert(e)
        }
    }
    const basket = async() => {
        let basket = `basket`
        navigate(BASKET_ROUTE)
      }

    return ( 
        <ListGroup style={{display: "inline-block",width: 1370, borderRadius: 40, paddingLeft: 15, color: '#FFFFFF4D', overflow: 'scroll'}}> 
            {  
                users.map(data1 =>
                    <ListGroup.Item key={data1.id_file} style={{backgroundColor:'#FFFFFF4D'}}>  
                        <Col md={3} className={"mt-3"} style={{backgroundColor:'#FFFFFF4D'}}> 
                            <Card style={{ width: 1300, cursor: 'pointer', backgroundColor: '#FFFFFF4D'}} border={"#FFFFFF4D"}> 
                                <div className="mt-1 d-flex justify-content-between align-items-center" style={{backgroundColor:'#FFFFFF4D'}}> 
                                    <div className="d-flex align-items-center" style={{backgroundColor:'#FFFFFF4D'}}> 
                                        <div
                                        style={{marginLeft: 10, width: 300, color: 'black'}}>{data1.filename}
                                        {/* <div style={{}}> */}
                                            <Button
                                            style={{width: 65, height: 40, borderRadius: '78px', marginLeft: 53}}
                                            variant='outline-dark'
                                            onClick={async () => await download(data1.path_file, data1.filename)}
                                            >
                                        <img src={Download} style={{width: 40}}/><a></a>
                                        </Button>
                                        <Button
                                            style={{ marginLeft: 10, borderRadius: '78px', width: 65, height: 40}}
                                            variant='outline-dark'
                                            onClick={async()=> await removeFile(data1.id_file)}>
                                        <img src={Delete} style={{width: 40}}/>
                                        </Button> 
                                        {/* </div> */}
                                        </div>
                                        <div style={{marginLeft: 100, width: 140, color: 'black'}}>{data1.createdAt}</div> 
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