import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import PostList from "./features/posts/PostList";
import PostDetail from "./features/posts/PostDetail"; // Lo crearás en el siguiente paso
import SearchBar from "./features/search/SearchBar";
import CategoryFilter from "./features/categories/CategoryFilter";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [subreddit, setSubreddit] = useState("popular");

  return (
    <Router>
      <div className="App">
        <header>
          <h1>Reddit App</h1>
          <SearchBar onSearch={setSearchTerm} />
          <CategoryFilter selected={subreddit} onSelect={setSubreddit} />
        </header>
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <PostList searchTerm={searchTerm} subreddit={subreddit} />
              }
            />
            <Route path="/post/:postId" element={<PostDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
