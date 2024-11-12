import React, { useEffect, useState } from 'react';
import { getNotes, deleteNote } from '../services/NoteService';
import NoteItem from './NoteItem';
import './style.css';
import NoteContainer from "./NoteContainer.jsx";

const NoteList = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        loadNotes();
    }, []);

    const loadNotes = async () => {
        const response = await getNotes();
        setNotes(response.data);
    };

    const handleDelete = async (id) => {
        await deleteNote(id);
        loadNotes();
    };

    return (
        <div>
            <NoteContainer></NoteContainer>
            {notes.map((note) => (
                <NoteItem key={note.id} note={note} onDelete={handleDelete} />
            ))}
        </div>
    );
};

export default NoteList;
