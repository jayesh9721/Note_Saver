import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../redux/notesSlice";
import toast from "react-hot-toast";

const Home = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const handleCreate = () => {
    if (!title || !content) {
      toast.error("Title and Content are required!");
      return;
    }
    dispatch(addNote({ id: Date.now().toString(), title, content }));
    toast.success("Note Created!");
    setTitle("");
    setContent("");
  };

  return (
    <div className="home">
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea placeholder="Write your note..." value={content} onChange={(e) => setContent(e.target.value)} />
      <button onClick={handleCreate}>Create Note</button>
    </div>
  );
};

export default Home;
