import React from 'react';
import PropTypes from 'prop-types';

const DropItem = props => <option value={props.value}>{props.value}</option>;

DropItem.propTypes = {
    value: PropTypes.string
};

export default DropItem;