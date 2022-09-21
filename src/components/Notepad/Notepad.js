import React, { useState } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


export default function NotePad() {

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
    );
}