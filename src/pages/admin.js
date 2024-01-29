import React, {useState} from "react";
import {Button, Container} from "react-bootstrap";
import CreateRasp from "../components/modals/CreateRasp";

const Admin = () =>
{
    const [predmetVisible, setPredmetVisible] = useState(false)
    return (
        <Container className="d-flex flex-column">
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setPredmetVisible(true)}>
                    Добавить Предмет
                    </Button> 
                    <CreateRasp show={predmetVisible} onHide={() => setPredmetVisible(false)}/>
            </Container>
    );
};

export default Admin;