import React from 'react';
import './SearchBar.css';

const SearchBar = ({ searchQuery, onSearchChange }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="제목 또는 내용으로 검색..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        className="search-input"
      />
      {searchQuery && (
        <button
          className="search-clear"
          onClick={() => onSearchChange('')}
          aria-label="검색 초기화"
        >
          ×
        </button>
      )}
    </div>
  );
};

export default SearchBar;

