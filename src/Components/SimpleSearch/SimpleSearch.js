import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import { useToggle } from '../../hooks/useToggle';
import Icon from '../Icon/Icon';
import './SimpleSearch.scss';

const SimpleSearch = () => {
    const history = useHistory();
    const [inputValue, setInputValue] = useState('');
    const [isInputShown, showInput] = useToggle(false);

    const onChangeHandler = (e) => {
        setInputValue(e.target.value);
    };

    const toggleInput = (e) => {
        e.preventDefault();
        showInput();
    };

    const keyPressHandler = e => {
        if (e.key === 'Enter') {
            if (inputValue === '') {
                history.push(`/`);
            } else {
                history.push(`/search/${inputValue}`)
            }
        }
    };

    const onSubmit = e => {
        e.preventDefault();
    };

    return (
        <form className="simple-search" onSubmit={onSubmit}>
            {isInputShown &&
                <input 
                    autoFocus
                    className="search-control"
                    type="search"
                    value={inputValue}
                    onChange={onChangeHandler}
                    onKeyPress={keyPressHandler}
                />
            }
            <button className="button" onClick={toggleInput}>
                <Icon size={25} iconName="search"/>
            </button>
        </form>
    )
}

export default SimpleSearch;