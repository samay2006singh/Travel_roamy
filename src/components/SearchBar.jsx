import React from 'react';

const SearchBar = ({ value, onChange }) => {
  return (
    <input
      type="text"
      className="border-black border-2 p-2 w-full max-w-md rounded-xl m-4"
      placeholder="Enter destination"
      value={value}
      onChange={onChange}
    />
  );
};

export default SearchBar;
