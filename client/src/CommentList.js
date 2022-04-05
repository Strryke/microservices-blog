import React, { useState, useEffect } from "react";
import axios from "axios";

const CommentList = ({ postId }) => {
  const [commentList, setCommentList] = useState([]);

  const fetchComments = async () => {
    const res = await axios.get(
      `http://localhost:4001/posts/${postId}/comments`
    );
    setCommentList(res.data);
  };

  useEffect(() => {
    fetchComments();
  }, []);
  console.log(commentList);

  const comments = commentList.map((comment) => {
    return <li key={comment.id}>{comment.content}</li>;
  });

  return <ul>{comments}</ul>;
};

export default CommentList;
