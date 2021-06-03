import React from "react";
import "./Search.css";

const Search = (props) => {
  return (
    <form onSubmit={props.handleSubmit}className="search-bar-container">
      <input
        id="search-bar"
        type="text"
        value={props.search}
        onChange={(e) => props.setSearch(e.target.value)}
        placeholder="Search bikes by brand"
      />
      <button id="search-button" type="submit">
        Search
      </button>
    </form>
  );
};

export default Search;
