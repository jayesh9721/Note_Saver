import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteNote } from "../redux/notesSlice";
import toast from "react-hot-toast";

const NotesList = () => {
  const notes = useSelector((state) => state.notes.notes);
  const dispatch = useDispatch();

  return (
    <div>
      {notes.length === 0 ? (
        <p>No notes found!</p>
      ) : (
        notes.map((note) => (
          <div key={note.id} className="note-card">
            <h3>{note.title}</h3>
            <Link to={`/notes/${note.id}`} onClick={() => toast.success("Opening note...")}>View</Link>
            <button
              onClick={() => {
                dispatch(deleteNote(note.id));
                toast.success("Note deleted successfully!");
              }}
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default NotesList;