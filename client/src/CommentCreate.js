import React, { useState } from "react";
import axios from "axios";

const CommentCreate = ({ postId }) => {
  const [comment, setComment] = useState("");
  const commentSubmit = async (event) => {
    event.preventDefault();
    await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
      content: comment,
    });
    setComment("");
  };
  return (
    <div>
      <form onSubmit={commentSubmit}>
        <label>Comment</label>
        <input
          type="text"
          className="form-control"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button className="btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default CommentCreate;
