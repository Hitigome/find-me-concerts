'use client'
import React, { useState } from 'react';

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [city, setCity] = useState<string>('');
  
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            onSearch(city);
        }
    }

return (
    <input 
    className={"border-2 rounded-md w-30 text-black"} 
    type="text" placeholder="Search..." 
    onChange={(e) => setCity(e.target.value)}
    onKeyDown={handleKeyDown} 
    />

)

}

export default SearchBar;