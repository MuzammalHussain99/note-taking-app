import React from 'react';

const NoteItem = ({ note, onDelete, onEdit }) => {
    return (
        <div className="note-item">
            <h2 className="note-title">{note.title}</h2>
            <p className="note-content">{note.content}</p>
            <div className="note-actions">
                <button onClick={() => onEdit(note)} className="update-button">
                    Update
                </button>
                <button onClick={() => onDelete(note.id)} className="delete-button">
                    Delete
                </button>
            </div>
        </div>
    );
};

export default NoteItem;
