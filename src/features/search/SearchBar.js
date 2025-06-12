import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar({ onSearch }) {
  const [term, setTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(term);
  };

  return (
    <form className="search-bar-form" onSubmit={handleSubmit}>
      <input
        className="search-bar-input"
        type="text"
        placeholder="Search posts..."
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <button className="search-bar-button" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
