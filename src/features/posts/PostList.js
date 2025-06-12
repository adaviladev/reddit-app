import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPosts } from "./postsSlice";
import "./PostList.css";

function PostList({ searchTerm, subreddit }) {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const status = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);

  useEffect(() => {
    dispatch(fetchPosts(subreddit));
  }, [dispatch, subreddit]);

  if (status === "loading") return <div>Loading posts...</div>;
  if (status === "failed") return <div>Error: {error}</div>;

  const filteredPosts = searchTerm
    ? posts.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : posts;

  return (
    <div>
      <p>
        <strong>Posts loaded:</strong> {filteredPosts.length}
      </p>
      {filteredPosts.map((post) => (
        <div className="post-list-item" key={post.id}>
          <h3 className="post-list-title">
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </h3>
          <p className="post-list-meta">
            <strong>Subreddit:</strong> {post.subreddit} |{" "}
            <strong>Author:</strong> {post.author}
          </p>
          <p className="post-list-meta">
            <strong>Votes:</strong> {post.ups} | <strong>Comments:</strong>{" "}
            {post.num_comments}
          </p>
          {post.thumbnail && post.thumbnail.startsWith("http") && (
            <img
              className="post-list-thumbnail"
              src={post.thumbnail}
              alt="thumbnail"
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default PostList;
