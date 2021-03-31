import React from 'react';
import PropTypes from 'prop-types';

const FilterItem = props => (
    <li className={`filters-item ${props.isActive ? 'active': ''}`}>
        <a href="#">{props.title}</a>
    </li>
);

FilterItem.propTypes = {
    title: PropTypes.string.isRequired,
    isActive: PropTypes.bool
};

export default FilterItem;