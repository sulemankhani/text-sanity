"use client";

import React, { useState, useEffect } from "react";

const CommentSec = () => {
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<{ username: string; comment: string }[]>([]);

  // Local Storage se comments load karna
  useEffect(() => {
    const savedComments = localStorage.getItem("comments");
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    }
  }, []);

  // Comment save karna
  const handleAddComment = () => {
    if (username.trim() && comment.trim()) {
      const newComment = { username, comment };
      const updatedComments = [...comments, newComment];

      setComments(updatedComments);
      localStorage.setItem("comments", JSON.stringify(updatedComments)); // Local Storage mein save karna
      setUsername("");
      setComment("");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4 bg-gray-100 rounded-lg shadow-lg mt-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Comment Section</h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
            Comment
          </label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
            rows={4}
            placeholder="Write your comment"
          ></textarea>
        </div>
        <button
          onClick={handleAddComment}
          className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition"
        >
          Add Comment
        </button>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">All Comments</h3>
        <div className="space-y-4">
          {comments.map((c, index) => (
            <div
              key={index}
              className="p-4 border rounded-lg bg-white shadow-md"
            >
              <p className="font-medium text-blue-600">{c.username}</p>
              <p className="text-gray-700">{c.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommentSec;
