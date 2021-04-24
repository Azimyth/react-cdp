import React from 'react';
import PropTypes from 'prop-types';
import CustomCheckbox from './CustomCheckbox';
import { useToggle } from '../../../hooks/useToggle';
import './DropList.scss';

const DropList = ({ options, genres, name, error }) => {
    const [isOpenDrop, setOpenDrop] = useToggle(false);
    const toggleHandler = e => {
        e.preventDefault();
        setOpenDrop();
    };

    return (
        <div className="drop-list">
            <a href="#" onClick={toggleHandler} className={`drop-opener ${error[name] && 'has-error'}`} >
                {genres.length ? genres.join(', ') : 'Select genres'}
            </a>
            {isOpenDrop &&
                <ul className="drop-box">
                    {options.map(value => (
                        <li key={value}>
                            <CustomCheckbox name={name} value={value} checked={genres.includes(value)} label={value} />
                        </li>
                    ))}
                </ul>
            }
        </div>
    )
};

DropList.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    genres: PropTypes.arrayOf(PropTypes.string),
    name: PropTypes.string
};

export default DropList;