import React, { useState } from 'react';
import Button from '../Button/Button';
import './Search.scss';

const Search = () => {
    const [inputValue, setInputValue] = useState('');

    const onChangeHandler = (e) => {
        setInputValue(e.target.value);
    };
    
    return (
        <form className="search">
            <input 
                className="search-control" 
                type="search" 
                placeholder="What do you want to watch?"
                value={inputValue}
                onChange={onChangeHandler}
            />
            <Button btnType="primary">Search</Button>
        </form>
    )
}

export default Search;