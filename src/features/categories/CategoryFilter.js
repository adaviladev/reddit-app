import React from "react";
import "./CategoryFilter.css";

const subreddits = [
  "popular",
  "reactjs",
  "javascript",
  "webdev",
  "frontend",
  "news",
];

function CategoryFilter({ selected, onSelect }) {
  return (
    <select
      className="category-filter-select"
      value={selected}
      onChange={(e) => onSelect(e.target.value)}
    >
      {subreddits.map((sub) => (
        <option key={sub} value={sub}>
          {sub}
        </option>
      ))}
    </select>
  );
}

export default CategoryFilter;
