import React, { useState, useEffect } from "react";
import "./Comment.css";

const Comments = ({ videoId }) => {
  const LOCAL_KEY = `comments_${videoId}`;
  const [commentText, setCommentText] = useState("");
  const [allComments, setAllComments] = useState([]);
  const [expanded, setExpanded] = useState(false);

  // Load comments for this video
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem(LOCAL_KEY)) || [];
    setAllComments(stored);
  }, [videoId]);

  const handlePost = () => {
    if (!commentText.trim()) return;

    const newComment = {
      name: "You",
      profilePic: "https://i.pravatar.cc/40?img=9",
      time: "Just now",
      text: commentText.trim(),
      likes: 0,
    };

    const updated = [...allComments, newComment];
    setAllComments(updated);
    localStorage.setItem(LOCAL_KEY, JSON.stringify(updated));
    setCommentText("");
    setExpanded(true);
  };

  const visibleComments = expanded ? allComments : allComments.slice(0, 1);

  return (
    <div className={`comments-section ${expanded ? "expanded" : ""}`}>
      <h3>{allComments.length} Comments</h3>

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
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
      </div>

      <hr className="comment-divider" />

      <div className="comment-bottom-row">
        <span className="emoji-icon">😊</span>
        <div className="comment-buttons">
          <button className="cancel-btn" onClick={() => setCommentText("")}>
            Cancel
          </button>
          <button className="post-btn" onClick={handlePost}>
            Comment
          </button>
        </div>
      </div>

      {visibleComments.map((comment, index) => (
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

      {!expanded && allComments.length > 1 && (
        <button
          className="show-more-comments"
          onClick={() => setExpanded(true)}
        >
          Show more comments
        </button>
      )}
    </div>
  );
};

export default Comments;
