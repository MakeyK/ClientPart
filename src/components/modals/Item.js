import React from 'react';
import {Card, Col} from "react-bootstrap";
import {Navigate} from "react-router-dom";

const RaspItem = ({mark}) => {

    return (
        <Col md={3} className={"mt-3"}>
            <Card style={{width: 150, cursor: 'pointer',color:'danger'}} border={"light"}>
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                    <div>Предмет</div>
                    <div className="d-flex align-items-center">
                        <div>{mark.mark}</div>
                    </div>
                </div>
                <div>{mark.updatedAt}</div>
            </Card>
        </Col>
    );
};

export default RaspItem;