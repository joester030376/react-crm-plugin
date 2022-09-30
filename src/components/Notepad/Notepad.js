import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function NotePad() {

    const [clientNotes, setClientNotes] = useState('');

    const handleClientNotes = (e) => {
        setClientNotes(e.target.value);
    }

    const submitNotes = (e) => {
        e.preventDefault();
    }


    return(
        <Form onSubmit={submitNotes}>
            <Row>
                <Form.Group>
                    <Form.Control 
                        as="textarea" rows={10}
                        value={clientNotes}
                        onChange={handleClientNotes}
                    />
                </Form.Group>
            </Row>
            <Row className="submit-button">
                <Button variant="primary" type="submit">Submit Notes</Button> 
            </Row>  
        </Form>
    );
}