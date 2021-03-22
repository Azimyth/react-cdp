import React from 'react';
import PropTypes from 'prop-types';

const FilterItem = ({ isActive, title }) => (
    <li className={`filters-item ${isActive ? 'active': ''}`}>
        <a href="#">{title}</a>
    </li>
);

FilterItem.propTypes = {
    title: PropTypes.string.isRequired,
    isActive: PropTypes.bool
};

export default FilterItem;