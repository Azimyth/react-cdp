import React from 'react';
import PropTypes from 'prop-types';

const DropItem = ({ value }) => <option value={value}>{value}</option>;

DropItem.propTypes = {
    value: PropTypes.string
};

export default DropItem;