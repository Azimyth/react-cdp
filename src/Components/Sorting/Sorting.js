import React from 'react';
import PropTypes from 'prop-types';
import DropList from '../DropList/DropList';
import './Sorting.scss';

const Sorting = props => (
    <label className="sorting">
        Sort by
        <DropList options={props.sortOptions} />
    </label>
);

Sorting.propTypes = {
    sortOptions: PropTypes.arrayOf(PropTypes.string)
};

export default Sorting;