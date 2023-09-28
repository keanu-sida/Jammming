import React from 'react';

const mockData = [
    { id: '1', name: 'Song 1', artist: 'Artist A' },
    { id: '2', name: 'Song 2', artist: 'Artist B' },
    { id: '3', name: 'Song 3', artist: 'Artist A' },
    // ... add more mock data as needed
];

const SearchResults = ({ results = mockData }) => {
    return (
        <div>
            <h2>Search Results</h2>
            <ul>
                {results.map(result => (
                    <li key={result.id}>
                        <strong>{result.name}</strong> by {result.artist}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SearchResults;
