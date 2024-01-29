import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {Row} from "react-bootstrap";
import RaspItem from "./RaspItem";

const RaspList = observer(() => {
    const {RaspStore} = useContext(Context)

    return (
        <Row className="d-flex">
            {RaspStore.predmet.map(predmet1 =>
                <RaspItem key={predmet1.id} predmet={predmet1}/>
            )}
        </Row>
    );
});

export default RaspList;