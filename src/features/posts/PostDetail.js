import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./PostDetail.css";

function PostDetail() {
  const { postId } = useParams();
  const navigate = useNavigate();
  const post = useSelector((state) =>
    state.posts.posts.find((p) => p.id === postId)
  );
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (post) {
      fetch(`https://www.reddit.com${post.permalink}.json`)
        .then((res) => res.json())
        .then((data) => {
          setComments(data[1].data.children.map((c) => c.data));
          setLoading(false);
        });
    }
  }, [post]);

  if (!post)
    return (
      <div className="post-detail-container" style={{ color: "#a00" }}>
        Post not found.
      </div>
    );

  return (
    <div className="post-detail-container">
      <button className="post-detail-back" onClick={() => navigate(-1)}>
        ← Back
      </button>
      <h2 className="post-detail-title">{post.title}</h2>
      <p className="post-detail-meta">
        <strong>Author:</strong> {post.author} | <strong>Subreddit:</strong>{" "}
        {post.subreddit}
      </p>
      {post.thumbnail && post.thumbnail.startsWith("http") && (
        <img
          src={post.thumbnail}
          alt="thumbnail"
          className="post-detail-thumbnail"
        />
      )}
      <div className="post-detail-body">
        {post.selftext ? (
          <p>{post.selftext}</p>
        ) : (
          <a href={post.url} target="_blank" rel="noopener noreferrer">
            {post.url}
          </a>
        )}
      </div>
      <h3 className="post-detail-comments-title">Comments</h3>
      {loading ? (
        <div style={{ color: "#888" }}>Loading comments...</div>
      ) : comments.length === 0 ? (
        <div style={{ color: "#888" }}>No comments found.</div>
      ) : (
        <ul className="post-detail-comment-list">
          {comments.map(
            (comment) =>
              comment.body && (
                <li key={comment.id} className="post-detail-comment">
                  <span className="post-detail-comment-author">
                    {comment.author}:
                  </span>{" "}
                  <span>{comment.body}</span>
                </li>
              )
          )}
        </ul>
      )}
    </div>
  );
}

export default PostDetail;
