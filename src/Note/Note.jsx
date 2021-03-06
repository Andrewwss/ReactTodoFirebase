import React, { Component } from 'react';
import './Note.css';
import PropTypes from 'prop-types';

class Note extends Component {

    constructor(props) {
        super(props);
        this.noteContent = props.noteContent;
        this.noteId = props.noteId;
        this.handleRemoveNote = this.handleRemoveNote.bind(this);
    }

    handleRemoveNote(id) {
        this.props.removeNote(id);
    }

    render() {
        return (
            <li className="note fade-in">
                <div className="noteContent">
                    { this.noteContent }
                    <div className="timestamp">Time Here</div>
                </div>
                <button className="closebtn"
                        onClick={() => this.handleRemoveNote(this.noteId)}>
                    Delete
                </button>
            </li>
        );
    }
}

Note.propTypes = {
    noteContent: PropTypes.string,
    // noteTime: PropTypes.string
};

export default Note;