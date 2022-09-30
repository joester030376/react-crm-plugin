import React, { useState } from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Made an intake form with a simple validation check before submission to the database.
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
<<<<<<< HEAD
=======
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
<<<<<<< HEAD
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
>>>>>>> Added a new notepad component. Needs css done and needs a submit button and some other items to save notes to a database.
=======
//import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
>>>>>>> Added handlers for value changes in each of the fields.
=======
>>>>>>> Made an intake form with a simple validation check before submission to the database.


export default function NotePad() {

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Made an intake form with a simple validation check before submission to the database.
    const [clientNotes, setClientNotes] = useState('');

    const handleClientNotes = (e) => {
        setClientNotes(e.target.value);
    }
<<<<<<< HEAD

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
=======
    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty(),
    );
=======
>>>>>>> Made an intake form with a simple validation check before submission to the database.

    const submitNotes = (e) => {
        e.preventDefault();
    }


    return(
<<<<<<< HEAD
        <div>
            <Editor 
                editorState={editorState}
                onEditorStateChange={onEditorStateChange}
            />
        </div>
>>>>>>> Added a new notepad component. Needs css done and needs a submit button and some other items to save notes to a database.
=======
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
>>>>>>> Made an intake form with a simple validation check before submission to the database.
    );
}