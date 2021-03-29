import React, {useState} from 'react';
import './SimpleSearch.scss';
import Icon from '../Icon/Icon';
import {useToggle} from '../../hooks/useToggle'

const SimpleSearch = () => {
    const [isInputShown, showInput] = useToggle(false);
    const [inputValue, setInputValue] = useState('');

    const onChangeHandler = (e) => {
        setInputValue(e.target.value);
    };

    const toggleInput = (e) => {
        e.preventDefault();
        showInput();
    }

    return (
        <form className="simple-search">
            {isInputShown &&
                <input 
                    className="search-control"
                    type="search"
                    value={inputValue}
                    onChange={onChangeHandler}
                />
            }
            <button className="button" onClick={toggleInput}>
                <Icon size={25} iconName="search"/>
            </button>
        </form>
    )
}

export default SimpleSearch;