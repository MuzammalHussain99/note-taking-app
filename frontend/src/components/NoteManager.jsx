import React, { useState, useEffect } from 'react';
import { getAllNotes, createNote, updateNote, deleteNote } from '../services/NoteService';

const NoteManager = () => {
    const [notes, setNotes] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [currentNote, setCurrentNote] = useState({ title: '', content: '' });
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        loadNotes();
    }, []);

    const loadNotes = async () => {
        try {
            const data = await getAllNotes();
            setNotes(Array.isArray(data) ? data : []);
        } catch (error) {
            console.error("Error fetching notes:", error);
            setNotes([]);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCurrentNote((prevNote) => ({ ...prevNote, [name]: value }));
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if (isEditing) {
            await updateNote(currentNote.id, currentNote);
        } else {
            await createNote(currentNote);
        }
        setCurrentNote({ title: '', content: '' });
        setIsEditing(false);
        setIsModalOpen(false); // Close modal after saving
        loadNotes();
    };

    const handleEdit = (note) => {
        setIsEditing(true);
        setCurrentNote(note);
        setIsModalOpen(true); // Open modal for editing
    };

    const handleDelete = async (id) => {
        await deleteNote(id);
        loadNotes();
    };

    return (
        <div className="note-manager">
            <h1>Note Manager</h1>
            <button onClick={() => { setIsEditing(false); setCurrentNote({ title: '', content: '' }); setIsModalOpen(true); }} className="add-note-button">
                Add Note
            </button>

            {/* Notes List */}
            <div className="note-list">
                {notes.map((note) => (
                    <div key={note.id} className="note-item">
                        <h2 className="note-title">{note.title}</h2>
                        <p className="note-content">{note.content}</p>
                        <div className="note-actions">
                            <button onClick={() => handleEdit(note)} className="edit-button">
                                Edit
                            </button>
                            <button onClick={() => handleDelete(note.id)} className="delete-button">
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal for Adding/Editing Notes */}
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>{isEditing ? 'Edit Note' : 'Add Note'}</h2>
                        <form onSubmit={handleFormSubmit} className="note-form">
                            <input
                                type="text"
                                name="title"
                                placeholder="Title"
                                value={currentNote.title}
                                onChange={handleInputChange}
                                required
                            />
                            <textarea
                                name="content"
                                placeholder="Content"
                                value={currentNote.content}
                                onChange={handleInputChange}
                                required
                            ></textarea>
                            <button type="submit" className="save-button">
                                {isEditing ? 'Update Note' : 'Add Note'}
                            </button>
                            <button
                                type="button"
                                onClick={() => setIsModalOpen(false)}
                                className="cancel-button"
                            >
                                Cancel
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NoteManager;
