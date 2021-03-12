import React from 'react';
import PropTypes from 'prop-types';
import DropItem from './DropItem';
import './DropList.scss';

const DropList = props => (
    <span className="drop-box">
        <select>
            {props.options.map(value => (
                <DropItem value={value} key={value}/>
            ))}
        </select>
    </span>
);

DropList.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string)
};

export default DropList;