import React from "react";
import "./Search.css";

const Search = (props) => {
  return (
    <form className="search-bar-container">
      <input
        id="search-bar"
        type="text"
        value={props.search}
        onChange={(e) => props.setSearch(e.target.value)}
        placeholder="Search bikes"
      />
      <button id="search-button" type="submit">
        Search
      </button>
    </form>
  );
};

export default Search;
