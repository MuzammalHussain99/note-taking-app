import React, { useState } from 'react';
import NoteForm from './NoteForm';
import NoteItem from './NoteItem';
import './style.css';
import { createNote, updateNote, deleteNote } from '../services/NoteService';

const NoteContainer = () => {
    const [notes, setNotes] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [currentNote, setCurrentNote] = useState(null);

    const handleAddNoteClick = () => {
        setIsEditing(true);
        setCurrentNote(null);
    };

    const handleSubmit = async (data) => {
        if (isEditing && currentNote) {
            await updateNote(currentNote.id, data);
        } else {
            await createNote(data);
        }
        setIsEditing(false);
        setCurrentNote(null);
        // Reload or fetch notes after save
    };

    const handleEdit = (note) => {
        setIsEditing(true);
        setCurrentNote(note);
    };

    const handleDelete = async (id) => {
        await deleteNote(id);
        // Reload or fetch notes after deletion
    };

    return (
        <div className="note-container">
            <button onClick={handleAddNoteClick} className="add-note-button">
                Add Note
            </button>

            {isEditing ? (
                <NoteForm
                    onSubmit={handleSubmit}
                    initialData={currentNote}
                    onCancel={() => setIsEditing(false)}
                />
            ) : (
                <div className="note-list">
                    {notes.map((note) => (
                        <NoteItem
                            key={note.id}
                            note={note}
                            onDelete={handleDelete}
                            onEdit={handleEdit}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default NoteContainer;
