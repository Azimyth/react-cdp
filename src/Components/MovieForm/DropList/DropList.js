import React from 'react';
import PropTypes from 'prop-types';
import DropItem from './DropItem';
import { useToggle } from '../../../hooks/useToggle';
import './DropList.scss';

const DropList = ({ options, label, genres, changeHandler }) => {
    const [isOpenDrop, setOpenDrop] = useToggle(false);
    
    const toggleHandler = e => {
        e.preventDefault();
        setOpenDrop();
    }

    return (
        <div className="drop-list">
            <label className="form-control">
                {label}
                <a href="#" className="drop-opener" onClick={toggleHandler} >Select genres</a>
            </label>
            {isOpenDrop &&
                <ul className="drop-box">
                    {options.map(value => (
                        <DropItem value={value} key={value} changeHandler={changeHandler} checked={genres.includes(value)} />
                    ))}
                </ul>
            }
        </div>
    )
};

DropList.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    label: PropTypes.string
};

export default DropList;