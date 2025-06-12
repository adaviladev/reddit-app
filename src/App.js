import React from "react";
import "./App.css";
import PostList from "./features/posts/PostList";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Reddit App</h1>
      </header>
      <main>
        <PostList />
      </main>
    </div>
  );
}

export default App;
