import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Button from '../Button/Button';
import './Search.scss';

const Search = () => {
    const { searchQuery } =  useParams();
    const [inputValue, setInputValue] = useState('');
    const history = useHistory();

    useEffect(() => {
        setInputValue(searchQuery ?? '');
    }, [searchQuery])

    const onChangeHandler = e => {
        setInputValue(e.target.value);
    };
    
    const redirection = () => {
        if (inputValue === '') {
            history.push(`/`);
        } else {
            history.push(`/search/${inputValue}`)
        }
    }

    const clickHandler = () => {
        redirection();
    };
    
    const keyPressHandler = e => {
        if (e.key === 'Enter') {
            redirection();
        }
    };

    const onSubmit = e => {
        e.preventDefault();
    };
    
    return (
        <form className="search" onSubmit={onSubmit}>
            <input 
                className="search-control"
                type="search" 
                placeholder="What do you want to watch?"
                value={inputValue}
                onChange={onChangeHandler}
                onKeyPress={keyPressHandler}
            />
            <Button btnType="primary" handler={clickHandler}>Search</Button>
        </form>
    )
}

export default Search;