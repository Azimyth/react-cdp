import React from 'react';
import PropTypes from 'prop-types';

const FilterItem = ({ isActive, title, onclick }) => (
    <li className={`filters-item ${isActive && 'active'}`}>
        <a href="#" data-value={title} onClick={onclick}>{title}</a>
    </li>
);

FilterItem.propTypes = {
    title: PropTypes.string.isRequired,
    isActive: PropTypes.bool,
    onclick: PropTypes.func
};

export default FilterItem;