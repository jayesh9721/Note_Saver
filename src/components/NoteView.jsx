import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

const NoteView = () => {
  const { id } = useParams();
  const note = useSelector((state) => state.notes.notes.find((n) => n.id === id));

  if (!note) return <p>Note not found!</p>;

  const handleCopy = () => {
    navigator.clipboard.writeText(note.content);
    toast.success("Note content copied to clipboard!");
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ title: note.title, text: note.content })
        .then(() => toast.success("Note shared successfully!"))
        .catch(() => toast.error("Failed to share"));
    } else {
      handleCopy();
    }
  };

  const handleEdit = () => {
    // Your edit logic here
    toast.success("Note updated successfully!");
  };

  return (
    <div className="note-view">
      <div className="note-view-content">
        <h3>{note.title}</h3>
        <p>{note.content}</p>
      </div>
      <div className="note-view-buttons">
        <button onClick={handleCopy}>Copy</button>
        <button onClick={handleShare}>Share</button>
        <button onClick={handleEdit}>Edit</button>
      </div>
    </div>
  );
};

export default NoteView;
