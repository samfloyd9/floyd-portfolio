import { useState } from 'react';
import Button from './Button';

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();

    onSubmit(term);
    setTerm('');
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  };
  
  return (
    <div className="flex flex-row">
      <form onSubmit={handleFormSubmit} className="flex flex-col">
        <label className="font-bold">Enter Search Term <span className="text-xs text-gray-500">(Press Enter)</span></label>
        <input value={term} onChange={handleChange} className="border border-solid border-gray-300 rounded-lg p-2"/>
        <Button className="w-fit mt-2" onClick={handleFormSubmit} primary>Search</Button>
      </form>
    </div>
  );
}

export default SearchBar;