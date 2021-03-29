import React from 'react';
import PropTypes from 'prop-types';
import DropItem from './DropItem';
import './DropList.scss';

const DropList = ({ options }) => (
    <span className="drop-box">
        <select>
            {options.map(value => (
                <DropItem value={value} key={value}/>
            ))}
        </select>
    </span>
);

DropList.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string)
};

export default DropList;