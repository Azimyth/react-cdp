import React from 'react';
import Button from '../Button/Button';
import './Search.scss';

const Search = () => (
    <form className="search">
        <input className="search-control" type="search" placeholder="What do you want to watch?" />
        <Button btnType="primary" >Search</Button>
    </form>
)

export default Search;