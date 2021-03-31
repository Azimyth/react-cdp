import React from 'react';
import './Search.scss';

const Search = () => (
    <form className="search">
        <input className="search-control" type="search" placeholder="What do you want to watch?" />
        <button className="search-button">Search</button>
    </form>
)

export default Search;