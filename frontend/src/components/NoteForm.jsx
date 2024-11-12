import React, { useState, useEffect } from 'react';

const NoteForm = ({ onSubmit, initialData = {}, onCancel }) => {
    // Initialize form fields with state
    const [title, setTitle] = useState(initialData.title || '');
    const [content, setContent] = useState(initialData.content || '');

    // Update form fields if initialData changes (useful for editing existing notes)
    useEffect(() => {
        setTitle(initialData.title || '');
        setContent(initialData.content || '');
    }, [initialData]);

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Call the onSubmit prop with the form data
        onSubmit({ title, content });
    };

    return (
        <form onSubmit={handleSubmit} className="note-form">
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="content">Content</label>
                <textarea
                    id="content"
                    name="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                />
            </div>
            <div className="form-actions">
                <button type="submit" className="submit-button">
                    {initialData.id ? 'Update Note' : 'Add Note'}
                </button>
                {onCancel && (
                    <button type="button" onClick={onCancel} className="cancel-button">
                        Cancel
                    </button>
                )}
            </div>
        </form>
    );
};

export default NoteForm;
