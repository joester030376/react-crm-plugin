import React, { useState } from 'react';
<<<<<<< HEAD
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
=======
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
>>>>>>> Added a new notepad component. Needs css done and needs a submit button and some other items to save notes to a database.


export default function NotePad() {

<<<<<<< HEAD
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
=======
    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty(),
    );

    const onEditorStateChange = (editorState) => {
        setEditorState(editorState);
    }

    return(
        <div>
            <Editor 
                editorState={editorState}
                onEditorStateChange={onEditorStateChange}
            />
        </div>
>>>>>>> Added a new notepad component. Needs css done and needs a submit button and some other items to save notes to a database.
    );
}