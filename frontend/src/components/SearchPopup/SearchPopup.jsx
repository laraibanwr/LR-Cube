// SearchPopup.jsx
import React, { useState } from 'react';
import './SearchPopup.css';
import { assets } from '../../assets/assets';

const SearchPopup = ({ setShowSearch }) => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        // Implement search logic here
        console.log("Searching for:", searchQuery);
        setShowSearch(false); // Close the popup after searching
    };

    return (
        <div className='search-popup'>
            <form className="search-popup-container" onSubmit={handleSearch}>
                <div className="search-popup-title">
                    <h2>Search Residence</h2>
                    <img onClick={() => setShowSearch(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="search-popup-inputs">
                    <input
                        type="text"
                        placeholder='Enter search query'
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Search</button>
            </form>
        </div>
    );
};

export default SearchPopup;
