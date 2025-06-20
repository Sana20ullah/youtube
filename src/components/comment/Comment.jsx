import React from "react";
import "./Comment.css";

const Comments = ({ comments }) => {
  return (
    <div className="comments-section">
      <h3>{comments.length} Comments</h3>

      {/* Top Comment Input Box */}
      <div className="comment-input-row">
        <img
          src="https://i.pravatar.cc/40?img=4"
          alt="Your Profile"
          className="comment-pic"
        />
        <input
          type="text"
          className="comment-input"
          placeholder="Add a comment..."
        />
      </div>

      <hr className="comment-divider" />

      <div className="comment-bottom-row">
        <span className="emoji-icon">😊</span>
        <div className="comment-buttons">
          <button className="cancel-btn">Cancel</button>
          <button className="post-btn">Comment</button>
        </div>
      </div>

      {/* Render all existing comments */}
      {comments.map((comment, index) => (
        <div key={index} className="comment">
          <div className="comment-top">
            <img src={comment.profilePic} alt="User" className="comment-pic" />
            <div className="comment-details">
              <div className="comment-meta">
                <span className="comment-author">{comment.name}</span>
                <span className="comment-time">• {comment.time}</span>
              </div>
              <p className="comment-text">{comment.text}</p>
              <p className="comment-translate">Translate</p>

              <div className="comment-actions">
                <button className="comment-btn">👍 {comment.likes}</button>
                <button className="comment-btn">👎</button>
                <button className="comment-btn reply-btn">Reply</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
