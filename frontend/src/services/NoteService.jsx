import axios from 'axios';

const API_URL = 'http://localhost:8000/api/notes';

// Fetch all notes
export const getAllNotes = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

// Create a new note
export const createNote = async (note) => {
    const response = await axios.post(API_URL, note);
    return response.data;
};

// Update an existing note
export const updateNote = async (id, note) => {
    const response = await axios.put(`${API_URL}/${id}`, note);
    return response.data;
};

// Delete a note
export const deleteNote = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
};
