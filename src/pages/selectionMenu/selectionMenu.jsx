import React from 'react';
import {
    ListGroup,
    Row,
    Col,
    InputGroup,
    FormControl,
    Container,
} from 'react-bootstrap';

import './selectionMenu.scss'

const SelectionMenu = () => {
    return (
        <section className='selection-menu mt-3'>
            <Container fluid>
                <Row>
                    <Col sm={6}>
                        <ListGroup>
                            <ListGroup.Item className='selection-item'>Educators</ListGroup.Item>
                            <ListGroup.Item className='selection-item'>Students</ListGroup.Item>
                            <ListGroup.Item className='selection-item'>Groups</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col sm={6}>
                        <InputGroup className='mb-3'>
                            <FormControl placeholder='Search...'/>
                        </InputGroup>
                        <ListGroup>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default SelectionMenu;