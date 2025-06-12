import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "./postsSlice";

function PostList() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const status = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPosts());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return <div>Loading posts...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {posts.map((post) => (
        <div
          key={post.id}
          style={{
            borderBottom: "1px solid #ccc",
            marginBottom: "1rem",
            paddingBottom: "1rem",
          }}
        >
          <h3>{post.title}</h3>
          <p>
            <strong>Subreddit:</strong> {post.subreddit} |{" "}
            <strong>Author:</strong> {post.author}
          </p>
          <p>
            <strong>Votes:</strong> {post.ups} | <strong>Comments:</strong>{" "}
            {post.num_comments}
          </p>
          {post.thumbnail && post.thumbnail.startsWith("http") && (
            <img
              src={post.thumbnail}
              alt="thumbnail"
              style={{ maxWidth: 100 }}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default PostList;
