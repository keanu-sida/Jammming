import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [term, setTerm] = useState('');

    const onInputChange = (e) => {
        setTerm(e.target.value);
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
        onSearch(term);
    };
    
    return (
        <div>
            <form onSubmit={onFormSubmit}>
                <div>
                    <label>Search: </label>
                    <input
                        type="text"
                        value={term}
                        onChange={onInputChange}
                    />
                    <button type="submit">Search</button>
                </div>
            </form>
        </div>
    );
};

export default SearchBar;
