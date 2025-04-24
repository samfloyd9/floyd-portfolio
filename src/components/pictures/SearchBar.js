import { useState } from 'react';

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  };
  
  return (
    <div className="border border-gray-300 rounded-lg p-2.5">
      <form onSubmit={handleFormSubmit} className="flex flex-col">
        <label className="mb-2">Enter Search Term</label>
        <input
          className="border border-gray-300 rounded p-2"
          value={term}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default SearchBar;
