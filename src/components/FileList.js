import React, {useContext} from 'react'; 
import {observer} from "mobx-react-lite"; 
import {Context} from "../index"; 
import {Row} from "react-bootstrap"; 
import FileItem from "./FileItem"; 
// import UserRequest from '../store/userRequest';

const FileList = observer(() => {
    const {UserRequest} = useContext(Context)
    // const x = UserRequest.data.map(data => 
    // <FileItem key={data.id_file} request={data}/>) 
    console.log(UserRequest) 
    return ( 
        <Row> 
            {/* {x} */}
        </Row>
    ); 
});     
 
export default FileList;