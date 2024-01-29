import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
//import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";


const RaspBar = observer(() => {
    const {raspStore} = useContext(Context)
    return (
        <ListGroup>
            {raspStore.predmet.map(predmet1 =>
                <ListGroup.Item key={predmet1.id}>
                    { predmet1.predmet}
                </ListGroup.Item>
            )}
        </ListGroup>
        //<div>asd</div>
    );
});

export default RaspBar;